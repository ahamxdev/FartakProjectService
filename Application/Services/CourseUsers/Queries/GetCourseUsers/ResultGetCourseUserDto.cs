namespace Application.Services.CourseUsers.Commands.AddCourseUsers
{
    public class ResultGetCourseUserDto
    {
        public required List<GetCourseUserDto> CourseUsers { get; set; }
        public long Rows { get; set; }
    }
}
