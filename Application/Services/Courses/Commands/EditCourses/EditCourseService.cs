using Application.Interfaces.Contexts;
using Common.Dto;
using Common.FileOperation.DeleteFile;
using Common.FileOperation.UploadFile;
using Microsoft.Extensions.Configuration;

namespace Application.Services.Courses.Commands.EditCourses
{
    public class EditCourseService : IEditCourseService
    {
        private readonly IDatabaseContext _context;
        private readonly IConfiguration _configuration;

        public EditCourseService(IDatabaseContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }
        public ResultDto Execute(RequestEditCourseDto request)
        {

            var course = _context.Courses.Find(request.CourseId);
            if (course == null)
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

                    var uploadsRootFolderVideo = _configuration["AppSettings:CourseVideoAddress"];
                    string tick = DateTime.Now.Ticks.ToString();
                    suffix = System.IO.Path.GetExtension(request.FileVideo.FileName);
                    name = tick + suffix;

                    var uploadFile = new UploadFile();
                    if (uploadFile.IsUploadedFile(request.FileVideo, uploadsRootFolderVideo, name))
                    {



                        if (uploadsRootFolderVideo != null)
                        {
                            //  address = uploadsRootFolder.Replace("wwwroot/", "/publicFiles/") + fileName;




                            string oldCourseVideoAddress = course.VideoName;
                            string addressOld = uploadsRootFolderVideo + oldCourseVideoAddress;
                            var deleteFile = new DeleteFile();
                            deleteFile.IsDeletedFile(addressOld);


                            course.VideoName = name;


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

                course.Price = request.Price;
                course.Duration = request.Duration;
                course.Description = request.Description;
                course.Status = request.Status;
                course.CourseTypeId = request.CourseTypeId;
                course.PercentOff=request.PercentOff;
                course.Title = request.Title;

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


        public ResultDto ExecuteStatus(RequestEditCourseStatusDto request)
        {

            var course = _context.Courses.Find(request.CourseId);
            if (course == null)
            {
                return new ResultDto
                {
                    IsSuccess = false,
                    Message = "یافت نشد"
                };
            }


            try
            {

                course.Status = request.Status;


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
