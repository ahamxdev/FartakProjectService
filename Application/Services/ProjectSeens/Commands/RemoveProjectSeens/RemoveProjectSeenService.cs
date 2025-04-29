using Application.Interfaces.Contexts;
using Common.Dto;


namespace Application.Services.ProjectSeens.Commands.RemoveProjectSeens
{
    public class RemoveProjectSeenService : IRemoveProjectSeenService
    {

        private readonly IDatabaseContext _context;


        public RemoveProjectSeenService(IDatabaseContext context)
        {
            _context = context;
        }

        public ResultDto Execute(RequestRemoveProjectSeenDto request)
        {
            var ProjectSeen = _context.ProjectSeens.Find(request.ProjectSeenId);
            if (ProjectSeen == null)
            {
                return new ResultDto
                {
                    IsSuccess = false,
                    Message = "یافت نشد"
                };
            }

            _context.ProjectSeens.Remove(ProjectSeen);
            _context.SaveChanges();
            return new ResultDto()
            {
                IsSuccess = true,
                Message = "با موفقیت حذف شد"
            };
        }
    }
}
