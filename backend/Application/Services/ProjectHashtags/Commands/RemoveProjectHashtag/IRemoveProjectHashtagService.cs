using Common.Dto;

namespace Application.Services.ProjectHashtags.Commands.RemoveProjectHashtags
{
    public interface IRemoveProjectHashtagService
    {
        ResultDto Execute(RequestRemoveProjectHashtagsDto request);
    }
}
