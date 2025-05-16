using Common.Dto;

namespace Application.Services.TeacherUsers.Commands.AddTeacherUsers
{
    public interface IAddTeacherUserService
    {
        ResultDto<ResultAddTeacherUserDto> Execute(RequestAddTeacherUserDto request);
    }
}
