using Common.Dto;

namespace Application.Services.ProjectSkills.Commands.RemoveProjectSkills
{
    public interface IRemoveProjectSkillService
    {
        ResultDto Execute(RequestRemoveProjectSkillDto request);
    }
}
