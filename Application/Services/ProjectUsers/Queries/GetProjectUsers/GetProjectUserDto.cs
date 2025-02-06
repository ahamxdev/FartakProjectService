namespace Application.Services.ProjectUsers.Queries.GetProjectUsers
{
    public class GetProjectUserDto
    {
        public long ProjectUserId { get; set; }
        public long UserId { get; set; }
        public long ProjectId { get; set; }
        public int Status { get; set; } //0 Waiting , 1 Accept , 2 Reject
    }
}
