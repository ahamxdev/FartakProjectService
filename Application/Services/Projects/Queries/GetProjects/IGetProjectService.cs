namespace Application.Services.Projects.Queries.GetProjects
{
    public interface IGetProjectService
    {
        ResultGetProjectDto GetAll();
        ResultGetProjectDto GetByProjectId(RequestGetProjectByIdDto request);
        ResultGetProjectDto GetByOwnerId(RequestGetProjectByOwnerIdDto request);
        ResultGetProjectDto GetByProjectTypeId(RequestGetProjectByProjectTypeIdDto request);
    }
}
