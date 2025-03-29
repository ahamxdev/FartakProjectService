namespace Domain.Entities.Projects
{
    public class Project
    {
        public long ProjectId { get; set; }
        public long ProjectTypeId { get; set; }
        public long Duration { get; set; }
        public required string Title { get; set; }
        public required string Description { get; set; }
        public long OwnerId { get; set; }
        public long Price { get; set; }
        public required string CreateDate {  get; set; }
        public required string DeadLine {  get; set; }
        public int Status { get; set; } // 0 Nothing 1 Doing 2 Finish 
        public string? Image { get; set; }
    }
}
