using Application.Interfaces.Contexts;
using Common.Dto;

namespace Application.Services.UserToken.Commands.RemoveUserToken
{
    public class RemoveUserTokenService : IRemoveUserTokenService
    {
        private readonly IDatabaseContext _context;
        public RemoveUserTokenService(IDatabaseContext context)
        {
            _context = context;
        }
        public ResultDto Execute(RequestRemoveUserTokenDto request)
        {
            var salt = Guid.NewGuid().ToString("N");
            var UserToken = _context.UserTokens.Where(p => p.Token == request.Token).ToList();
            if (UserToken == null)
            {
                return new ResultDto
                {
                    IsSuccess = false,
                    Message = "یافت نشد"
                };
            }


            try
            {
                _context.UserTokens.RemoveRange(UserToken);
                _context.SaveChanges();

                return new ResultDto()
                {
                    IsSuccess = true,
                    Message = "حذف انجام شد"
                };
            }
            catch
            {
                return new ResultDto()
                {
                    IsSuccess = false,
                    Message = "حذف با خطا مواجه شد"
                };
            }

        }
    }
}
