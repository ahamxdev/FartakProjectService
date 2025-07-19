namespace Domain.Entities.Projects
{
    public class ProjectUser
    {
        public long ProjectUserId { get; set; }
        public long UserId { get; set; }
        public long ProjectId { get; set; }
        public long Price { get; set; }
        public long Days { get; set; }
        public int Status { get; set; } //0 Waiting , 1 Accept , 2 Reject
    }
}
