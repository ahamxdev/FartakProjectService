namespace Application.Services.TeacherUserResumes.Queries.GetTeacherUserResumes
{
    public interface IGetTeacherUserResumeService
    {
        ResultGetTeacherUserResumeDto GetById(RequestGetTeacherUserResumeByIdDto request);
        ResultGetTeacherUserResumeDto GetByTeacherUserId(RequestGetTeacherUserResumeByTeacherUserIdDto request);
        ResultGetTeacherUserResumeDto GetAll();
    }
}
