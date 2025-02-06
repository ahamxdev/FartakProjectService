namespace Application.Services.CourseTypes.Queries.GetCourseTypes
{
    public class GetCourseTypeDto
    {
        public long CourseTypeId { get; set; }
        public required string Name { get; set; }
    }
}
