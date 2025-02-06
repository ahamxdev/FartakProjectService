namespace Common.Services.UserService.Token.Queries.GetToken
{
    public interface IGetTokenService
    {
        bool GetValidateToken(RequestGetTokenDto dto);
    }
}
