namespace Application.Services.InboxUsers.Queries.GetInboxUser
{
    public interface IGetInboxUserService
    {
        ResultGetInboxUserDto GetAll();
        ResultGetInboxUserDto GetById(RequestGetInboxUserByIdDto request);
        ResultGetInboxUserDto GetByUserId(RequestGetInboxUserByUserIdDto request);
        ResultGetInboxUserDto GetByUserIdUnRead(RequestGetInboxUserByUserIdDto request);
    }
}
