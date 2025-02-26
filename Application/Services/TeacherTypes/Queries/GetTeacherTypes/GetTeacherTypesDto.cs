namespace Application.Services.TeacherTypes.Queries.GetTeacherTypes
{
    public class GetTeacherTypesDto
    {
        public long TeacherTypeId { get; set; }
        public required string Title { get; set; }
        public long TeacherTypeParentId { get; set; }
    }
}
