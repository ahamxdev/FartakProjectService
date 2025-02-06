namespace Application.Services.TeacherTypes.Queries.GetTeacherTypes
{
    public class ResultGetTeacherTypesDto
    {
        public required List<GetTeacherTypesDto> TeacherTypes { get; set; }
        public long Rows { get; set; }
    }
}
