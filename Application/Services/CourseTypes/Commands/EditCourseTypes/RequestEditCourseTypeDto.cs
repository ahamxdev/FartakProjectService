namespace Application.Services.CourseTypes.Commands.EditCourseTypes
{
    public class RequestEditCourseTypeDto
    {
        public long CourseTypeId { get; set; }
        public required string Name { get; set; }
    }
}
