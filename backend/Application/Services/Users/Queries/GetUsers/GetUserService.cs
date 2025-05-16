using System.Security.Cryptography;
using System.Text;
using Application.Interfaces.Contexts;
using Application.Services.Users.Queries.GetUser;
using Common.Dto;

namespace Application.Services.Users.Queries.GetUsers
{
    public class GetUserService : IGetUserService
    {
        private readonly IDatabaseContext _context;
        public GetUserService(IDatabaseContext context)
        {
            _context = context;
        }
        public ResultGetUserDto GetAll()
        {

            var users = _context.Users;
            var userList = users.Select(p => new GetUserDto
            {
                UserId = p.UserId,
                PassWord = "",
                Email = p.Email,
                Verify = "",
                Status = p.Status,
                Mobile = p.Mobile,
                Kind = p.Kind,
                Lastname = p.Lastname,
                Name = p.Name,
                Salt = ""

            }).OrderBy(x => x.UserId).ToList();
            return new ResultGetUserDto()
            {
                Users = userList,
                Rows = userList.Count,


            };

        }

        public ResultGetUserDto GetById(RequestGetUserByIdDto request)
        {
            var users = _context.Users.Where(x => x.UserId == request.UserId);
            var userList = users.Select(p => new GetUserDto
            {
                UserId = p.UserId,
                PassWord = "",
                Email = p.Email,
                Verify = "",
                Status = p.Status,
                Mobile = p.Mobile,
                Kind = p.Kind,
                Lastname = p.Lastname,
                Name = p.Name,
                Salt = ""


            }).OrderBy(x => x.UserId).ToList();
            return new ResultGetUserDto()
            {

                Users = userList,
                Rows = userList.Count,

            };
        }


        public ResultGetUserDto GetByKind(RequestGetUserByKindDto request)
        {
            var users = _context.Users.Where(x => x.Kind == request.Kind);
            var userList = users.Select(p => new GetUserDto
            {
                UserId = p.UserId,
                PassWord = "",
                Email = p.Email,
                Verify = "",
                Status = p.Status,
                Mobile = p.Mobile,
                Kind = p.Kind,
                Lastname = p.Lastname,
                Name = p.Name,
                Salt = ""


            }).OrderBy(x => x.UserId).ToList();
            return new ResultGetUserDto()
            {

                Users = userList,
                Rows = userList.Count,

            };
        }

        public ResultGetUserDto GetByFullNameTeacher(RequestGetUserByNameDto request)
        {
            var users = _context.Users.Where(x => (x.Name.ToLower() + " " + x.Lastname.ToLower()).Contains(request.FullName.ToLower()) &&
              x.Kind == 2);
            var userList = users.Select(p => new GetUserDto
            {
                UserId = p.UserId,
                PassWord = "",
                Email = p.Email,
                Verify = "",
                Status = p.Status,
                Mobile = p.Mobile,
                Kind = p.Kind,
                Lastname = p.Lastname,
                Name = p.Name,
                Salt = ""


            }).OrderBy(x => x.UserId).ToList();
            return new ResultGetUserDto()
            {

                Users = userList,
                Rows = userList.Count,

            };
        }

        public ResultGetUserDto GetByMobile(RequestGetUserByMobileDto request)
        {
            var users = _context.Users.Where(x => x.Mobile == request.Mobile);
            var userList = users.Select(p => new GetUserDto
            {
                UserId = p.UserId,
                PassWord = "",
                Email = p.Email,
                Verify = "",
                Status = p.Status,
                Mobile = p.Mobile,
                Kind = p.Kind,
                Lastname = p.Lastname,
                Name = p.Name,
                Salt = ""

            }).OrderBy(x => x.UserId).ToList();
            return new ResultGetUserDto()
            {

                Users = userList,
                Rows = userList.Count,

            };
        }


        public ResultDto<GetUserDto> GetByMobilePassword(RequestGetUserByMobilePasswordDto request)
        {

            var user = _context.Users.FirstOrDefault(x => x.Mobile == request.Mobile);
            if (user != null && user.PassWord == EncodePassword(request.Password, user.Salt))
            {
                if (user.Status != 1)
                    return new ResultDto<GetUserDto>()
                    {
                        Data = new GetUserDto
                        {
                            UserId = 0,
                            PassWord = "",
                            Email = "",
                            Verify = "",
                            Status = 0,
                            Mobile = "",
                            Kind = 0,
                            Salt = "",
                            Lastname = "",
                            Name = ""
                        },
                        IsSuccess = false,
                        Message = "کاربر غیر فعال است",
                    };


                return new ResultDto<GetUserDto>()
                {
                    Data = new GetUserDto()
                    {
                        UserId = user.UserId,
                        PassWord = "",
                        Email = user.Email,
                        Verify = user.Verify,
                        Status = user.Status,
                        Mobile = user.Mobile,
                        Kind = user.Kind,
                        Salt = "",
                        Lastname = "",
                        Name = ""
                    },
                    IsSuccess = true,
                    Message = "با موفقیت انجام شد"
                };
            }
            else
                return new ResultDto<GetUserDto>()
                {
                    Data = new GetUserDto()
                    {
                        Email = "",
                        Mobile = "",
                        PassWord = "",
                        Verify = "",
                        Status = -1,
                        Salt = "",
                        Lastname = "",
                        Name = ""
                    },
                    IsSuccess = false,
                    Message = "نام کاربری یا کلمه عبور اشتباه است."
                };


        }

        public ResultDto<GetUserDto> GetByMobilePasswordAdmin(RequestGetUserByMobilePasswordDto request)
        {

            var user = _context.Users.FirstOrDefault(x => x.Mobile == request.Mobile && x.Kind == 0);
            if (user != null && user.PassWord == EncodePassword(request.Password, user.Salt))
            {
                if (user.Status != 1)
                    return new ResultDto<GetUserDto>()
                    {
                        Data = new GetUserDto
                        {
                            UserId = 0,
                            PassWord = "",
                            Email = "",
                            Verify = "",
                            Status = 0,
                            Mobile = "",
                            Kind = 0,
                            Salt = "",
                            Lastname = "",
                            Name = ""
                        },
                        IsSuccess = false,
                        Message = "کاربر غیر فعال است",
                    };


                return new ResultDto<GetUserDto>()
                {
                    Data = new GetUserDto()
                    {
                        UserId = user.UserId,
                        PassWord = "",
                        Email = user.Email,
                        Verify = user.Verify,
                        Status = user.Status,
                        Mobile = user.Mobile,
                        Kind = user.Kind,
                        Salt = "",
                        Lastname = "",
                        Name = ""
                    },
                    IsSuccess = true,
                    Message = "با موفقیت انجام شد"
                };
            }
            else
                return new ResultDto<GetUserDto>()
                {
                    Data = new GetUserDto()
                    {
                        Email = "",
                        Mobile = "",
                        PassWord = "",
                        Verify = "",
                        Status = -1,
                        Salt = "",
                        Lastname = "",
                        Name = ""
                    },
                    IsSuccess = false,
                    Message = "نام کاربری یا کلمه عبور اشتباه است."
                };


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
