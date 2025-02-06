namespace Application.Services.TeacherUserResumes.Queries.GetTeacherUserResumes
{
    public class RequestGetTeacherUserResumeByIdDto
    {
        public long TeacherUserResumeId { get; set; }
    }

    public class RequestGetTeacherUserResumeByTeacherUserIdDto
    {
        public long TeacherUserId { get; set; }
    }
}
