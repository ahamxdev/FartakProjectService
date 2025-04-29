using Common.Dto;

namespace Application.Services.UserToken.Commands.EditUserToken
{
    public interface IEditUserTokenService
    {
        ResultDto Execute(RequestEditUserTokenDto request);
    }
}
