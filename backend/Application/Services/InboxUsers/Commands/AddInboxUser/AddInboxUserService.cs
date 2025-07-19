using Application.Interfaces.Contexts;
using Common.Dto;
using Domain.Users;
using Microsoft.VisualBasic;



namespace Application.Services.InboxUsers.Commands.AddInboxUser
{
    public class AddInboxUserService : IAddInboxUserService
    {
        private readonly IDatabaseContext _context;
        public AddInboxUserService(IDatabaseContext context)
        {
            _context = context;
        }
        public ResultDto<ResultAddInboxUserDto> Execute(RequestAddInboxUserDto request)
        {

            try
            {

                InboxUser InboxUser = new InboxUser
                {
                    CreatedAt = DateAndTime.Now , 
                    Title  = request.Title,
                    Message = request.Message,
                    Read = 0,
                    UserId = request.UserId,
                    SenderId = request.SenderId,

                };
                _context.InboxUsers.Add(InboxUser);
                _context.SaveChanges();


                return new ResultDto<ResultAddInboxUserDto>
                {
                    Data = new ResultAddInboxUserDto
                    {
                        InboxUserId = InboxUser.InboxUserId
                    },
                    IsSuccess = true,
                    Message = "Added InboxUser"
                };
            }
            catch
            {
                return new ResultDto<ResultAddInboxUserDto>
                {
                    Data = new ResultAddInboxUserDto { InboxUserId = 0 },
                    IsSuccess = false,
                    Message = "Problem to Save"
                };

            }
        }
    }
}




