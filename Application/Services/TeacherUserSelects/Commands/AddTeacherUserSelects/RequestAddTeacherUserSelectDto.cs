namespace Application.Services.TeacherUserSelects.Commands.AddTeacherUserSelects
{
    public class RequestAddTeacherUserSelectDto
    {
        public long StudentId { get; set; }
        public int Score { get; set; }
        public long TeacherId { get; set; }
        public int Status { get; set; } //0 Waiting , 1 Accept , 2 Reject
    }
}
