using Common.Dto;

namespace Application.Services.ProjectCategories.Commands.RemoveProjectCategories
{
    public interface IRemoveProjectCategoryService
    {
        ResultDto Execute(RequestRemoveProjectCategoriesDto request);
    }
}
