namespace Common.Services.UserService.Token.Queries.GetToken
{
    public class UserTokenDto
    {
        public long UserTokenId { get; set; }
        public long UserId { get; set; }
        public required string Token { get; set; }
        public DateTime ExpireDate { get; set; }

    }
    public class ResultGetTokenDto
    {
        public long rows { get; set; }
        public required IList<UserTokenDto> UserToken { get; set; }
    }
}
