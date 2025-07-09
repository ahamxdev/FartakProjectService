using Common.Dto;

namespace Application.Services.ProjectCategories.Commands.RemoveProjectCategories
{
    public interface IRemoveProjectCategorieservice
    {
        ResultDto Execute(RequestRemoveProjectCategoryDto request);
    }
}
