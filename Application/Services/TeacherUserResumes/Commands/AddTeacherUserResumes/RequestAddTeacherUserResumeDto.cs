namespace Application.Services.TeacherUserResumes.Commands.AddTeacherUserResumes
{
    public class RequestAddTeacherUserResumeDto
    {
        public long TeacherUserId { get; set; }
        public required string ResumeText { get; set; }
    }
}
