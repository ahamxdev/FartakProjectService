using Microsoft.AspNetCore.Http;

namespace Application.Services.Courses.Commands.EditCourses
{

    public class RequestEditCourseDto
    {
        public long CourseId { get; set; }
        public long CourseTypeId { get; set; }
        public long TeacherId { get; set; }
        public required string Title { get; set; }
        public required string Description { get; set; }
        public int PercentOff { get; set; }
        public long Price { get; set; }
        public int status { get; set; } //0 NotAccept , 1 Accept
        public required IFormFile FileVideo { get; set; }
        public long Duration { get; set; }
    }

    public class RequestEditCourseStatusDto
    {
        public long CourseId { get; set; }
        public int status { get; set; } //0 NotAccept , 1 Accept

    }
}
