namespace Application.Services.ProjectSkills.Queries.GetProjectSkills
{
    public interface IGetProjectSkillService
    {
        ResultGetProjectSkillDto GetById(RequestGetProjectSkillByIdDto request);
        ResultGetProjectSkillDto GetAll();
        ResultGetProjectSkillDto GetAllParent();
        ResultGetProjectSkillDto GetChildrenById(RequestGetProjectSkillByIdDto request);
    }
}
