namespace Domain.Entities.Projects
{
    public class ProjectHashtag
    {
        public long ProjectHashtagId { get; set; }
        public long ProjectHashtagParentId { get; set; }
        public required string Title { get; set; }
    }
}
