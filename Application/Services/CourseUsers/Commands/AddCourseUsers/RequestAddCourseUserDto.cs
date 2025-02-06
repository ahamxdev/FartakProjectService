namespace Application.Services.CourseUsers.Commands.AddCourseUsers
{

    public class RequestAddCourseUserDto
    {
        public long UserId { get; set; }
        public long CouserId { get; set; }
        public int CourseScore { get; set; }
    }
}
