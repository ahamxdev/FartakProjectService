namespace Application.Services.TeacherTypes.Commands.AddTeacherTypes
{
    public class RequestAddTeacherTypesParentDto
    {
        public required string Title { get; set; }
    }


    public class RequestAddTeacherTypesChildDto
    {
        public required string Title { get; set; }
        public long TeacherTypeParentId { get; set; }
    }
}
