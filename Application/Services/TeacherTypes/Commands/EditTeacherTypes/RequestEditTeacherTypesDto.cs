namespace Application.Services.TeacherTypes.Commands.EditTeacherTypes
{
    public class RequestEditTeacherTypesDto
    {
        public long TeacherTypeId { get; set; }
        public required string Title { get; set; }
    }
}
