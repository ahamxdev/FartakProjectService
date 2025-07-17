namespace Application.Services.ProjectSkills.Commands.AddProjectSkills
{
    public class RequestAddProjectSkillsParentDto
    {
        public required string Title { get; set; }
        public string? Description { get; set; }
        public string? Image { get; set; }
    }


    public class RequestAddProjectSkillsChildDto
    {
        public required string Title { get; set; }
        public string? Description { get; set; }
        public string? Image { get; set; }
        public long ProjectSkillParentId { get; set; }
    }
}
