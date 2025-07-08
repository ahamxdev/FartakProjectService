

namespace Application.Services.ProjectSkills.Queries.GetProjectSkills
{
    public class ResultGetProjectSkillDto
    {
        public required List<GetProjectSkillDto> ProjectSkills { get; set; }
        public long Rows { get; set; }
    }
}
