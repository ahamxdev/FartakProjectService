using Application.Interfaces.Contexts;
using Common.Dto;
using Common.FileOperation.DeleteFile;
using Microsoft.Extensions.Configuration;


namespace Application.Services.Courses.Commands.RemoveCourses
{
    public class RemoveCourseService : IRemoveCourseService
    {

        private readonly IDatabaseContext _context;
        private readonly IConfiguration _configuration;

        public RemoveCourseService(IDatabaseContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }

        public ResultDto Execute(RequestRemoveCourseDto request)
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

            var CourseVideoAddress = _configuration["AppSettings:CourseContentVideoAddress"];

            if (CourseVideoAddress != null)
            {
                string oldCourseVideoAddress = course.VideoName;
                string addressOld = CourseVideoAddress + oldCourseVideoAddress;
                var deleteFile = new DeleteFile();
                deleteFile.IsDeletedFile(addressOld);

            }

            _context.Courses.Remove(course);
            _context.SaveChanges();
            return new ResultDto()
            {
                IsSuccess = true,
                Message = "با موفقیت حذف شد"
            };
        }
    }
}
