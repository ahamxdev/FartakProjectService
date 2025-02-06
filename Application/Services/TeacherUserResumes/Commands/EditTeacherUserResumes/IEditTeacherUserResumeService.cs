using Common.Dto;

namespace Application.Services.TeacherUserResumes.Commands.EditTeacherUserResumes
{
    public interface IEditTeacherUserResumeService
    {
        ResultDto Execute(RequestEditTeacherUserResumeDto request);
    }
}
