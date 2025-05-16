namespace Application.Services.TeacherUserResumes.Queries.GetTeacherUserResumes
{
    public class ResultGetTeacherUserResumeDto
    {
        public required List<GetTeacherUserResumeDto> TeacherUserResumes { get; set; }
        public long Rows { get; set; }
    }
}
