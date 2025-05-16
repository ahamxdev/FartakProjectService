namespace Application.Services.InboxUsers.Commands.EditInboxUser
{
    public class RequestEditInboxUserDto
    {
        public long InboxUserId { get; set; }
        public int Read { get; set; } // 0 Not 1 Yes
        public required string Message { get; set; }
    }
}
