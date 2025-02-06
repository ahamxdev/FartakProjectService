using Application.Interfaces.Contexts;
using Common.Dto;


namespace Application.Services.ProjectLikes.Commands.RemoveProjectLikes
{
    public class RemoveProjectLikeService : IRemoveProjectLikeService
    {

        private readonly IDatabaseContext _context;


        public RemoveProjectLikeService(IDatabaseContext context)
        {
            _context = context;
        }

        public ResultDto Execute(RequestRemoveProjectLikeDto request)
        {
            var ProjectLike = _context.ProjectLikes.Find(request.ProjectLikeId);
            if (ProjectLike == null)
            {
                return new ResultDto
                {
                    IsSuccess = false,
                    Message = "یافت نشد"
                };
            }

            _context.ProjectLikes.Remove(ProjectLike);
            _context.SaveChanges();
            return new ResultDto()
            {
                IsSuccess = true,
                Message = "با موفقیت حذف شد"
            };
        }
    }
}
