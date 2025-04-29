using Common.Dto;

namespace Application.Services.UserToken.Commands.RemoveUserToken
{
    public interface IRemoveUserTokenService
    {
        ResultDto Execute(RequestRemoveUserTokenDto request);
    }
}
