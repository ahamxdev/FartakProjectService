namespace Application.Services.UserToken.Queries.GetUserToken
{
    public interface IGetUserTokenService
    {
        ResultGetUserTokenDto GetByUserId(RequestGetUserTokenByUserIdDto request);
        bool GetToken(RequestCheckTokenDto request);
    }
}
