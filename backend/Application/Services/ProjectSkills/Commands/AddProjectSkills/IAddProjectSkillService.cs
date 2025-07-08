using Common.Dto;

namespace Application.Services.ProjectSkills.Commands.AddProjectSkills
{
    public interface IAddProjectSkillService
    {
        ResultDto<ResultAddProjectSkillDto> Execute(RequestAddProjectSkillDto request);
    }
}
