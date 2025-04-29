using System.Diagnostics;
using Application.Services.CourseUsers.Commands.AddCourseUsers;
using Application.Services.UserToken.Queries.GetUserToken;
using Common.Dto;
using Microsoft.AspNetCore.Mvc;

namespace FartakProjectService.Controllers
{
    /// <summary>
    /// این سرویس ، سرویس یوزرهای دوره ها می باشد.
    /// •	تمامی رویدادهای موجود در این سرویس قبل از اجرا به سرویس user مراجعه و چک می کنند آیا درخواست توسط کاربر معتبر ارسال شده یا خیر
    /// </summary>
    [ApiController]
    [Route("api/CourseUsers")]
    public class CourseUserController : Controller
    {
        private readonly IAddCourseUserService _AddCourseUserService;
        private readonly IRemoveCourseUserService _removeCourseUserService;
        private readonly IGetCourseUserService _getCourseUserService;
        private readonly IGetUserTokenService _getUserTokenService;
        /// <summary>
        /// سازنده کنترلر
        /// </summary>
        public CourseUserController(IAddCourseUserService AddCourseUserService,
                              IGetCourseUserService getCourseUserService,
                              IRemoveCourseUserService removeCourseUserService,
                              IGetUserTokenService getUserTokenService)
        {
            _AddCourseUserService = AddCourseUserService;
            _getCourseUserService = getCourseUserService;
            _removeCourseUserService = removeCourseUserService;
            _getUserTokenService = getUserTokenService;
        }

        /// <summary>
        /// اضاف کردن یوزرهای دوره ها
        /// </summary>
        /// <response code="200">Success</response>
        /// <response code="409">Not Success - Value Content:</response>
        /// <response code="500">Server Error - Value Content:</response>
        [ProducesResponseType(typeof(ResultDto), 200)]
        [ProducesResponseType(typeof(ErrorDto), 409)]
        [ProducesResponseType(typeof(ErrorDto), 500)]
        [HttpPost]
        [Route("Add")]
        public ActionResult Add(RequestAddCourseUserDto dto)
        {
            try
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
                    return StatusCode(403, Json(new ErrorDto { IsSuccess = false, Message = "توکن نامعتبر است", ResponseCode = 403, Service = "User" }));
                }
                var result = _AddCourseUserService.Execute(dto);
                if (result.IsSuccess == true)
                    return Json(result);
                else
                    return StatusCode(409, new
                    {
                        value = new ErrorDto
                        {
                            IsSuccess = false,
                            Message = result.Message,
                            Service = "CourseUser",
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
                        Service = "CourseUser",
                        ResponseCode = 500,
                    }
                });
            }
        }


        /// <summary>
        /// حذف کردن یوزرهای دوره ها
        /// </summary>
        /// <response code="200">Success</response>
        /// <response code="409">Not Success - Value Content:</response>
        /// <response code="500">Server Error - Value Content:</response>
        [ProducesResponseType(typeof(ResultDto), 200)]
        [ProducesResponseType(typeof(ErrorDto), 409)]
        [ProducesResponseType(typeof(ErrorDto), 500)]
        [HttpDelete]
        [Route("Delete")]
        public ActionResult Delete(RequestRemoveCourseUserDto dto)
        {
            try
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
                    return StatusCode(403, Json(new ErrorDto { IsSuccess = false, Message = "توکن نامعتبر است", ResponseCode = 403, Service = "User" }));
                }
                var result = _removeCourseUserService.Execute(dto);
                if (result.IsSuccess == true)
                    return Json(result);
                else
                    return StatusCode(409, new
                    {
                        value = new ErrorDto
                        {
                            IsSuccess = false,
                            Message = result.Message,
                            Service = "CourseUser",
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
                        Service = "CourseUser",
                        ResponseCode = 500,
                    }
                });
            }
        }



        /// <summary>
        /// یوزرهای دوره ها بر اساس ای دی کاربر 
        /// </summary>
        /// <response code="200">Success</response>
        /// <response code="409">Not Success - Value Content:</response>
        /// <response code="500">Server Error - Value Content:</response>
        [ProducesResponseType(typeof(ResultGetCourseUserDto), 200)]
        [ProducesResponseType(typeof(ErrorDto), 409)]
        [ProducesResponseType(typeof(ErrorDto), 500)]
        [HttpPost]
        [Route("GetByUserId")]
        public ActionResult GetByUserId(RequestGetByUserIdDto dto)
        {
            try
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
                    return StatusCode(403, Json(new ErrorDto { IsSuccess = false, Message = "توکن نامعتبر است", ResponseCode = 403, Service = "User" }));
                }
                var result = _getCourseUserService.GetByUserId(dto);
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
                        Service = "CourseUser",
                        ResponseCode = 500,
                    }
                });
            }
        }



        /// <summary>
        /// یوزرهای دوره ها بر اساس ای دی دوره
        /// </summary>
        /// <response code="200">Success</response>
        /// <response code="409">Not Success - Value Content:</response>
        /// <response code="500">Server Error - Value Content:</response>
        [ProducesResponseType(typeof(ResultGetCourseUserDto), 200)]
        [ProducesResponseType(typeof(ErrorDto), 409)]
        [ProducesResponseType(typeof(ErrorDto), 500)]
        [HttpPost]
        [Route("GetByCourseId")]
        public ActionResult GetByCourseId(RequestGetCourseByCourseIdDto dto)
        {
            try
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
                    return StatusCode(403, Json(new ErrorDto { IsSuccess = false, Message = "توکن نامعتبر است", ResponseCode = 403, Service = "User" }));
                }
                var result = _getCourseUserService.GetByCourseId(dto);
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
                        Service = "CourseUser",
                        ResponseCode = 500,
                    }
                });
            }
        }



        /// <summary>
        /// یوزرهای دوره
        /// </summary>
        /// <response code="200">Success</response>
        /// <response code="409">Not Success - Value Content:</response>
        /// <response code="500">Server Error - Value Content:</response>
        [ProducesResponseType(typeof(ResultGetCourseUserDto), 200)]
        [ProducesResponseType(typeof(ErrorDto), 409)]
        [ProducesResponseType(typeof(ErrorDto), 500)]
        [HttpPost]
        [Route("GetAll")]
        public ActionResult GetAll()
        {
            try
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
                    return StatusCode(403, Json(new ErrorDto { IsSuccess = false, Message = "توکن نامعتبر است", ResponseCode = 403, Service = "User" }));
                }
                var result = _getCourseUserService.GetAll();
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
                        Service = "CourseUser",
                        ResponseCode = 500,
                    }
                });
            }
        }
    }
}
