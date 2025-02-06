namespace Application.Services.UserToken.Queries.GetUserToken
{
    public interface IGetUserTokenService
    {
        ResultGetUserTokenDto GetToken(RequestCheckTokenDto request);
        ResultGetUserTokenDto GetByUserId(RequestGetUserTokenByUserIdDto request);
    }
}
