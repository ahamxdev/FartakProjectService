using Common.Dto;

namespace Application.Services.TeacherUsers.Commands.RemoveTeacherUsers
{
    public interface IRemoveTeacherUserService
    {
        ResultDto Execute(RequestRemoveTeacherUserDto request);
    }
}
