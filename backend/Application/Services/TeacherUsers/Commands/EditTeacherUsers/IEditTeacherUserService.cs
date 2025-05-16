using Common.Dto;

namespace Application.Services.TeacherUsers.Commands.EditTeacherUsers
{
    public interface IEditTeacherUserService
    {
        ResultDto Execute(RequestEditTeacherUserDto request);
    }
}
