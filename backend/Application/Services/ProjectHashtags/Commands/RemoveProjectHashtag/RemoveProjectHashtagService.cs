using Application.Interfaces.Contexts;
using Common.Dto;


namespace Application.Services.ProjectHashtags.Commands.RemoveProjectHashtags
{
    public class RemoveProjectHashtagService : IRemoveProjectHashtagService
    {

        private readonly IDatabaseContext _context;


        public RemoveProjectHashtagService(IDatabaseContext context)
        {
            _context = context;
        }

        public ResultDto Execute(RequestRemoveProjectHashtagsDto request)
        {
            var ProjectHashtags = _context.ProjectHashtags.Find(request.ProjectHashtagId);
            if (ProjectHashtags == null)
            {
                return new ResultDto
                {
                    IsSuccess = false,
                    Message = "یافت نشد"
                };
            }

            _context.ProjectHashtags.Remove(ProjectHashtags);
            _context.SaveChanges();
            return new ResultDto()
            {
                IsSuccess = true,
                Message = "با موفقیت حذف شد"
            };
        }
    }
}
