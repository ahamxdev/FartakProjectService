namespace Application.Services.CourseTypes.Queries.GetCourseTypes
{
    public class ResultGetCourseTypeDto
    {
        public required List<GetCourseTypeDto> CourseTypes { get; set; }
        public long Rows { get; set; }
    }
}
