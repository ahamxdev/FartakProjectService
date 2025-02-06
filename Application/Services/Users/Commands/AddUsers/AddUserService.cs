using System.Security.Cryptography;
using System.Text;
using Application.Interfaces.Contexts;
using Common.Dto;
using Domain.Entities.Users;

namespace Application.Services.Users.Commands.AddUsers
{
    public class AddUserService : IAddUserService
    {
        private readonly IDatabaseContext _context;
        public AddUserService(IDatabaseContext context)
        {
            _context = context;
        }
        public ResultDto<ResultAddUserDto> Execute(RequestAddUserDto request)
        {
            var salt = Guid.NewGuid().ToString("N");
            if (_context.Users.Where(p => p.Mobile.Equals(request.Mobile)).Count() > 0)
            {
                return new ResultDto<ResultAddUserDto>()
                {
                    Data = new ResultAddUserDto() { },
                    IsSuccess = false,
                    Message = "شماره موبایل تکراری میباشد."
                };
            }
            try
            {

                string verify = new Random().Next(0, 1000000).ToString("D6");
                User user = new User
                {
                    Lastname = request.Lastname,
                    Name = request.Name,
                    Status = request.Status,
                    Verify = verify,
                    Salt = salt,
                    PassWord = EncodePassword(request.PassWord, salt),
                    Mobile = request.Mobile,
                    Email = request.Email,
                    Kind = request.Kind,
                };
                _context.Users.Add(user);
                _context.SaveChanges();
                return new ResultDto<ResultAddUserDto>
                {
                    Data = new ResultAddUserDto
                    {
                        UserId = user.UserId,
                        Verify = verify,
                        Kind = user.Kind,
                    },
                    IsSuccess = true,
                    Message = "با موفقیت ثبت شد."
                };
            }
            catch
            {
                return new ResultDto<ResultAddUserDto>
                {
                    Data = new ResultAddUserDto { UserId = 0 },
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
