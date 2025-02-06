namespace Domain.Entities.Projects
{
    public class Project
    {
        public long ProjectId { get; set; }
        public long ProjectTypeId { get; set; }
        public required string Title { get; set; }
        public required string Description { get; set; }
        public long OwnerId { get; set; }
        public long Price { get; set; }
        public string? Image { get; set; }
    }
}
