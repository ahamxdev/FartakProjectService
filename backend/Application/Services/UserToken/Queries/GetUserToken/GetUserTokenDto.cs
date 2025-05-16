namespace Application.Services.UserToken.Queries.GetUserToken
{
    public class GetUserTokenDto
    {
        public long UserTokenId { get; set; }
        public long UserId { get; set; }
        public required string Token { get; set; }
        public DateTime ExpireDate { get; set; }
    }
}
