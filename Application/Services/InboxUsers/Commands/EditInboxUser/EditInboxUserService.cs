using Application.Interfaces.Contexts;
using Common.Dto;

namespace Application.Services.InboxUsers.Commands.EditInboxUser
{
    public class EditInboxUserService : IEditInboxUserService
    {
        private readonly IDatabaseContext _context;

        public EditInboxUserService(IDatabaseContext context)
        {
            _context = context;
        }
        public ResultDto Execute(RequestEditInboxUserDto request)
        {

            var InboxUser = _context.InboxUsers.Find(request.InboxUserId);
            if (InboxUser == null)
            {
                return new ResultDto
                {
                    IsSuccess = false,
                    Message = "Not Found InboxUser"
                };
            }


            try
            {


                InboxUser.Read = request.Read;
                InboxUser.Message = request.Message;


                _context.SaveChanges();

                return new ResultDto()
                {
                    IsSuccess = true,
                    Message = "Data Saved"
                };
            }
            catch
            {
                return new ResultDto()
                {
                    IsSuccess = false,
                    Message = "Problem to Save"
                };
            }

        }

    }
}
