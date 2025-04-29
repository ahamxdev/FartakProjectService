using Common.Dto;

namespace Application.Services.TeacherUserResumes.Commands.RemoveTeacherUserResumes
{
    public interface IRemoveTeacherUserResumeService
    {
        ResultDto Execute(RequestRemoveTeacherUserResumeDto request);
    }
}
