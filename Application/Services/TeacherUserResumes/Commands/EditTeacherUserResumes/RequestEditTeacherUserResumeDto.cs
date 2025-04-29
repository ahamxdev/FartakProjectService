namespace Application.Services.TeacherUserResumes.Commands.EditTeacherUserResumes
{
    public class RequestEditTeacherUserResumeDto
    {
        public long TeacherUserResumeId { get; set; }
        public long TeacherUserId { get; set; }
        public required string ResumeText { get; set; }
    }
}
