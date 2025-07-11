namespace Application.Services.ProjectSkills.Queries.GetProjectSkills
{
    public interface IGetProjectSkillService
    {
        ResultGetProjectSkillDto GetById(RequestGetProjectSkillsByIdDto request);
        ResultGetProjectSkillDto GetAll();
        ResultGetProjectSkillDto GetAllParent();
        ResultGetProjectSkillDto GetChildrenById(RequestGetProjectSkillsByIdDto request);
    }
}
