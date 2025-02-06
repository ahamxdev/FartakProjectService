namespace Application.Services.ProjectUsers.Queries.GetProjectUsers
{
    public interface IGetProjectUserService
    {
        ResultGetProjectUserDto GetAll();
        ResultGetProjectUserDto GetByProjectId(RequestGetProjectUserByProjectIdDto request);
        ResultGetProjectUserDto GetByUserId(RequestGetProjectUserByUserIdDto request);
    }
}
