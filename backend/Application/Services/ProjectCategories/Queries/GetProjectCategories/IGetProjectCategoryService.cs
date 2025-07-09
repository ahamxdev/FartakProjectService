namespace Application.Services.ProjectCategories.Queries.GetProjectCategories
{
    public interface IGetProjectCategorieservice
    {
        ResultGetProjectCategoryDto GetById(RequestGetProjectCategoryByIdDto request);
        ResultGetProjectCategoryDto GetAll();
    }
}
