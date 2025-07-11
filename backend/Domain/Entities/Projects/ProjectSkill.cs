namespace Domain.Entities.Projects
{
    public class ProjectSkill
    {
        public long ProjectSkillId { get; set; }
        public long ProjectSkillParentId { get; set; }
        public required string Title { get; set; }
        public string? Description { get; set; }
        public string? Image { get; set; }
    }
}
