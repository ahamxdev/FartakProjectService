namespace Application.Services.InboxUsers.Queries.GetInboxUser
{
    public class GetInboxUserDto
    {
        public long InboxUserId { get; set; }
        public long UserId { get; set; }
        public int Read { get; set; } // 0 Not 1 Yes
        public  string Title { get; set; }
        public required string Message { get; set; }
    }
}
