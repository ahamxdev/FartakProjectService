namespace Application.Services.ProjectCategories.Queries.GetProjectCategories
{
    public interface IGetProjectCategoryService
    {
        ResultGetProjectCategoryDto GetById(RequestGetProjectCategoryByIdDto request);
        ResultGetProjectCategoryDto GetAll();
        ResultGetProjectCategoryDto GetAllParent();
        ResultGetProjectCategoryDto GetChildrenById(RequestGetProjectCategoryByIdDto request);
    }
}
