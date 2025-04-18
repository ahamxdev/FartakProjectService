using Application.Interfaces.Contexts;
using Common.Dto;
using Common.FileOperation.DeleteFile;
using Common.FileOperation.UploadFile;
using Microsoft.Extensions.Configuration;

namespace Application.Services.TeacherUsers.Commands.EditTeacherUsers
{
    public class EditTeacherUserService : IEditTeacherUserService
    {
        private readonly IDatabaseContext _context;
        private readonly IConfiguration _configuration;

        public EditTeacherUserService(IDatabaseContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }
        public ResultDto Execute(RequestEditTeacherUserDto request)
        {

            var TeacherUser = _context.TeacherUsers.Find(request.TeacherUserId);
            if (TeacherUser == null)
            {
                return new ResultDto
                {
                    IsSuccess = false,
                    Message = "یافت نشد"
                };
            }


            try
            {
                if (request.FileVideo != null)
                {
                    string name = "";
                    string suffix = "";

                    var uploadsRootFolderVideo = _configuration["AppSettings:TeacherUserVideoAddress"];
                    string tick = DateTime.Now.Ticks.ToString();
                    suffix = System.IO.Path.GetExtension(request.FileVideo.FileName);
                    name = tick + suffix;

                    var uploadFile = new UploadFile();
                    if (uploadFile.IsUploadedFile(request.FileVideo, uploadsRootFolderVideo, name))
                    {



                        if (uploadsRootFolderVideo != null)
                        {
                            //  address = uploadsRootFolder.Replace("wwwroot/", "/publicFiles/") + fileName;




                            string oldTeacherUserVideoAddress = TeacherUser.VideoName;
                            string addressOld = uploadsRootFolderVideo + oldTeacherUserVideoAddress;
                            var deleteFile = new DeleteFile();
                            deleteFile.IsDeletedFile(addressOld);


                            TeacherUser.VideoName = name;


                        }
                    }

                    else
                    {

                        return new ResultDto
                        {
                            IsSuccess = false,
                            Message = "آپلود با خطا مواجه شد"
                        };

                    }
                }


                if (request.FileImage != null)
                {
                    string name = "";
                    string suffix = "";

                    var uploadsRootFolderImage = _configuration["AppSettings:TeacherUserImageAddress"];
                    string tick = DateTime.Now.Ticks.ToString();
                    suffix = System.IO.Path.GetExtension(request.FileImage.FileName);
                    name = tick + suffix;

                    var uploadFile = new UploadFile();
                    if (uploadFile.IsUploadedFile(request.FileImage, uploadsRootFolderImage, name))
                    {



                        if (uploadsRootFolderImage != null)
                        {
                            //  address = uploadsRootFolder.Replace("wwwroot/", "/publicFiles/") + fileName;




                            string oldTeacherUserImageAddress = TeacherUser.ImageName;
                            string addressOld = uploadsRootFolderImage + oldTeacherUserImageAddress;
                            var deleteFile = new DeleteFile();
                            deleteFile.IsDeletedFile(addressOld);


                            TeacherUser.ImageName = name;


                        }
                    }

                    else
                    {

                        return new ResultDto
                        {
                            IsSuccess = false,
                            Message = "آپلود با خطا مواجه شد"
                        };

                    }
                }

                TeacherUser.UserId = request.UserId;
                TeacherUser.Description = request.Description;
                TeacherUser.Gender = request.Gender;
                TeacherUser.City = request.City;
                TeacherUser.TypeTeaching = request.TypeTeaching;
                TeacherUser.OnlinePrice = request.OnlinePrice;
                TeacherUser.InPersonPrice = request.InPersonPrice;
                TeacherUser.TeacherTypeId = request.TeacherTypeId;
                TeacherUser.LanguageTeach = request.LanguageTeach;
                TeacherUser.Place = request.Place;
                TeacherUser.PercentOff = request.PercentOff;
                TeacherUser.Duration = request.Duration;    
                TeacherUser.OurSelect = request.OurSelect;
                TeacherUser.AllowUploadCourse = request.AllowUploadCourse;

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

    }
}
