using System.Security.Cryptography;
using System.Text;
using Application.Interfaces.Contexts;
using Common.Dto;
using Microsoft.Extensions.Configuration;

namespace Application.Services.UserToken.Commands.AddUserToken
{
    public class AddUserTokenService : IAddUserTokenService
    {
        private readonly IDatabaseContext _context;
        private readonly IConfiguration _configuration;
        public AddUserTokenService(IDatabaseContext context,
                              IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }
        public ResultDto<ResultAddUserTokenDto> Execute(RequestAddUserTokenDto request)
        {
            var UserTokens = _context.UserTokens.Where(x => x.UserId == request.UserId);
            if (UserTokens.Count() > 0)
            {
                if (UserTokens.First().ExpireDate > DateTime.Now)
                {
                    Int32 minutes = Convert.ToInt32(_configuration["AppSettings:TokenMinutes"]);
                    UserTokens.First().ExpireDate = request.ExpireDate.AddMinutes(minutes);
                    _context.SaveChanges();
                    return new ResultDto<ResultAddUserTokenDto>
                    {
                        Data = new ResultAddUserTokenDto
                        {
                            Token = UserTokens.First().Token,
                            UserId = request.UserId,
                        },
                        IsSuccess = true,
                        Message = "با موفقیت ثبت شد."
                    };
                }
                _context.UserTokens.Remove(UserTokens.First());
                _context.SaveChanges();
            }
            //
            var salt = Guid.NewGuid().ToString("N");
            string TokenStr = new Random().Next(0, 1000000).ToString("D6");
            try
            {
                Domain.Entities.Users.UserToken UserToken = new Domain.Entities.Users.UserToken
                {
                    UserId = request.UserId,
                    ExpireDate = request.ExpireDate,
                    Token = EncodePassword(TokenStr, salt),
                };
                _context.UserTokens.Add(UserToken);
                _context.SaveChanges();
                return new ResultDto<ResultAddUserTokenDto>
                {
                    Data = new ResultAddUserTokenDto
                    {
                        Token = UserToken.Token,
                        UserId = request.UserId,
                    },
                    IsSuccess = true,
                    Message = "با موفقیت ثبت شد."
                };
            }
            catch
            {
                return new ResultDto<ResultAddUserTokenDto>
                {
                    Data = new ResultAddUserTokenDto { Token = "" },
                    IsSuccess = false,
                    Message = "ثبت با خطا مواجه شد."
                };

            }
        }
        public static string EncodePassword(string pass, string salt) //encrypt password   

        {

            byte[] bytes = Encoding.Unicode.GetBytes(pass);

            byte[] src = Encoding.Unicode.GetBytes(salt);

            byte[] dst = new byte[src.Length + bytes.Length];

            System.Buffer.BlockCopy(src, 0, dst, 0, src.Length);

            System.Buffer.BlockCopy(bytes, 0, dst, src.Length, bytes.Length);

            HashAlgorithm algorithm = HashAlgorithm.Create("SHA1");

            byte[] inArray = algorithm.ComputeHash(dst);

            //return Convert.ToBase64String(inArray);   
            return EncodePasswordMd5(Convert.ToBase64String(inArray));


        }
        public static string EncodePasswordMd5(string pass) //Encrypt using MD5   

        {

            Byte[] originalBytes;

            Byte[] encodedBytes;

            MD5 md5;

            //Instantiate MD5CryptoServiceProvider, get bytes for original password and compute hash (encoded password)   

            md5 = new MD5CryptoServiceProvider();

            originalBytes = ASCIIEncoding.Default.GetBytes(pass);

            encodedBytes = md5.ComputeHash(originalBytes);

            //Convert encoded bytes back to a 'readable' string   

            return BitConverter.ToString(encodedBytes);

        }
    }
}
