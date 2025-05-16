
using Application.Interfaces.Contexts;
using Common.Dto;
using Microsoft.Extensions.Configuration;

namespace Application.Services.UserToken.Commands.EditUserToken
{
    public class EditUserTokenService : IEditUserTokenService
    {
        private readonly IDatabaseContext _context;
        private readonly IConfiguration _configuration;

        public EditUserTokenService(IDatabaseContext context,
                              IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }
        public ResultDto Execute(RequestEditUserTokenDto request)
        {
            var salt = Guid.NewGuid().ToString("N");
            var UserToken = _context.UserTokens.Where(x => x.Token == request.Token);
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
                Int32 minutes = Convert.ToInt32(_configuration["AppSettings:TokenMinutes"]);
                UserToken.First().ExpireDate = request.ExpireDate.AddMinutes(minutes);
                _context.SaveChanges();

                return new ResultDto()
                {
                    IsSuccess = true,
                    Message = "ویرایش انجام شد"
                };
            }
            catch
            {
                return new ResultDto()
                {
                    IsSuccess = false,
                    Message = "ویرایش با خطا مواجه شد"
                };
            }

        }
    }
}
