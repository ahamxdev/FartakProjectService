using Common.Dto;

namespace Application.Services.TeacherUserResumes.Commands.AddTeacherUserResumes
{
    public interface IAddTeacherUserResumeService
    {
        ResultDto<ResultAddTeacherUserResumeDto> Execute(RequestAddTeacherUserResumeDto request);
    }
}
