

namespace Application.Services.TeacherUserSelects.Queries.GetTeacherUserSelects
{
    public class ResultGetTeacherUserSelectDto
    {
        public required List<GetTeacherUserSelectDto> TeacherUserSelects { get; set; }
        public long Rows { get; set; }
    }
}
