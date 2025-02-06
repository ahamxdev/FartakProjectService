namespace Domain.Entities.Projects
{
    public class ProjectLike
    {
        public long ProjectLikeId { get; set; }
        public long ProjectId { get; set; }
        public long UserId { get; set; }
    }
}
