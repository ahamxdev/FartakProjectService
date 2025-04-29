namespace Application.Services.TeacherUserSelects.Commands.EditTeacherUserSelects
{
    public class RequestEditTeacherUserSelectDto
    {
        public long TeacherUserSelectId { get; set; }
        public long StudentId { get; set; }
        public int Score { get; set; }
        public long TeacherId { get; set; }
        public required string OrderCode { get; set; }
        public int Status { get; set; } //0 Waiting , 1 Accept , 2 Reject
    }
}
