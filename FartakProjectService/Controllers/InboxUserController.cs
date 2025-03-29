using System.ComponentModel.DataAnnotations;
using System.Diagnostics;
using Application.Services.InboxUsers.Commands.AddInboxUser;
using Application.Services.InboxUsers.Commands.EditInboxUser;
using Application.Services.InboxUsers.Commands.RemoveInboxUser;
using Application.Services.InboxUsers.Queries.GetInboxUser;
using Common.Dto;
using Microsoft.AspNetCore.Mvc;

namespace FartakProjectService.Controllers
{
    /// <summary>
    /// این سرویس ، سرویس صندوق کاربران می باشد.
    /// •	تمامی رویدادهای موجود در این سرویس قبل از اجرا به سرویس InboxUser مراجعه و چک می کنند آیا درخواست توسط کاربر معتبر ارسال شده یا خیر
    /// </summary>
    [ApiController]
    [Route("api/InboxUsers")]
    public class InboxUserController : Controller
    {
        private readonly IAddInboxUserService _addInboxUserService;
        private readonly IEditInboxUserService _editInboxUserService;
        private readonly IRemoveInboxUserService _removeInboxUserService;
        private readonly IGetInboxUserService _getInboxUserService;
        private readonly IConfiguration _configuration;
        /// <summary>
        /// سازنده کنترلر
        /// </summary>
        public InboxUserController(IAddInboxUserService addInboxUserService,
                              IEditInboxUserService editInboxUserService,
                              IRemoveInboxUserService removeInboxUserService,
                              IGetInboxUserService getInboxUserService,
                              IConfiguration configuration)
        {
            _addInboxUserService = addInboxUserService;
            _editInboxUserService = editInboxUserService;
            _removeInboxUserService = removeInboxUserService;
            _getInboxUserService = getInboxUserService;
            _configuration = configuration;

        }


