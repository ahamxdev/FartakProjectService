using Common.Dto;

namespace Application.Services.InboxUsers.Commands.AddInboxUser
{
    public interface IAddInboxUserService
    {
        ResultDto<ResultAddInboxUserDto> Execute(RequestAddInboxUserDto request);
    }
}
