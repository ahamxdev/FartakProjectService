using Common.Dto;

namespace Application.Services.InboxUsers.Commands.RemoveInboxUser
{
    public interface IRemoveInboxUserService
    {
        ResultDto Execute(RequestRemoveInboxUserDto request);
    }
}
