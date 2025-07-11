namespace Domain.Entities.Projects
{
    public class Project
    {
        public long ProjectId { get; set; }
        public long ProjectCategoryId { get; set; }
        public long ProjectSkillId { get; set; }
        public long Duration { get; set; }
        public required string Title { get; set; }
        public required string Description { get; set; }
        public long OwnerId { get; set; }
        public long FinishPrice { get; set; }
        public long StartPrice {  get; set; }
        public long EndPrice {  get; set; }
        public required string CreateDate {  get; set; }
        public required string DeadLine {  get; set; }
        public int Status { get; set; } // 0 Nothing 1 Doing 2 Finish 
        public int Priority { get; set; } // 0 Price 2 Quality 2 Both
        public int PriceType { get; set; } // 0 Simple 1 Medium  2 Large 
        public string? Image { get; set; }
    }
}
