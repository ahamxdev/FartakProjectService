using Common.Dto;

namespace Application.Services.ProjectCategories.Commands.EditProjectCategories
{
    public interface IEditProjectCategorieservice
    {
        ResultDto Execute(RequestEditProjectCategoryDto request);
    }
}
