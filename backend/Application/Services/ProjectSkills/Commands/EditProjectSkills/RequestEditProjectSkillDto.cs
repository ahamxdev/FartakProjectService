namespace Application.Services.ProjectSkills.Commands.EditProjectSkills
{
    public class RequestEditProjectSkillDto
    {
        public long ProjectSkillId { get; set; }
        public required string Title { get; set; }
    }
}
