using Application.Interfaces.Contexts;
using Common.Dto;


namespace Application.Services.Users.Commands.RemoveUsers
{
    public class RemoveUserService : IRemoveUserService
    {

        private readonly IDatabaseContext _context;

        public RemoveUserService(IDatabaseContext context)
        {
            _context = context;
        }

        public ResultDto Execute(RequestRemoveUserDto request)
        {
            var user = _context.Users.Find(request.UserId);
            if (user == null)
            {
                return new ResultDto
                {
                    IsSuccess = false,
                    Message = "یافت نشد"
                };
            }
            _context.Users.Remove(user);
            _context.SaveChanges();
            return new ResultDto()
            {
                IsSuccess = true,
                Message = "با موفقیت حذف شد"
            };
        }
    }
}
