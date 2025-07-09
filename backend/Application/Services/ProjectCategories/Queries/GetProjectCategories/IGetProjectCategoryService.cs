namespace Application.Services.ProjectCategories.Queries.GetProjectCategories
{
    public interface IGetProjectCategoryService
    {
        ResultGetProjectCategoriesDto GetById(RequestGetProjectCategoriesByIdDto request);
        ResultGetProjectCategoriesDto GetAll();
        ResultGetProjectCategoriesDto GetAllParent();
        ResultGetProjectCategoriesDto GetChildrenById(RequestGetProjectCategoriesByIdDto request);
    }
}
