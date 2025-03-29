namespace Application.Services.InboxUsers.Commands.AddInboxUser
{
    public class RequestAddInboxUserDto
    {
        public long UserId { get; set; }
        public required string Message { get; set; }
    }
}
