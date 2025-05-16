using Application.Interfaces.Contexts;
using Application.Services.Users.Commands.AddUsers;
using Common.Dto;
using Common.FileOperation.UploadFile;
using Domain.Entities;
using Microsoft.Extensions.Configuration;

namespace Application.Services.Courses.Commands.AddCourses
{
    public class AddCourseService : IAddCourseService
    {
        private readonly IDatabaseContext _context;
        private readonly IConfiguration _configuration;
        public AddCourseService(IDatabaseContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }
        public ResultDto<ResultAddCourseDto> Execute(RequestAddCourseDto request)
        {
            try
            {
                var uploadsRootFolderVideo = _configuration["AppSettings:CourseVideoAddress"];



                var suffixVideo = System.IO.Path.GetExtension(request.FileVideo.FileName);
                string tickVideo = DateTime.Now.Ticks.ToString();
                string fileNameVideo = tickVideo + suffixVideo;




                var uploadFile = new UploadFile();
                if (uploadFile.IsUploadedFile(request.FileVideo, uploadsRootFolderVideo, fileNameVideo))
                {
                    Course Course = new Course
                    {

                        Description = request.Description,
                        Status = 0,
                        TeacherId = request.TeacherId,
                        Title = request.Title,
                        CourseTypeId = request.CourseTypeId,
                        Price = request.Price,
                        PercentOff = request.PercentOff,
                        VideoName = fileNameVideo,
                        Duration = request.Duration,

                    };
                    _context.Courses.Add(Course);
                    _context.SaveChanges();
                    return new ResultDto<ResultAddCourseDto>
                    {
                        Data = new ResultAddCourseDto
                        {
                            CourseId = Course.CourseId
                        },
                        IsSuccess = true,
                        Message = "با موفقیت ثبت شد."
                    };
                }
                else
                {
                    return new ResultDto<ResultAddCourseDto>()
                    {
                        Data = new ResultAddCourseDto() { CourseId = 0, },
                        IsSuccess = false,
                        Message = "آپلود با خطا مواجه شد",

                    };
                }


            }
            catch
            {
                return new ResultDto<ResultAddCourseDto>
                {
                    Data = new ResultAddCourseDto { CourseId = 0 },
                    IsSuccess = false,
                    Message = "ثبت با خطا مواجه شد."
                };

            }
        }

    }
}
