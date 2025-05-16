namespace Application.Services.InboxUsers.Queries.GetInboxUser
{
    public class ResultGetInboxUserDto
    {
        public required List<GetInboxUserDto> InboxUsers { get; set; }
        public long Rows { get; set; }
    }
}
