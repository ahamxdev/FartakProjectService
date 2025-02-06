namespace Application.Services.TeacherUserResumes.Queries.GetTeacherUserResumes
{
    public class GetTeacherUserResumeDto
    {
        public long TeacherUserResumeId { get; set; }
        public long TeacherUserId { get; set; }
        public required string ResumeText { get; set; }
    }
}
