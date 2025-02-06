namespace Application.Services.TeacherUsers.Queries.GetTeacherUsers
{
    public class ResultGetTeacherUserDto
    {
        public required List<GetTeacherUserDto> TeacherUsers { get; set; }
        public long Rows { get; set; }
    }
}
