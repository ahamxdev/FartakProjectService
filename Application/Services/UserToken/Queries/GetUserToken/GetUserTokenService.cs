using Application.Interfaces.Contexts;

namespace Application.Services.UserToken.Queries.GetUserToken
{
    public class GetUserTokenService : IGetUserTokenService
    {
        private readonly IDatabaseContext _context;
        public GetUserTokenService(IDatabaseContext context)
        {
            _context = context;
        }

        public bool GetToken(RequestCheckTokenDto request)
        {
            var UserToken = _context.UserTokens.Where(x => x.UserId == request.SelfUserId && x.Token == request.Token);
            var UserTokenList = UserToken.Select(p => new GetUserTokenDto
            {
                UserTokenId = p.UserTokenId,
                UserId = p.UserId,
                ExpireDate = p.ExpireDate,
                Token = p.Token
            }).OrderBy(x => x.UserTokenId).ToList();

            if (UserTokenList.Count == 0)
            {
                return false;
            }
            if (UserTokenList[0].ExpireDate < DateTime.Now)
            {
                return false;
            }
            return true;

        }

        public ResultGetUserTokenDto GetByUserId(RequestGetUserTokenByUserIdDto request)
        {
            var UserToken = _context.UserTokens.Where(x => x.UserId == request.UserId);
            var UserTokenList = UserToken.Select(p => new GetUserTokenDto
            {
                UserTokenId = p.UserTokenId,
                UserId = p.UserId,
                ExpireDate = p.ExpireDate,
                Token = p.Token

            }).OrderBy(x => x.UserTokenId).ToList();
            return new ResultGetUserTokenDto
            {
                UserToken = UserTokenList,
                Rows = UserTokenList.Count,
            };
        }

    }
}
