using Common.Dto;

namespace Application.Services.ProjectSkills.Commands.AddProjectSkills
{
    public interface IAddProjectSkillService
    {
        ResultDto<ResultAddProjectSkillDto> ExecuteParent(RequestAddProjectSkillsParentDto request);
        ResultDto<ResultAddProjectSkillDto> ExecuteChild(RequestAddProjectSkillsChildDto request);
    }
}
