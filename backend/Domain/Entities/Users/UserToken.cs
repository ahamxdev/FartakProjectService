namespace Domain.Entities.Users
{
    public class UserToken
    {
        public long UserTokenId { get; set; }
        public long UserId { get; set; }
        public required string Token { get; set; }
        public DateTime ExpireDate { get; set; }
    }
}
