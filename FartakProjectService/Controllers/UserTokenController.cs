using System.Diagnostics;
using Application.Services.UserToken.Commands.EditUserToken;
using Application.Services.UserToken.Commands.RemoveUserToken;
using Application.Services.UserToken.Queries.GetUserToken;
using Common.Dto;
using Common.Services.UserService.Token.Queries.GetToken;
using Microsoft.AspNetCore.Mvc;

namespace FartakProjectService.Controllers
{
    /// <summary>
    /// این سرویس ، سرویس توکن می باشد.
    /// •	تمامی رویدادهای موجود در این سرویس قبل از اجرا به سرویس user مراجعه و چک می کنند آیا درخواست توسط کاربر معتبر ارسال شده یا خیر
    /// </summary>
    [ApiController]
    [Route("api/usertokens")]
    public class UserTokenController : Controller
    {
        private readonly IEditUserTokenService _editUserTokenService;
        private readonly IRemoveUserTokenService _removeUserTokenService;
        private readonly IGetUserTokenService _getUserTokenService;
        /// <summary>
        /// سازنده کنترلر
        /// </summary>
        public UserTokenController(IEditUserTokenService editUserTokenService,
                              IGetUserTokenService getUserTokenService,
                              IRemoveUserTokenService removeUserTokenService)
        {
            _editUserTokenService = editUserTokenService;
            _getUserTokenService = getUserTokenService;
            _removeUserTokenService = removeUserTokenService;
        }

        /// <summary>
        /// حذف کردن توکن
        /// </summary>
        /// <response code="200">Success</response>
        /// <response code="409">Not Success - Value Content:</response>
        /// <response code="500">Server Error - Value Content:</response>
        [ProducesResponseType(typeof(ResultDto), 200)]
        [ProducesResponseType(typeof(ErrorDto), 409)]
        [ProducesResponseType(typeof(ErrorDto), 500)]
        [HttpDelete]
        [Route("Delete")]
        public ActionResult Delete(RequestRemoveUserTokenDto dto)
        {
            try
            {
                //var tokenDto = new RequestGetTokenDto { };
                //if (Request.Headers["Authorization"].Count() > 0)
                //{
                //    tokenDto.Token = Request.Headers["Authorization"];
                //}
                //if (Request.Headers["selfUserId"].Count() > 0)
                //{
                //    tokenDto.SelfUserId = Request.Headers["selfUserId"];
                //}
                //if (_getUserTokenService.GetToken(new RequestCheckTokenDto { SelfUserId = Convert.ToInt64(tokenDto.SelfUserId), Token = tokenDto.Token }).Rows == 0)
                //{
                //    return StatusCode(403, Json(new ErrorDto { IsSuccess = false, Message = "توکن نامعتبر است", ResponseCode = 403, Service = "User" }));
                //}

                var result = _removeUserTokenService.Execute(dto);
                if (result.IsSuccess == true)
                    return Json(result);
                else
                    return StatusCode(409, new
                    {
                        value = new ErrorDto
                        {
                            IsSuccess = false,
                            Message = result.Message,
                            Service = "UserToken",
                            ResponseCode = 409,
                        }
                    });
            }
            catch (Exception e)
            {
                var st = new StackTrace(e, true);
                var frame = st.GetFrame(0);
                var line = 0;
                if (frame != null)
                {
                    line = frame.GetFileLineNumber();
                    // Proceed with line
                }

                return StatusCode(500, new
                {
                    value = new ErrorDto
                    {
                        IsSuccess = false,
                        Message = "Server Error : LIne Number=" + line + " *** Message= " + e.Message,
                        Service = "UserToken",
                        ResponseCode = 500,
                    }
                });
            }
        }
        /// <summary>
        /// چک کردن توکن
        /// </summary>
        /// <response code="200">Success</response>
        /// <response code="409">Not Success - Value Content:</response>
        /// <response code="500">Server Error - Value Content:</response>
        [ProducesResponseType(typeof(ResultGetUserTokenDto), 200)]
        [ProducesResponseType(typeof(ErrorDto), 409)]
        [ProducesResponseType(typeof(ErrorDto), 500)]
        [HttpPost]
        [Route("CheckToken")]
        public ActionResult CheckToken(RequestCheckTokenDto dto)
        {
            try
            {
                var result = _getUserTokenService.GetToken(dto);
                if (result.Rows > 0)
                    if (result.UserToken[0].ExpireDate >= DateTime.Now)
                    {
                        var editResult = _editUserTokenService.Execute(new RequestEditUserTokenDto
                        { ExpireDate = DateTime.Now, Token = dto.Token, UserId = dto.SelfUserId });
                        if (editResult.IsSuccess == true)
                            return Json(result);
                        else
                            return StatusCode(409, Json(new ErrorDto
                            {
                                IsSuccess = false,
                                Message = editResult.Message,
                                Service = "User",
                                ResponseCode = 409,
                            }));
                    }
                return Json(result);
            }
            catch (Exception e)
            {
                var st = new StackTrace(e, true);
                var frame = st.GetFrame(0);
                var line = 0;
                if (frame != null)
                {
                    line = frame.GetFileLineNumber();
                    // Proceed with line
                }

                return StatusCode(500, new
                {
                    value = new ErrorDto
                    {
                        IsSuccess = false,
                        Message = "Server Error : LIne Number=" + line + " *** Message= " + e.Message,
                        Service = "UserToken",
                        ResponseCode = 500,
                    }
                });
            }
        }


        /// <summary>
        /// توکن های یک کاربر
        /// </summary>
        /// <response code="200">Success</response>
        /// <response code="409">Not Success - Value Content:</response>
        /// <response code="500">Server Error - Value Content:</response>
        [ProducesResponseType(typeof(ResultGetUserTokenDto), 200)]
        [ProducesResponseType(typeof(ErrorDto), 409)]
        [ProducesResponseType(typeof(ErrorDto), 500)]
        [HttpPost]
        [Route("GetByUserId")]
        public ActionResult GetByUserId(RequestGetUserTokenByUserIdDto dto)
        {
            try
            {
                var tokenDto = new RequestGetTokenDto { };
                if (Request.Headers["Authorization"].Count() > 0)
                {
                    tokenDto.Token = Request.Headers["Authorization"];
                }
                if (Request.Headers["selfUserId"].Count() > 0)
                {
                    tokenDto.SelfUserId = Request.Headers["selfUserId"];
                }
                if (_getUserTokenService.GetToken(new RequestCheckTokenDto { SelfUserId = Convert.ToInt64(tokenDto.SelfUserId), Token = tokenDto.Token }).Rows == 0)
                {
                    return StatusCode(403, Json(new ErrorDto { IsSuccess = false, Message = "توکن نامعتبر است", ResponseCode = 403, Service = "User" }));
                }

                var result = _getUserTokenService.GetByUserId(dto);
                return Json(result);
            }
            catch (Exception e)
            {
                var st = new StackTrace(e, true);
                var frame = st.GetFrame(0);
                var line = 0;
                if (frame != null)
                {
                    line = frame.GetFileLineNumber();
                    // Proceed with line
                }

                return StatusCode(500, new
                {
                    value = new ErrorDto
                    {
                        IsSuccess = false,
                        Message = "Server Error : LIne Number=" + line + " *** Message= " + e.Message,
                        Service = "UserToken",
                        ResponseCode = 500,
                    }
                });
            }
        }
    }
}
