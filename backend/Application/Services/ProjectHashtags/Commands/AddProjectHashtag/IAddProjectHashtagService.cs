using Common.Dto;

namespace Application.Services.ProjectHashtags.Commands.AddProjectHashtags
{
    public interface IAddProjectHashtagService
    {
        ResultDto<ResultAddProjectHashtagsDto> ExecuteParent(RequestAddProjectHashtagsParentDto request);
        ResultDto<ResultAddProjectHashtagsDto> ExecuteChild(RequestAddProjectHashtagsChildDto request);
    }
}
