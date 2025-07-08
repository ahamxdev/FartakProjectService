using Common.Dto;

namespace Application.Services.ProjectSkills.Commands.EditProjectSkills
{
    public interface IEditProjectSkillService
    {
        ResultDto Execute(RequestEditProjectSkillDto request);
    }
}
