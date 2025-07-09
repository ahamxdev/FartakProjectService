using Common.Dto;

namespace Application.Services.ProjectCategories.Commands.AddProjectCategories
{
    public interface IAddProjectCategorieservice
    {
        ResultDto<ResultAddProjectCategoryDto> Execute(RequestAddProjectCategoryDto request);
    }
}
