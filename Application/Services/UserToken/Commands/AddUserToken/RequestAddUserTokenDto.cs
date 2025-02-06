namespace Application.Services.UserToken.Commands.AddUserToken
{

    //Add User Token
    public class RequestAddUserTokenDto
    {
        public long UserId { get; set; }
        public DateTime ExpireDate { get; set; }
    }
}
