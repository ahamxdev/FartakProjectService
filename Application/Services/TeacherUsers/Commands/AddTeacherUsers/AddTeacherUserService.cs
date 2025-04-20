using Application.Interfaces.Contexts;
using Common.Dto;
using Common.FileOperation.UploadFile;
using Domain.Entities.TeacherUser;
using Microsoft.Extensions.Configuration;

namespace Application.Services.TeacherUsers.Commands.AddTeacherUsers
{
    public class AddTeacherUserService : IAddTeacherUserService
    {
        private readonly IDatabaseContext _context;
        private readonly IConfiguration _configuration;
        public AddTeacherUserService(IDatabaseContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }
        public ResultDto<ResultAddTeacherUserDto> Execute(RequestAddTeacherUserDto request)
        {
            try
            {
                var uploadsRootFolderVideo = _configuration["AppSettings:TeacherUserVideoAddress"];
                var uploadsRootFolderImage = _configuration["AppSettings:TeacherUserImageAddress"];

                string fileNameVideo = "";
                string fileNameImage = "";


                var uploadFile = new UploadFile();

                if (request.FileImage != null)
                {

                    var suffixImage = System.IO.Path.GetExtension(request.FileImage.FileName);
                    string tickImage = DateTime.Now.Ticks.ToString();
                    fileNameImage = tickImage + suffixImage;
                    if (!uploadFile.IsUploadedFile(request.FileImage, uploadsRootFolderImage, fileNameImage))
                    {
                        return new ResultDto<ResultAddTeacherUserDto>()
                        {
                            Data = new ResultAddTeacherUserDto() { TeacherUserId = 0, },
                            IsSuccess = false,
                            Message = "آپلود با خطا مواجه شد",

                        };
                    }


                }


                if (request.FileVideo != null)
                {

                    var suffixVideo = System.IO.Path.GetExtension(request.FileVideo.FileName);
                    string tickVideo = DateTime.Now.Ticks.ToString();
                    fileNameVideo = tickVideo + suffixVideo;

                    if (!uploadFile.IsUploadedFile(request.FileVideo, uploadsRootFolderVideo, fileNameVideo))
                    {
                        return new ResultDto<ResultAddTeacherUserDto>()
                        {
                            Data = new ResultAddTeacherUserDto() { TeacherUserId = 0, },
                            IsSuccess = false,
                            Message = "آپلود با خطا مواجه شد",

                        };
                    }


                }



                TeacherUser TeacherUser = new TeacherUser
                {

                    City = request.City,
                    Description = request.Description,
                    Gender = request.Gender,
                    InPersonPrice = request.InPersonPrice,
                    OnlinePrice = request.OnlinePrice,
                    TypeTeaching = request.TypeTeaching,
                    UserId = request.UserId,
                    ImageName = fileNameImage,
                    LanguageTeach = request.LanguageTeach,
                    OurSelect = request.OurSelect,
                    Place = request.Place,
                    MaxUser=request.MaxUser,
                    Duration = request.Duration,
                    VideoName = fileNameVideo,
                    PercentOff=request.PercentOff,
                    TeacherTypeId = request.TeacherTypeId,
                    AllowUploadCourse = request.AllowUploadCourse,

                };
                _context.TeacherUsers.Add(TeacherUser);
                _context.SaveChanges();
                return new ResultDto<ResultAddTeacherUserDto>
                {
                    Data = new ResultAddTeacherUserDto
                    {
                        TeacherUserId = TeacherUser.TeacherUserId
                    },
                    IsSuccess = true,
                    Message = "با موفقیت ثبت شد."
                };

            }
            catch
            {
                return new ResultDto<ResultAddTeacherUserDto>
                {
                    Data = new ResultAddTeacherUserDto { TeacherUserId = 0 },
                    IsSuccess = false,
                    Message = "ثبت با خطا مواجه شد."
                };

            }
        }

    }
}
