using Application.Services.ProjectHashtag.Queries.GetProjectHashtag;

namespace Application.Services.ProjectHashtags.Queries.GetProjectHashtags
{
    public interface IGetProjectHashtagService
    {
        ResultGetProjectHashtagsDto GetById(RequestGetProjectHashtagByIdDto request);
        ResultGetProjectHashtagsDto GetAll();
        ResultGetProjectHashtagsDto GetAllParent();
        ResultGetProjectHashtagsDto GetChildrenById(RequestGetProjectHashtagByIdDto request);
    }
}
