
using System.Security.Cryptography;
using System.Text;
using Application.Interfaces.Contexts;
using Common.Dto;

namespace Application.Services.Users.Commands.EditUsers
{
    public class EditUserService : IEditUserService
    {
        private readonly IDatabaseContext _context;

        public EditUserService(IDatabaseContext context)
        {
            _context = context;
        }
        public ResultDto Execute(RequestEditUserDto request)
        {
            var salt = Guid.NewGuid().ToString("N");
            var user = _context.Users.Find(request.UserId);

            if (user == null)
            {
                return new ResultDto
                {
                    IsSuccess = false,
                    Message = "یافت نشد"
                };
            }


            try
            {
                if (_context.Users.Where(p => p.Mobile.Equals(request.Mobile) && p.UserId != request.UserId).Count() > 0)
                {
                    return new ResultDto()
                    {
                        IsSuccess = false,
                        Message = "شماره موبایل تکراری میباشد."
                    };
                }


                user.Name = request.Name;
                user.Lastname = request.Lastname;
                user.Status = request.Status;
                user.PassWord = (user.PassWord != null) ? EncodePassword(request.Password, salt) : "";
                user.Mobile = (request.Mobile != null) ? request.Mobile : "";
                user.Email = (request.Email != null) ? request.Email : "";
                user.Kind = (request.Kind != 0) ? request.Kind : 0;
                user.Verify = (user.Verify != null) ? new Random().Next(0, 1000000).ToString("D6") : "";
                _context.SaveChanges();

                return new ResultDto()
                {
                    IsSuccess = true,
                    Message = "ویرایش انجام شد"
                };
            }
            catch
            {
                return new ResultDto()
                {
                    IsSuccess = false,
                    Message = "ویرایش با خطا مواجه شد"
                };
            }

        }

        public ResultDto ChangePassword(RequestChangeUserPasswordDto request)
        {
            var salt = Guid.NewGuid().ToString("N");
            var user = _context.Users.Find(request.UserId);
            if (user == null)
            {
                return new ResultDto
                {
                    IsSuccess = false,
                    Message = "یافت نشد"
                };
            }

            try
            {
                if (user.PassWord == EncodePassword(request.OldPassword, user.Salt))
                {
                    user.Salt = salt;
                    user.PassWord = EncodePassword(request.NewPassWord, salt);
                    _context.SaveChanges();
                }
                else
                {
                    return new ResultDto
                    {
                        IsSuccess = false,
                        Message = "پسورداشتباه می باشد."
                    };
                }



                return new ResultDto()
                {
                    IsSuccess = true,
                    Message = "ویرایش انجام شد"
                };
            }
            catch
            {
                return new ResultDto()
                {
                    IsSuccess = false,
                    Message = "ویرایش با خطا مواجه شد"
                };
            }
        }

        public ResultDto<ResultEditForgetPasseordDto> ForgetPassword(RequestEditUserForgetPasswordDto request)
        {
            var salt = Guid.NewGuid().ToString("N");
            var user = _context.Users.Where(x => x.Mobile.Equals(request.Mobile)).FirstOrDefault();
            if (user == null)
            {
                return new ResultDto<ResultEditForgetPasseordDto>
                {
                    Data = new ResultEditForgetPasseordDto() { PassWord = "" },
                    IsSuccess = false,
                    Message = "یافت نشد"
                };
            }
            var passWord = GeneratePassword(8);
            try
            {
                user.Salt = salt;
                user.PassWord = EncodePassword(passWord, salt);
                _context.SaveChanges();
                return new ResultDto<ResultEditForgetPasseordDto>
                {
                    Data = new ResultEditForgetPasseordDto
                    {
                        UserId = user.UserId,
                        PassWord = passWord
                    },
                    IsSuccess = true,
                    Message = "ویرایش انجام شد"
                };
            }
            catch
            {
                return new ResultDto<ResultEditForgetPasseordDto>()
                {
                    Data = new ResultEditForgetPasseordDto() { PassWord = "" },
                    IsSuccess = false,
                    Message = "ویرایش با خطا مواجه شد"
                };

            }
        }

        public static string GeneratePassword(int length = 8) //length of salt   

        {

            const string allowedChars = "abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNOPQRSTUVWXYZ0123456789";

            var randNum = new Random();

            var chars = new char[length];

            var allowedCharCount = allowedChars.Length;

            for (var i = 0; i <= length - 1; i++)

            {

                chars[i] = allowedChars[Convert.ToInt32((allowedChars.Length) * randNum.NextDouble())];

            }

            return new string(chars);

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
