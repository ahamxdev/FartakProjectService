using Common.Dto;

namespace Application.Services.Users.Commands.RemoveUsers
{
    public interface IRemoveUserService
    {
        ResultDto Execute(RequestRemoveUserDto request);
    }
}
