namespace Application.Services.ProjectSkills.Commands.EditProjectSkills
{
    public class RequestEditProjectSkillDto
    {
        public long ProjectSkillId { get; set; }
        public required string Title { get; set; }
        public string? Description { get; set; }
        public string? Image { get; set; }
    }
}
