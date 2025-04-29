using Common.Dto;

namespace Application.Services.InboxUsers.Commands.EditInboxUser
{
    public interface IEditInboxUserService
    {
        ResultDto Execute(RequestEditInboxUserDto request);
    }
}
