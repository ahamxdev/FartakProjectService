namespace Application.Services.ProjectCategories.Queries.GetProjectCategories
{
    public interface IGetProjectCategoryService
    {
        ResultGetProjectCategoryDto GetById(RequestGetProjectCategoriesByIdDto request);
        ResultGetProjectCategoryDto GetAll();
        ResultGetProjectCategoryDto GetAllParent();
        ResultGetProjectCategoryDto GetChildrenById(RequestGetProjectCategoriesByIdDto request);
    }
}
