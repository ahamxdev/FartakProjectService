namespace Application.Services.ProjectSkills.Queries.GetProjectSkills
{
    public class GetProjectSkillDto
    {
        public long ProjectSkillId { get; set; }
        public required string Title { get; set; }
        public string? Description { get; set; }
        public string? Image { get; set; }
        public long ProjectSkillParentId { get; set; }
    }
}
