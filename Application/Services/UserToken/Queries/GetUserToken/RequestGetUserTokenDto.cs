namespace Application.Services.UserToken.Queries.GetUserToken
{

    //Check Token
    public class RequestCheckTokenDto
    {
        public long SelfUserId { get; set; }
        public required string Token { get; set; }


    }

    public class RequestGetUserTokenByUserIdDto
    {
        public long UserId { get; set; }


    }
}
