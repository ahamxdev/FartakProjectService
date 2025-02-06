namespace Application.Services.UserToken.Commands.EditUserToken
{
    public class RequestEditUserTokenDto
    {
        public long UserId { get; set; }
        public required string Token { get; set; }
        public DateTime ExpireDate { get; set; }
    }
}
