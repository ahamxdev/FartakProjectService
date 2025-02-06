using Common.Dto;

namespace Application.Services.UserToken.Commands.AddUserToken
{
    public interface IAddUserTokenService
    {

        ResultDto<ResultAddUserTokenDto> Execute(RequestAddUserTokenDto request);
    }
}
