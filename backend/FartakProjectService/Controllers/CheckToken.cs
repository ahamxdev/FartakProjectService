using Application.Services.UserToken.Queries.GetUserToken;
using Common.Dto;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Identity.Client;

namespace FartakProjectService.Controllers
{
    public class CheckToken : Controller
    {
        private readonly IGetUserTokenService _getUserTokenService;
        public CheckToken(IGetUserTokenService getUserTokenService) { _getUserTokenService = getUserTokenService; }
        public ObjectResult  CheckUserToken()
            
        {
          
            var tokenDto = new RequestCheckTokenDto { Token = "", SelfUserId = 0 };
            if (Request.Headers["token"].Count() > 0)
            {
                tokenDto.Token = Request.Headers["token"];
            }
            if (Request.Headers["userId"].Count() > 0)
            {
                tokenDto.SelfUserId = long.Parse(Request.Headers["userId"]);
            }
            if (tokenDto.Token == null || tokenDto.SelfUserId == 0)
            {
                return StatusCode(409, Json(new ErrorDto
                {
                    IsSuccess = false,
                    ResponseCode = 409,
                    Message = "مقادیر توکن نامعتبر میباشد",
                    Service = "User",
                }));
            }
            if (_getUserTokenService.GetToken(tokenDto) == false)
            {
                return StatusCode(200, Json(new ErrorDto { IsSuccess = false, Message = "توکن معتبر ", ResponseCode = 200, Service = "User" }));
            }
                              return StatusCode(403, Json(new ErrorDto { IsSuccess = false, Message = "توکن نامعتبر است", ResponseCode = 403, Service = "User" }));
            ;
        }
    }
}
