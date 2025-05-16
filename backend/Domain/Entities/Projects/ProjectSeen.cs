namespace Domain.Entities.Projects
{
    public class ProjectSeen
    {
        public long ProjectSeenId { get; set; }
        public long ProjectId { get; set; }
        public long UserId { get; set; }
    }
}
