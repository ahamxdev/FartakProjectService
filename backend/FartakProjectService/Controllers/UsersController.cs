using System.ComponentModel.DataAnnotations;
using System.Diagnostics;
using Application.Services.SMS;
using Application.Services.Users.Commands.AddUsers;
using Application.Services.Users.Commands.EditUsers;
using Application.Services.Users.Commands.RemoveUsers;
using Application.Services.Users.Queries.GetUsers;
using Application.Services.UserToken.Commands.AddUserToken;
using Application.Services.UserToken.Commands.RemoveUserToken;
using Application.Services.UserToken.Queries.GetUserToken;
using Common.Dto;
using Domain.Entities.Users;
using Microsoft.AspNetCore.Mvc;
using project.Application.Services.SMS;
using Sentry.Protocol;

namespace FartakProjectService.Controllers
{
    /// <summary>
    /// این سرویس ، سرویس کاربران می باشد.
    /// •	تمامی رویدادهای موجود در این سرویس قبل از اجرا به سرویس user مراجعه و چک می کنند آیا درخواست توسط کاربر معتبر ارسال شده یا خیر
    /// </summary>
    [ApiController]
    [Route("api/Users")]
    public class UserController : Controller
    {
        private readonly IAddUserService _addUserService;
        private readonly IAddUserTokenService _addUserTokenService;
        private readonly IEditUserService _editUserService;
        private readonly IRemoveUserService _removeUserService;
        private readonly IGetUserService _getUserService;
        private readonly IConfiguration _configuration;
        private readonly IGetUserTokenService _getTokenService;
        private readonly IRemoveUserTokenService _removeUserTokenService;
        private readonly ISmsIR_SendMessageService _smsService;
        /// <summary>
        /// سازنده کنترلر
        /// </summary>
        public UserController(IAddUserService addUserService,
                              IAddUserTokenService addUserTokenService,
                              IEditUserService editUserService,
                              IRemoveUserService removeUserService,
                              IGetUserService getUserService,
                              IConfiguration configuration,
                              ISmsIR_SendMessageService smsService,
                              IRemoveUserTokenService removeUserTokenService,
                              IGetUserTokenService getTokenService)
        {
            _addUserTokenService = addUserTokenService;
            _addUserService = addUserService;
            _editUserService = editUserService;
            _removeUserService = removeUserService;
            _getUserService = getUserService;
            _configuration = configuration;
            _getTokenService = getTokenService;
            _smsService = smsService;
            _removeUserTokenService = removeUserTokenService;
        }
        /// <summary>
        /// اضافه کردن یک کاربر جدید
        /// </summary>
        /// <response code="200">Success</response>
        /// <response code="400">Validation Error</response>
        /// <response code="409">Not Success - Value Content:</response>
        /// <response code="500">Server Error - Value Content:</response>
        [ProducesResponseType(typeof(ResultDto<ResultAddUserDto>), 200)]
        [ProducesResponseType(typeof(ValidationResult), 400)]
        [ProducesResponseType(typeof(ErrorDto), 409)]
        [ProducesResponseType(typeof(ErrorDto), 500)]
        [HttpPost]
        [Route("Add")]

