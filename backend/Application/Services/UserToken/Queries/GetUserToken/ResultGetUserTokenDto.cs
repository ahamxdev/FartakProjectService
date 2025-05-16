namespace Application.Services.UserToken.Queries.GetUserToken
{
    public class ResultGetUserTokenDto
    {
        public required List<GetUserTokenDto> UserToken { get; set; }
        public long Rows { get; set; }
    }
}
