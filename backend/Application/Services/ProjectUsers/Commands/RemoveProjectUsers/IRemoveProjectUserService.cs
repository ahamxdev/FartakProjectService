using Common.Dto;

namespace Application.Services.ProjectUsers.Commands.RemoveProjectUsers
{
    public interface IRemoveProjectUserService
    {
        ResultDto Execute(RequestRemoveProjectUserDto request);
    }
}
