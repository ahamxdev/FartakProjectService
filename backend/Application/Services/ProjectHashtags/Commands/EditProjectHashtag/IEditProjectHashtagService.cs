using Common.Dto;

namespace Application.Services.ProjectHashtags.Commands.EditProjectHashtags
{
    public interface IEditProjectHashtagService
    {
        ResultDto Execute(RequestEditProjectHashtagsDto request);
    }
}
