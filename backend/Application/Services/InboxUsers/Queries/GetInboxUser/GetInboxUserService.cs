using Application.Interfaces.Contexts;

namespace Application.Services.InboxUsers.Queries.GetInboxUser
{
    public class GetInboxUserService : IGetInboxUserService
    {
        private readonly IDatabaseContext _context;
        public GetInboxUserService(IDatabaseContext context)
        {
            _context = context;
        }
        public ResultGetInboxUserDto GetAll()
        {

            var InboxUsers = _context.InboxUsers;
            var InboxUserList = InboxUsers.Select(p => new GetInboxUserDto
            {
                Title = p.Title,
                Message = p.Message,
                Read = p.Read,
                UserId = p.UserId,
                SenderId = p.SenderId,
                InboxUserId = p.InboxUserId

            }).OrderBy(x => x.InboxUserId).ToList();
            return new ResultGetInboxUserDto()
            {
                InboxUsers = InboxUserList,
                Rows = InboxUserList.Count,


            };

        }

        public ResultGetInboxUserDto GetById(RequestGetInboxUserByIdDto request)
        {
            var InboxUsers = _context.InboxUsers.Where(x => x.InboxUserId == request.InboxUserId);
            var InboxUserList = InboxUsers.Select(p => new GetInboxUserDto
            {
                Title = p.Title,
                Message = p.Message,
                Read = p.Read,
                UserId = p.UserId,
                SenderId = p.SenderId,
                InboxUserId = p.InboxUserId

            }).OrderBy(x => x.InboxUserId).ToList();
            return new ResultGetInboxUserDto()
            {

                InboxUsers = InboxUserList,
                Rows = InboxUserList.Count,

            };
        }


        public ResultGetInboxUserDto GetByUserId(RequestGetInboxUserByUserIdDto request)
        {
            var InboxUsers = _context.InboxUsers.Where(x => x.UserId == request.UserId);
            var InboxUserList = InboxUsers.Select(p => new GetInboxUserDto
            {
                Title = p.Title,
                Message = p.Message,
                Read = p.Read,
                UserId = p.UserId,
                SenderId = p.SenderId,
                InboxUserId = p.InboxUserId

            }).OrderBy(x => x.InboxUserId).ToList();
            return new ResultGetInboxUserDto()
            {

                InboxUsers = InboxUserList,
                Rows = InboxUserList.Count,

            };
        }


        public ResultGetInboxUserDto GetByUserIdUnRead(RequestGetInboxUserByUserIdDto request)
        {
            var InboxUsers = _context.InboxUsers.Where(x => x.UserId == request.UserId && x.Read == 0);
            var InboxUserList = InboxUsers.Select(p => new GetInboxUserDto
            {
                Title = p.Title,
                Message = p.Message,
                Read = p.Read,
                UserId = p.UserId,
                SenderId = p.SenderId,
                InboxUserId = p.InboxUserId

            }).OrderBy(x => x.InboxUserId).ToList();
            return new ResultGetInboxUserDto()
            {

                InboxUsers = InboxUserList,
                Rows = InboxUserList.Count,

            };
        }


    }
}
