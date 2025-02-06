namespace Application.Services.ProjectTypes.Queries.GetProjectTypes
{
    public interface IGetProjectTypeService
    {
        ResultGetProjectTypeDto GetAll();
        ResultGetProjectTypeDto GetById(RequestGetProjectTypeByIdDto request);
    }
}
