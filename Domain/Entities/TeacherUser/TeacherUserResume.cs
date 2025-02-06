namespace Domain.Entities.TeacherUser
{
    public class TeacherUserResume
    {
        public long TeacherUserResumeId { get; set; }
        public long TeacherUserId { get; set; }
        public required string ResumeText { get; set; }
    }
}
