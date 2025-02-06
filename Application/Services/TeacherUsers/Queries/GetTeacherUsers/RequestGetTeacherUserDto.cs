namespace Application.Services.TeacherUsers.Queries.GetTeacherUsers
{
    public class RequestGetTeacherUserByIdDto
    {
        public long TeacherUserId { get; set; }
    }

    public class RequestGetTeacherUserByTeacherTypeIdDto
    {
        public long TeacherTypeId { get; set; }
    }

    public class RequestGetTeacherUserByTeacherIdDto
    {
        public long TeacherId { get; set; }
    }

}