        public ActionResult Add(RequestAddUserDto dto)
        {
            try
            {
                Int32 minutes = Convert.ToInt32(_configuration["AppSettings:TokenMinutes"]);
                var user = _addUserService.Execute(dto);


                var res = _addUserTokenService.Execute(new RequestAddUserTokenDto
                {
                    UserId = user.Data.UserId,
                    ExpireDate = DateTime.Now.AddMinutes(minutes),
                });

                var outputResult = new
                {
                    IsSuccess = user.IsSuccess,
                    Message = user.Message,
                    User = user.Data,
                    Token = res.Data
                };

                return Json(outputResult);

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
                        Service = "User",
                        ResponseCode = 500,
                    }
                });
            }

        }

        /// <summary>
        /// حذف کاربر
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
        public ActionResult Delete(RequestRemoveUserDto dto)
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
                //if (tokenDto.Token == null)
                //    tokenDto.Token = "";

                //if (_getTokenService.GetToken(new RequestCheckTokenDto
                //{
                //    SelfUserId = Convert.ToInt64(tokenDto.SelfUserId),
                //    Token = tokenDto.Token
                //}).Rows == 0)
                //{
                //    return StatusCode(403, Json(new ErrorDto { IsSuccess = false, Message = "توکن نامعتبر است", ResponseCode = 403, Service = "User" }));
                //}

                var userTokens = _getTokenService.GetByUserId(new RequestGetUserTokenByUserIdDto
                {
                    UserId = dto.UserId,
                });
                foreach (var userToken in userTokens.UserToken)
                {

                    _removeUserTokenService.Execute(new RequestRemoveUserTokenDto
                    {
                        Token = userToken.Token
                    });

                }


                var result = _removeUserService.Execute(dto);
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
                        Service = "User",
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
                        Service = "User",
                        ResponseCode = 500,
                    }
                });
            }
        }




        /// <summary>
        /// ویرایش کاربر
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
        public ActionResult Edit(RequestEditUserDto dto)
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

                //if (tokenDto.Token == null)
                //    tokenDto.Token = "";

                //if (_getTokenService.GetToken(new RequestCheckTokenDto
                //{
                //    SelfUserId = Convert.ToInt64(tokenDto.SelfUserId),
                //    Token = tokenDto.Token
                //}).Rows == 0)
                //{
                //    return StatusCode(403, Json(new ErrorDto { IsSuccess = false, Message = "توکن نامعتبر است", ResponseCode = 403, Service = "User" }));
                //}

                var result = _editUserService.Execute(dto);
                if (result.IsSuccess == true)
                    return Json(result);
                else
                    return StatusCode(409, Json(new ErrorDto
                    {
                        IsSuccess = false,
                        Message = result.Message,
                        Service = "User",
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
                        Service = "User",
                        ResponseCode = 500,
                    }
                });
            }
        }



        /// <summary>
        /// فراموشی رمز عبور
        /// </summary>
        /// <response code="200">Success</response>
        /// <response code="400">Validation Error</response>
        /// <response code="409">Not Success - Value Content:</response>
        /// <response code="500">Server Error - Value Content:</response>
        [ProducesResponseType(typeof(ResultDto), 200)]
        [ProducesResponseType(typeof(ValidationResult), 400)]
        [ProducesResponseType(typeof(ErrorDto), 409)]
        [ProducesResponseType(typeof(ErrorDto), 500)]
        [HttpPut]
        [Route("ForgetPassword")]
        public async Task<ActionResult> ForgetPasswordAsync(RequestEditUserForgetPasswordDto dto)
        {
            try
            {
                var result = _editUserService.ForgetPassword(dto);
                if (result.IsSuccess == true)
                {
                    var SMS = await _smsService.SMSForgetPassword(new SMSRequestDto
                    {

                        Code = result.Data.PassWord,
                        ToSMS = dto.Mobile
                    });
                    if (SMS.IsSuccess == false)
                    {
                        return StatusCode(409, Json(new ErrorDto
                        {
                            IsSuccess = false,
                            Message = SMS.Message,
                            Service = "SMS",
                            ResponseCode = 409,
                        }));
                    }
                    var users = _getUserService.GetByMobile(new RequestGetUserByMobileDto { Mobile = dto.Mobile });
                    if (users.Rows != 0)
                    {
                        var tokens = _getTokenService.GetByUserId(new RequestGetUserTokenByUserIdDto
                        {
                            UserId = users.Users[0].UserId
                        });
                        foreach (var item in tokens.UserToken)
                            _removeUserTokenService.Execute(new RequestRemoveUserTokenDto
                            {
                                Token = item.Token
                            });
                    }
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
                        Service = "User",
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
                        Service = "User",
                        ResponseCode = 500,
                    }
                });
            }
        }




        /// <summary>
        /// ثب نام
        /// </summary>
        /// <response code="200">Success</response>
        /// <response code="400">Validation Error</response>
        /// <response code="409">Not Success - Value Content:</response>
        /// <response code="500">Server Error - Value Content:</response>
        [ProducesResponseType(typeof(ResultDto), 200)]
        [ProducesResponseType(typeof(ValidationResult), 400)]
        [ProducesResponseType(typeof(ErrorDto), 409)]
        [ProducesResponseType(typeof(ErrorDto), 500)]
        [HttpPost]
        [Route("OtpSingup")]
        public async Task<ActionResult> OtpSingupAsync(RequestGetUserByMobileDto dto)
        {

            try
            {
                var verifyCode = "";
                var users = _getUserService.GetByMobile(new RequestGetUserByMobileDto { Mobile = dto.Mobile });
                if (users.Rows == 0)
                {

                    var newUser = new RequestAddUserDto()
                    {
                        Name = "",
                        Lastname = "",
                        PassWord = "",
                        Salt = "",
                        Mobile = dto.Mobile,
                        Email = "",
                        Verify = "",
                        Status = 0,
                        Kind = 1
                    };
                    var user = _addUserService.Execute(newUser);
                    Int32 minutes = Convert.ToInt32(_configuration["AppSettings:TokenMinutes"]);
                    //if (result.IsSuccess == true)
                    //{ }
                    var res = _addUserTokenService.Execute(new RequestAddUserTokenDto
                    {
                        UserId = user.Data.UserId,
                        ExpireDate = DateTime.Now.AddMinutes(minutes),
                    });

                    verifyCode = user.Data.Verify;


                } else verifyCode = users.Users[0].Verify; 


                    var SMS = await _smsService.SMSSignup(new SMSRequestDto
                {

                    Code =   verifyCode,
                    ToSMS = dto.Mobile
                });
                if (SMS.IsSuccess == false)
                {
                    return StatusCode(409, Json(new ErrorDto
                    {
                        IsSuccess = false,
                        Message = SMS.Message,
                        Service = "SMS",
                        ResponseCode = 409,
                    }));
                }
                
                return Json(new ResultDto
                {
                    IsSuccess = true,
                    Message = "موفق",
                });
            }

            catch (Exception e)
            {
                Console.WriteLine(e);
                return BadRequest("خطا ");
            }
        }
      
       

        /// <summary>
        /// ثب نام
        /// </summary>
        /// <response code="200">Success</response>
        /// <response code="400">Validation Error</response>
        /// <response code="409">Not Success - Value Content:</response>
        /// <response code="500">Server Error - Value Content:</response>
        [ProducesResponseType(typeof(ResultDto), 200)]
        [ProducesResponseType(typeof(ValidationResult), 400)]
        [ProducesResponseType(typeof(ErrorDto), 409)]
        [ProducesResponseType(typeof(ErrorDto), 500)]
        [HttpPost]
        [Route("OtpConfirm")]
        public   ObjectResult OtpConfirmAsync(RequestEditUserOtpConfirmDto dto)
        {

            try
            {
                
                var users = _getUserService.GetByMobile(new RequestGetUserByMobileDto { Mobile = dto.Mobile });
                if (users.Rows != 0)
                {
                    var editUser = new RequestEditUserOtpConfirmDto()
                    {

                        Mobile = dto.Mobile,

                    };
                      
                    if ( users.Users[0].Verify == dto.OtpCode)
                    {
                        var result = _editUserService.OtpConfirm(editUser);
                        if (result.IsSuccess == true)
                        {
                            var userToken = _getTokenService.GetByUserId(new RequestGetUserTokenByUserIdDto { UserId = users.Users[0].UserId });
                            var outputResult = new
                            {

                                UserId = users.Users[0].UserId,
                                Token = userToken.UserToken,
                            };

                            return Ok(outputResult);

                        }
                        else
                            return StatusCode(409, Json(new ErrorDto
                            {
                                IsSuccess = false,
                                Message = result.Message,
                                Service = "User",
                                ResponseCode = 409,
                            }));

                    }
                    
                }
                
            }

            catch (Exception e)
            {
                Console.WriteLine(e);
                return BadRequest("خطا  ");
            }
            return BadRequest("خطا  ");
        }
       
        

        /// <summary>
        /// تغییر رمز عبور
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
        [Route("ChangePassword")]
        public ActionResult ChangePassword(RequestChangeUserPasswordDto dto)
        {
            try
            { 
                var result = _editUserService.ChangePassword(dto);
                if (result.IsSuccess == true)
                {
                   
                    return Json(result);
                }
                else
                    return StatusCode(409, Json(new ErrorDto
                    {
                        IsSuccess = false,
                        Message = result.Message,
                        Service = "User",
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
                        Service = "User",
                        ResponseCode = 500,
                    }
                });
            }
        }




        /// <summary>
        /// دریافت لیست کاربران
        /// </summary>
        /// <response code="200">Success</response>
        /// <response code="403">Not Authorized - Value Content:</response>
        /// <response code="500">Server Error - Value Content:</response>
        [ProducesResponseType(typeof(ResultGetUserDto), 200)]
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
                //if (Request.Headers["selfUserId"].Count() > 0)
                //{
                //    tokenDto.SelfUserId = Request.Headers["selfUserId"];
                //}
                //if (tokenDto.Token == null)
                //    tokenDto.Token = "";
                //if (_getTokenService.GetToken(new RequestCheckTokenDto
                //{
                //    SelfUserId = Convert.ToInt64(tokenDto.SelfUserId),
                //    Token = tokenDto.Token
                //}).Rows == 0)
                //{
                //    return StatusCode(403, Json(new ErrorDto { IsSuccess = false, Message = "توکن نامعتبر است", ResponseCode = 403, Service = "User" }));
                //}
                var result = _getUserService.GetAll();
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
                        Service = "User",
                        ResponseCode = 500,
                    }
                });
            }
        }

        /// <summary>
        /// دریافت لیست کاربران بر اساس UserId
        /// </summary>
        /// <response code="200">Success</response>
        /// <response code="403">Not Authorized - Value Content:</response>
        /// <response code="500">Server Error - Value Content:</response>
        [ProducesResponseType(typeof(ResultGetUserDto), 200)]
        [ProducesResponseType(typeof(ErrorDto), 403)]
        [ProducesResponseType(typeof(ErrorDto), 500)]
        [HttpPost]
        [Route("GetById")]
        public ActionResult GetById(RequestGetUserByIdDto dto)
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
                //if (tokenDto.Token == null)
                //    tokenDto.Token = "";

                //if (tokenDto.SelfUserId == null)
                //    tokenDto.SelfUserId = "";

                //if (_getTokenService.GetToken(new RequestCheckTokenDto
                //{
                //    SelfUserId = Convert.ToInt64(tokenDto.SelfUserId),
                //    Token = tokenDto.Token
                //}).Rows == 0)
                //{
                //    return StatusCode(403, Json(new ErrorDto { IsSuccess = false, Message = "توکن نامعتبر است", ResponseCode = 403, Service = "User" }));
                //}

                var result = _getUserService.GetById(dto);

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
                        Service = "User",
                        ResponseCode = 500,
                    }
                });
            }
        }




        /// <summary>
        /// دریافت لیست کاربران بر اساس Kind
        /// </summary>
        /// <response code="200">Success</response>
        /// <response code="403">Not Authorized - Value Content:</response>
        /// <response code="500">Server Error - Value Content:</response>
        [ProducesResponseType(typeof(ResultGetUserDto), 200)]
        [ProducesResponseType(typeof(ErrorDto), 403)]
        [ProducesResponseType(typeof(ErrorDto), 500)]
        [HttpPost]
        [Route("GetByKind")]
        public ActionResult GetByKind(RequestGetUserByKindDto dto)
        {
            try
            {
                var result = _getUserService.GetByKind(dto);

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
                        Service = "User",
                        ResponseCode = 500,
                    }
                });
            }
        }





        /// <summary>
        /// لاگین به سیستم
        /// </summary>
        /// <response code="200">Success</response>
        /// <response code="403">Not Authorized - Value Content:</response>
        /// <response code="500">Server Error - Value Content:</response>
        [ProducesResponseType(typeof(ResultDto), 200)]
        [ProducesResponseType(typeof(ErrorDto), 403)]
        [ProducesResponseType(typeof(ErrorDto), 500)]
        [HttpPost]
        [Route("GetByMobilePassword")]
        public ActionResult GetByMobilePassword(RequestGetUserByMobilePasswordDto dto)
        {
            try
            {

                Int32 minutes = Convert.ToInt32(_configuration["AppSettings:TokenMinutes"]);
                var result = _getUserService.GetByMobilePassword(dto);



                if (result.IsSuccess == false) return Json(result);

                var res = _addUserTokenService.Execute(new RequestAddUserTokenDto
                {
                    UserId = result.Data.UserId,
                    ExpireDate = DateTime.Now.AddMinutes(minutes),
                });

                var outputResult = new
                {
                    IsSuccess = res.IsSuccess,
                    Message = res.Message,
                    User = result.Data,
                    Token = res.Data
                };

                return Json(outputResult);
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
                        Service = "User",
                        ResponseCode = 500,
                    }
                });
            }
        }




        /// <summary>
        /// لاگین به سیستم
        /// </summary>
        /// <response code="200">Success</response>
        /// <response code="403">Not Authorized - Value Content:</response>
        /// <response code="500">Server Error - Value Content:</response>
        [ProducesResponseType(typeof(ResultDto), 200)]
        [ProducesResponseType(typeof(ErrorDto), 403)]
        [ProducesResponseType(typeof(ErrorDto), 500)]
        [HttpPost]
        [Route("GetByMobilePasswordAdmin")]
        public ActionResult GetByMobilePasswordAdmin(RequestGetUserByMobilePasswordDto dto)
        {
            try
            {

                Int32 minutes = Convert.ToInt32(_configuration["AppSettings:TokenMinutes"]);
                var result = _getUserService.GetByMobilePasswordAdmin(dto);



                if (result.IsSuccess == false) return Json(result);

                var res = _addUserTokenService.Execute(new RequestAddUserTokenDto
                {
                    UserId = result.Data.UserId,
                    ExpireDate = DateTime.Now.AddMinutes(minutes),
                });

                var outputResult = new
                {
                    IsSuccess = res.IsSuccess,
                    Message = res.Message,
                    User = result.Data,
                    Token = res.Data
                };

                return Json(outputResult);
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
                        Service = "User",
                        ResponseCode = 500,
                    }
                });
            }
        }



        /// <summary>
        /// براساس نام و kind
        /// </summary>
        /// <response code="200">Success</response>
        /// <response code="403">Not Authorized - Value Content:</response>
        /// <response code="500">Server Error - Value Content:</response>
        [ProducesResponseType(typeof(ResultDto), 200)]
        [ProducesResponseType(typeof(ErrorDto), 403)]
        [ProducesResponseType(typeof(ErrorDto), 500)]
        [HttpPost]
        [Route("GetByNameTeacher")]
        public ActionResult GetByNameTeacher(RequestGetUserByNameDto dto)
        {
            try
            {
                var result = _getUserService.GetByFullNameTeacher(dto);

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
                        Service = "User",
                        ResponseCode = 500,
                    }
                });
            }
        }

    }
}