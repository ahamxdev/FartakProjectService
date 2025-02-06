using Application.Interfaces.Contexts;
using Common.Dto;


namespace Application.Services.ProjectUsers.Commands.RemoveProjectUsers
{
    public class RemoveProjectUserService : IRemoveProjectUserService
    {

        private readonly IDatabaseContext _context;


        public RemoveProjectUserService(IDatabaseContext context)
        {
            _context = context;
        }

        public ResultDto Execute(RequestRemoveProjectUserDto request)
        {
            var ProjectUser = _context.ProjectUsers.Find(request.ProjectUserId);
            if (ProjectUser == null)
            {
                return new ResultDto
                {
                    IsSuccess = false,
                    Message = "یافت نشد"
                };
            }

            _context.ProjectUsers.Remove(ProjectUser);
            _context.SaveChanges();
            return new ResultDto()
            {
                IsSuccess = true,
                Message = "با موفقیت حذف شد"
            };
        }
    }
}
