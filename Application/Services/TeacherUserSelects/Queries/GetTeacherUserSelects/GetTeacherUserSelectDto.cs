namespace Application.Services.TeacherUserSelects.Queries.GetTeacherUserSelects
{
    public class GetTeacherUserSelectDto
    {
        public long TeacherUserSelectId { get; set; }
        public long StudentId { get; set; }
        public long TeacherId { get; set; }
        public int Score { get; set; }
        public int Status { get; set; } //0 Waiting , 1 Accept , 2 Reject
    }
}
