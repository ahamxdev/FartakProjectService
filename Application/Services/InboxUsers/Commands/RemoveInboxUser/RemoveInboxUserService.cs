using Application.Interfaces.Contexts;
using Common.Dto;


namespace Application.Services.InboxUsers.Commands.RemoveInboxUser
{
    public class RemoveInboxUserService : IRemoveInboxUserService
    {

        private readonly IDatabaseContext _context;

        public RemoveInboxUserService(IDatabaseContext context)
        {
            _context = context;
        }

        public ResultDto Execute(RequestRemoveInboxUserDto request)
        {
            var InboxUser = _context.InboxUsers.Find(request.InboxUserId);
            if (InboxUser == null)
            {
                return new ResultDto
                {
                    IsSuccess = false,
                    Message = "Not Found"
                };
            }
            _context.InboxUsers.Remove(InboxUser);
            _context.SaveChanges();
            return new ResultDto()
            {
                IsSuccess = true,
                Message = "Data Removed"
            };
        }
    }
}
