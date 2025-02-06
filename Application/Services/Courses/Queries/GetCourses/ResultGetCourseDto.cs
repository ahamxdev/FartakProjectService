namespace Application.Services.Courses.Queries.GetCourses
{
    public class ResultGetCourseDto
    {
        public required List<GetCourseDto> Courses { get; set; }
        public long Rows { get; set; }
    }
}
