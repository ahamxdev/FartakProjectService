namespace Application.Services.ProjectSkills.Queries.GetProjectSkills
{
    public interface IGetProjectSkillService
    {
        ResultGetProjectSkillDto GetAll();
        ResultGetProjectSkillDto GetById(RequestGetProjectSkillByIdDto request);
    }
}
