namespace Application.Services.InboxUsers.Commands.AddInboxUser
{
    public class RequestAddInboxUserDto
    {
        public long UserId { get; set; }
        public long? SenderId { get; set; }
        public string Title { get; set; }
         public required string Message { get; set; }
    }
}
