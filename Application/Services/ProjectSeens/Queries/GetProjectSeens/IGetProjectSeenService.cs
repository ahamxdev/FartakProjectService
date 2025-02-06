namespace Application.Services.ProjectSeens.Queries.GetProjectSeens
{
    public interface IGetProjectSeenService
    {
        ResultGetProjectSeenDto GetById(RequestGetProjectSeenByIdDto request);
        ResultGetProjectSeenDto GetByProjectId(RequestGetProjectSeenByProjectIdDto request);
        ResultGetProjectSeenDto GetAll();
    }
}
