namespace Application.Services.Projects.Queries.GetProjects
{
    public interface IGetProjectService
    {
        ResultGetProjectDto GetAll();
        ResultGetProjectDto GetAllPortfolio();
        ResultGetProjectDto GetById(RequestGetProjectByIdDto request);
        ResultGetProjectDto GetByOwnerId(RequestGetProjectByOwnerIdDto request);
        ResultGetProjectDto GetByProjectCategoryId(RequestGetProjectByProjectCategoryIdDto request);
    }
}