        /// <summary>
        /// اضاف کردن صندوق کاربران
        /// </summary>
        /// <response code="200">Success</response>
        /// <response code="400">Validation Error</response>
        /// <response code="403">Not Authorized - Value Content:</response>
        /// <response code="409">Not Success - Value Content:</response>
        /// <response code="500">Server Error - Value Content:</response>
        [ProducesResponseType(typeof(ResultDto), 200)]
        [ProducesResponseType(typeof(ValidationResult), 400)]
        [ProducesResponseType(typeof(ErrorDto), 403)]
        [ProducesResponseType(typeof(ErrorDto), 409)]
        [ProducesResponseType(typeof(ErrorDto), 500)]
        [HttpPost]
        [Route("Add")]
        public ActionResult Add(RequestAddInboxUserDto dto)
        {
            try
            {
                //var tokenDto = new RequestGetTokenDto { };
                //if (Request.Headers["Authorization"].Count() > 0)
                //{
                //    tokenDto.Token = Request.Headers["Authorization"];
                //}
                //if (Request.Headers["selfInboxUserId"].Count() > 0)
                //{
                //    tokenDto.SelfInboxUserId = Request.Headers["selfInboxUserId"];
                //}

                //if (tokenDto.Token == null)
                //    tokenDto.Token = "";

                //if (_getTokenService.GetToken(new RequestCheckTokenDto
                //{
                //    SelfInboxUserId = Convert.ToInt64(tokenDto.SelfInboxUserId),
                //    Token = tokenDto.Token
                //}).Rows == 0)
                //{
                //    return StatusCode(403, Json(new ErrorDto { IsSuccess = false, Message = "توکن نامعتبر است", ResponseCode = 403, Service = "InboxUser" }));
                //}

                var result = _addInboxUserService.Execute(dto);
                if (result.IsSuccess == true)
                    return Json(result);
                else
                    return StatusCode(409, Json(new ErrorDto
                    {
                        IsSuccess = false,
                        Message = result.Message,
                        Service = "InboxUser",
                        ResponseCode = 409,
                    }));
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
                        Service = "InboxUser",
                        ResponseCode = 500,
                    }
                });
            }
        }




        /// <summary>
        /// ویرایش صندوق کاربران
        /// </summary>
        /// <response code="200">Success</response>
        /// <response code="400">Validation Error</response>
        /// <response code="403">Not Authorized - Value Content:</response>
        /// <response code="409">Not Success - Value Content:</response>
        /// <response code="500">Server Error - Value Content:</response>
        [ProducesResponseType(typeof(ResultDto), 200)]
        [ProducesResponseType(typeof(ValidationResult), 400)]
        [ProducesResponseType(typeof(ErrorDto), 403)]
        [ProducesResponseType(typeof(ErrorDto), 409)]
        [ProducesResponseType(typeof(ErrorDto), 500)]
        [HttpPut]
        [Route("Edit")]
        public ActionResult Edit(RequestEditInboxUserDto dto)
        {
            try
            {
                //var tokenDto = new RequestGetTokenDto { };
                //if (Request.Headers["Authorization"].Count() > 0)
                //{
                //    tokenDto.Token = Request.Headers["Authorization"];
                //}
                //if (Request.Headers["selfInboxUserId"].Count() > 0)
                //{
                //    tokenDto.SelfInboxUserId = Request.Headers["selfInboxUserId"];
                //}

                //if (tokenDto.Token == null)
                //    tokenDto.Token = "";

                //if (_getTokenService.GetToken(new RequestCheckTokenDto
                //{
                //    SelfInboxUserId = Convert.ToInt64(tokenDto.SelfInboxUserId),
                //    Token = tokenDto.Token
                //}).Rows == 0)
                //{
                //    return StatusCode(403, Json(new ErrorDto { IsSuccess = false, Message = "توکن نامعتبر است", ResponseCode = 403, Service = "InboxUser" }));
                //}

                var result = _editInboxUserService.Execute(dto);
                if (result.IsSuccess == true)
                    return Json(result);
                else
                    return StatusCode(409, Json(new ErrorDto
                    {
                        IsSuccess = false,
                        Message = result.Message,
                        Service = "InboxUser",
                        ResponseCode = 409,
                    }));
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
                        Service = "InboxUser",
                        ResponseCode = 500,
                    }
                });
            }
        }



        /// <summary>
        /// حذف صندوق کاربران
        /// </summary>
        /// <response code="200">Success</response>
        /// <response code="400">Validation Error</response>
        /// <response code="409">Not Success - Value Content:</response>
        /// <response code="500">Server Error - Value Content:</response>
        [ProducesResponseType(typeof(ResultDto), 200)]
        [ProducesResponseType(typeof(ValidationResult), 400)]
        [ProducesResponseType(typeof(ErrorDto), 409)]
        [ProducesResponseType(typeof(ErrorDto), 500)]
        [HttpDelete]
        [Route("Delete")]
        public ActionResult Delete(RequestRemoveInboxUserDto dto)
        {
            try
            {
                //var tokenDto = new RequestGetTokenDto { };
                //if (Request.Headers["Authorization"].Count() > 0)
                //{
                //    tokenDto.Token = Request.Headers["Authorization"];
                //}
                //if (Request.Headers["selfInboxUserId"].Count() > 0)
                //{
                //    tokenDto.SelfInboxUserId = Request.Headers["selfInboxUserId"];
                //}
                //if (tokenDto.Token == null)
                //    tokenDto.Token = "";

                //if (_getTokenService.GetToken(new RequestCheckTokenDto
                //{
                //    SelfInboxUserId = Convert.ToInt64(tokenDto.SelfInboxUserId),
                //    Token = tokenDto.Token
                //}).Rows == 0)
                //{
                //    return StatusCode(403, Json(new ErrorDto { IsSuccess = false, Message = "توکن نامعتبر است", ResponseCode = 403, Service = "InboxUser" }));
                //}

                var result = _removeInboxUserService.Execute(dto);
                if (result.IsSuccess == true)
                {
                    return Json(new ResultDto
                    {
                        IsSuccess = result.IsSuccess,
                        Message = result.Message,
                    });
                }
                else
                    return StatusCode(409, Json(new ErrorDto
                    {
                        IsSuccess = false,
                        Message = result.Message,
                        Service = "InboxUser",
                        ResponseCode = 409,
                    }));
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
                        Service = "InboxUser",
                        ResponseCode = 500,
                    }
                });
            }
        }




        /// <summary>
        /// دریافت لیست صندوق کاربران
        /// </summary>
        /// <response code="200">Success</response>
        /// <response code="403">Not Authorized - Value Content:</response>
        /// <response code="500">Server Error - Value Content:</response>
        [ProducesResponseType(typeof(ResultGetInboxUserDto), 200)]
        [ProducesResponseType(typeof(ErrorDto), 403)]
        [ProducesResponseType(typeof(ErrorDto), 500)]
        [HttpPost]
        [Route("GetAll")]
        public ActionResult GetAll()
        {
            try
            {
                //var tokenDto = new RequestGetTokenDto { };
                //if (Request.Headers["Authorization"].Count() > 0)
                //{
                //    tokenDto.Token = Request.Headers["Authorization"];
                //}
                //if (Request.Headers["selfInboxUserId"].Count() > 0)
                //{
                //    tokenDto.SelfInboxUserId = Request.Headers["selfInboxUserId"];
                //}
                //if (tokenDto.Token == null)
                //    tokenDto.Token = "";
                //if (_getTokenService.GetToken(new RequestCheckTokenDto
                //{
                //    SelfInboxUserId = Convert.ToInt64(tokenDto.SelfInboxUserId),
                //    Token = tokenDto.Token
                //}).Rows == 0)
                //{
                //    return StatusCode(403, Json(new ErrorDto { IsSuccess = false, Message = "توکن نامعتبر است", ResponseCode = 403, Service = "InboxUser" }));
                //}
                var result = _getInboxUserService.GetAll();
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
                        Service = "InboxUser",
                        ResponseCode = 500,
                    }
                });
            }
        }

        /// <summary>
        /// دریافت لیست صندوق کاربران بر اساس InboxUserId
        /// </summary>
        /// <response code="200">Success</response>
        /// <response code="403">Not Authorized - Value Content:</response>
        /// <response code="500">Server Error - Value Content:</response>
        [ProducesResponseType(typeof(ResultGetInboxUserDto), 200)]
        [ProducesResponseType(typeof(ErrorDto), 403)]
        [ProducesResponseType(typeof(ErrorDto), 500)]
        [HttpPost]
        [Route("GetById")]
        public ActionResult GetById(RequestGetInboxUserByIdDto dto)
        {
            try
            {
                //var tokenDto = new RequestGetTokenDto { };
                //if (Request.Headers["Authorization"].Count() > 0)
                //{
                //    tokenDto.Token = Request.Headers["Authorization"];
                //}
                //if (Request.Headers["selfInboxUserId"].Count() > 0)
                //{
                //    tokenDto.SelfInboxUserId = Request.Headers["selfInboxUserId"];
                //}
                //if (tokenDto.Token == null)
                //    tokenDto.Token = "";

                //if (tokenDto.SelfInboxUserId == null)
                //    tokenDto.SelfInboxUserId = "";

                //if (_getTokenService.GetToken(new RequestCheckTokenDto
                //{
                //    SelfInboxUserId = Convert.ToInt64(tokenDto.SelfInboxUserId),
                //    Token = tokenDto.Token
                //}).Rows == 0)
                //{
                //    return StatusCode(403, Json(new ErrorDto { IsSuccess = false, Message = "توکن نامعتبر است", ResponseCode = 403, Service = "InboxUser" }));
                //}

                var result = _getInboxUserService.GetById(dto);

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
                        Service = "InboxUser",
                        ResponseCode = 500,
                    }
                });
            }
        }


        /// <summary>
        /// دریافت لیست صندوق کاربران بر اساس UserId
        /// </summary>
        /// <response code="200">Success</response>
        /// <response code="403">Not Authorized - Value Content:</response>
        /// <response code="500">Server Error - Value Content:</response>
        [ProducesResponseType(typeof(ResultGetInboxUserDto), 200)]
        [ProducesResponseType(typeof(ErrorDto), 403)]
        [ProducesResponseType(typeof(ErrorDto), 500)]
        [HttpPost]
        [Route("GetByUserId")]
        public ActionResult GetByUserId(RequestGetInboxUserByUserIdDto dto)
        {
            try
            {
                //var tokenDto = new RequestGetTokenDto { };
                //if (Request.Headers["Authorization"].Count() > 0)
                //{
                //    tokenDto.Token = Request.Headers["Authorization"];
                //}
                //if (Request.Headers["selfInboxUserId"].Count() > 0)
                //{
                //    tokenDto.SelfInboxUserId = Request.Headers["selfInboxUserId"];
                //}
                //if (tokenDto.Token == null)
                //    tokenDto.Token = "";

                //if (tokenDto.SelfInboxUserId == null)
                //    tokenDto.SelfInboxUserId = "";

                //if (_getTokenService.GetToken(new RequestCheckTokenDto
                //{
                //    SelfInboxUserId = Convert.ToInt64(tokenDto.SelfInboxUserId),
                //    Token = tokenDto.Token
                //}).Rows == 0)
                //{
                //    return StatusCode(403, Json(new ErrorDto { IsSuccess = false, Message = "توکن نامعتبر است", ResponseCode = 403, Service = "InboxUser" }));
                //}

                var result = _getInboxUserService.GetByUserId(dto);

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
                        Service = "InboxUser",
                        ResponseCode = 500,
                    }
                });
            }
        }


        /// <summary>
        /// دریافت لیست صندوق کاربران بر اساس UserId خوانده نشده
        /// </summary>
        /// <response code="200">Success</response>
        /// <response code="403">Not Authorized - Value Content:</response>
        /// <response code="500">Server Error - Value Content:</response>
        [ProducesResponseType(typeof(ResultGetInboxUserDto), 200)]
        [ProducesResponseType(typeof(ErrorDto), 403)]
        [ProducesResponseType(typeof(ErrorDto), 500)]
        [HttpPost]
        [Route("GetByUserIdUnRead")]
        public ActionResult GetByUserIdUnRead(RequestGetInboxUserByUserIdDto dto)
        {
            try
            {
                //var tokenDto = new RequestGetTokenDto { };
                //if (Request.Headers["Authorization"].Count() > 0)
                //{
                //    tokenDto.Token = Request.Headers["Authorization"];
                //}
                //if (Request.Headers["selfInboxUserId"].Count() > 0)
                //{
                //    tokenDto.SelfInboxUserId = Request.Headers["selfInboxUserId"];
                //}
                //if (tokenDto.Token == null)
                //    tokenDto.Token = "";

                //if (tokenDto.SelfInboxUserId == null)
                //    tokenDto.SelfInboxUserId = "";

                //if (_getTokenService.GetToken(new RequestCheckTokenDto
                //{
                //    SelfInboxUserId = Convert.ToInt64(tokenDto.SelfInboxUserId),
                //    Token = tokenDto.Token
                //}).Rows == 0)
                //{
                //    return StatusCode(403, Json(new ErrorDto { IsSuccess = false, Message = "توکن نامعتبر است", ResponseCode = 403, Service = "InboxUser" }));
                //}

                var result = _getInboxUserService.GetByUserIdUnRead(dto);

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
                        Service = "InboxUser",
                        ResponseCode = 500,
                    }
                });
            }
        }

    }
}

