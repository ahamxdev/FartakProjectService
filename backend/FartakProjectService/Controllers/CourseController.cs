using System.ComponentModel.DataAnnotations;
using System.Diagnostics;
using Application.Services.Courses.Commands.AddCourses;
using Application.Services.Courses.Commands.EditCourses;
using Application.Services.Courses.Commands.RemoveCourses;
using Application.Services.Courses.Queries.GetCourses;
using Application.Services.CourseUsers.Commands.AddCourseUsers;
using Application.Services.TeacherUsers.Queries.GetTeacherUsers;
using Application.Services.Users.Commands.AddUsers;
using Application.Services.Users.Queries.GetUsers;
using Application.Services.UserToken.Queries.GetUserToken;
using Common.Dto;
using Microsoft.AspNetCore.Mvc;

namespace FartakProjectService.Controllers
{
    /// <summary>
    /// این سرویس ، سرویس دورهاست می باشد.
    /// •	تمامی رویدادهای موجود در این سرویس قبل از اجرا به سرویس Course مراجعه و چک می کنند آیا درخواست توسط دوره معتبر ارسال شده یا خیر
    /// </summary>
    [ApiController]
    [Route("api/Courses")]
    public class CourseController : Controller
    {
        private readonly IAddCourseService _addCourseService;

        private readonly IEditCourseService _editCourseService;
        private readonly IRemoveCourseService _removeCourseService;
        private readonly IGetCourseService _getCourseService;
        private readonly IGetCourseUserService _getCourseUserService;
        private readonly IGetTeacherUserService _getTeacherUserService;
        private readonly IGetUserService _getUserService;
        private readonly IConfiguration _configuration;
        private readonly IGetUserTokenService _getUserTokenService;
        /// <summary>
        /// سازنده کنترلر
        /// </summary>
        public CourseController(IAddCourseService addCourseService,
                              IEditCourseService editCourseService,
                              IRemoveCourseService removeCourseService,
                              IGetCourseService getCourseService,
                              IGetUserService getUserService,
                              IGetTeacherUserService getTeacherUserService,
                              IConfiguration configuration,
                              IGetCourseUserService getCourseUserService,
                              IGetUserTokenService getUserTokenService)
        {
            _addCourseService = addCourseService;
            _editCourseService = editCourseService;
            _removeCourseService = removeCourseService;
            _getCourseService = getCourseService;
            _configuration = configuration;
            _getUserService = getUserService;
            _getTeacherUserService = getTeacherUserService;
            _getUserTokenService = getUserTokenService;
            _getCourseUserService = getCourseUserService;
        }
        /// <summary>
        /// اضافه کردن یک دوره جدید
        /// </summary>
        /// <response code="200">Success</response>
        /// <response code="400">Validation Error</response>
        /// <response code="409">Not Success - Value Content:</response>
        /// <response code="500">Server Error - Value Content:</response>
        [ProducesResponseType(typeof(ResultDto<ResultAddCourseDto>), 200)]
        [ProducesResponseType(typeof(ValidationResult), 400)]
        [ProducesResponseType(typeof(ErrorDto), 409)]
        [ProducesResponseType(typeof(ErrorDto), 500)]
        [HttpPost]
        [Route("Add")]

        public ActionResult Add([FromForm] RequestAddCourseDto dto)
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

                var user = _getUserService.GetById(new RequestGetUserByIdDto
                {
                    UserId=tokenDto.SelfUserId,
                });

                if (user.Users[0].Kind != 2 && user.Users[0].Kind != 0) {

                    return StatusCode(409, Json(new ErrorDto
                    {
                        IsSuccess = false,
                        ResponseCode = 409,
                        Message = "دسترسی لازم را ندارید",
                        Service = "User",
                    }));

                }

                if (user.Users[0].Kind == 2 )
                {

                    var teacherUser = _getTeacherUserService.GetByUserId(new RequestGetTeacherUserByUserIdDto
                    {
                        UserId = tokenDto.SelfUserId,
                    });

                    if (teacherUser.TeacherUsers[0].AllowUploadCourse == 0) {

                        return StatusCode(409, Json(new ErrorDto
                        {
                            IsSuccess = false,
                            ResponseCode = 409,
                            Message = "دسترسی لازم را ندارید",
                            Service = "User",
                        }));

                    }


                

                }


                var Course = _addCourseService.Execute(dto);
                return Json(Course);
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
                        Service = "Course",
                        ResponseCode = 500,
                    }
                });
            }

        }

        /// <summary>
        /// حذف دوره
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
        public ActionResult Delete(RequestRemoveCourseDto dto)
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

                var user = _getUserService.GetById(new RequestGetUserByIdDto
                {
                    UserId = tokenDto.SelfUserId,
                });

                if (user.Users[0].Kind != 2 && user.Users[0].Kind != 0)
                {

                    return StatusCode(409, Json(new ErrorDto
                    {
                        IsSuccess = false,
                        ResponseCode = 409,
                        Message = "دسترسی لازم را ندارید",
                        Service = "User",
                    }));

                }

                if (user.Users[0].Kind == 2)
                {

                    var teacherUser = _getTeacherUserService.GetByUserId(new RequestGetTeacherUserByUserIdDto
                    {
                        UserId = tokenDto.SelfUserId,
                    });

                    if (teacherUser.TeacherUsers[0].AllowUploadCourse == 0)
                    {

                        return StatusCode(409, Json(new ErrorDto
                        {
                            IsSuccess = false,
                            ResponseCode = 409,
                            Message = "دسترسی لازم را ندارید",
                            Service = "User",
                        }));

                    }




                }

                var result = _removeCourseService.Execute(dto);
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
                        Service = "Course",
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
                        Service = "Course",
                        ResponseCode = 500,
                    }
                });
            }
        }




        /// <summary>
        /// ویرایش دوره
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
        public ActionResult Edit([FromForm] RequestEditCourseDto dto)
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

                var user = _getUserService.GetById(new RequestGetUserByIdDto
                {
                    UserId = tokenDto.SelfUserId,
                });

                if (user.Users[0].Kind != 2 && user.Users[0].Kind != 0)
                {

                    return StatusCode(409, Json(new ErrorDto
                    {
                        IsSuccess = false,
                        ResponseCode = 409,
                        Message = "دسترسی لازم را ندارید",
                        Service = "User",
                    }));

                }

                if (user.Users[0].Kind == 2)
                {

                    var teacherUser = _getTeacherUserService.GetByUserId(new RequestGetTeacherUserByUserIdDto
                    {
                        UserId = tokenDto.SelfUserId,
                    });

                    if (teacherUser.TeacherUsers[0].AllowUploadCourse == 0)
                    {

                        return StatusCode(409, Json(new ErrorDto
                        {
                            IsSuccess = false,
                            ResponseCode = 409,
                            Message = "دسترسی لازم را ندارید",
                            Service = "User",
                        }));

                    }




                }

                var result = _editCourseService.Execute(dto);
                if (result.IsSuccess == true)
                    return Json(result);
                else
                    return StatusCode(409, Json(new ErrorDto
                    {
                        IsSuccess = false,
                        Message = result.Message,
                        Service = "Course",
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
                        Service = "Course",
                        ResponseCode = 500,
                    }
                });
            }
        }



        /// <summary>
        /// ویرایش دوره Status
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
        [Route("ChangeStatus")]
        public ActionResult ChangeStatus(RequestEditCourseStatusDto dto)
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
                var result = _editCourseService.ExecuteStatus(dto);
                if (result.IsSuccess == true)
                    return Json(result);
                else
                    return StatusCode(409, Json(new ErrorDto
                    {
                        IsSuccess = false,
                        Message = result.Message,
                        Service = "Course",
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
                        Service = "Course",
                        ResponseCode = 500,
                    }
                });
            }
        }


        /// <summary>
        /// دریافت لیست دورهان
        /// </summary>
        /// <response code="200">Success</response>
        /// <response code="403">Not Authorized - Value Content:</response>
        /// <response code="500">Server Error - Value Content:</response>
        [ProducesResponseType(typeof(ResultGetCourseDto), 200)]
        [ProducesResponseType(typeof(ErrorDto), 403)]
        [ProducesResponseType(typeof(ErrorDto), 500)]
        [HttpPost]
        [Route("GetAll")]
        public ActionResult GetAll()
        {
            try
            {

                var result = _getCourseService.GetAll();
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
                        Service = "Course",
                        ResponseCode = 500,
                    }
                });
            }
        }




        /// <summary>
        /// دریافت لیست دورهان Active
        /// </summary>
        /// <response code="200">Success</response>
        /// <response code="403">Not Authorized - Value Content:</response>
        /// <response code="500">Server Error - Value Content:</response>
        [ProducesResponseType(typeof(ResultGetCourseDto), 200)]
        [ProducesResponseType(typeof(ErrorDto), 403)]
        [ProducesResponseType(typeof(ErrorDto), 500)]
        [HttpPost]
        [Route("GetAllAccept")]
        public ActionResult GetAllAccept()
        {
            try
            {

                var result = _getCourseService.GetAllAccept();
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
                        Service = "Course",
                        ResponseCode = 500,
                    }
                });
            }
        }



        /// <summary>
        /// دریافت لیست دورهان Reject
        /// </summary>
        /// <response code="200">Success</response>
        /// <response code="403">Not Authorized - Value Content:</response>
        /// <response code="500">Server Error - Value Content:</response>
        [ProducesResponseType(typeof(ResultGetCourseDto), 200)]
        [ProducesResponseType(typeof(ErrorDto), 403)]
        [ProducesResponseType(typeof(ErrorDto), 500)]
        [HttpPost]
        [Route("GetAllReject")]
        public ActionResult GetAllReject()
        {
            try
            {

                var result = _getCourseService.GetAllReject();
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
                        Service = "Course",
                        ResponseCode = 500,
                    }
                });
            }
        }





        /// <summary>
        /// دریافت لیست دورهان Reject
        /// </summary>
        /// <response code="200">Success</response>
        /// <response code="403">Not Authorized - Value Content:</response>
        /// <response code="500">Server Error - Value Content:</response>
        [ProducesResponseType(typeof(ResultGetCourseDto), 200)]
        [ProducesResponseType(typeof(ErrorDto), 403)]
        [ProducesResponseType(typeof(ErrorDto), 500)]
        [HttpPost]
        [Route("GetAllWaiting")]
        public ActionResult GetAllWaiting()
        {
            try
            {

                var result = _getCourseService.GetAllWaiting();
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
                        Service = "Course",
                        ResponseCode = 500,
                    }
                });
            }
        }



        /// <summary>
        /// دریافت لیست دورهان بر اساس CourseTypeId
        /// </summary>
        /// <response code="200">Success</response>
        /// <response code="403">Not Authorized - Value Content:</response>
        /// <response code="500">Server Error - Value Content:</response>
        [ProducesResponseType(typeof(ResultGetCourseDto), 200)]
        [ProducesResponseType(typeof(ErrorDto), 403)]
        [ProducesResponseType(typeof(ErrorDto), 500)]
        [HttpPost]
        [Route("GetByCourseTypeId")]
        public ActionResult GetByCourseTypeId(RequestGetCourseByCourseTypeIdDto dto)
        {
            try
            {


                var result = _getCourseService.GetByCourseTypeId(dto);

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
                        Service = "Course",
                        ResponseCode = 500,
                    }
                });
            }
        }



        /// <summary>
        /// دریافت لیست دورهان بر اساس CourseId
        /// </summary>
        /// <response code="200">Success</response>
        /// <response code="403">Not Authorized - Value Content:</response>
        /// <response code="500">Server Error - Value Content:</response>
        [ProducesResponseType(typeof(ResultGetCourseDto), 200)]
        [ProducesResponseType(typeof(ErrorDto), 403)]
        [ProducesResponseType(typeof(ErrorDto), 500)]
        [HttpPost]
        [Route("GetById")]
        public ActionResult GetById(RequestGetCourseByIdDto dto)
        {
            try
            {


                var result = _getCourseService.GetById(dto);

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
                        Service = "Course",
                        ResponseCode = 500,
                    }
                });
            }
        }



        /// <summary>
        /// دریافت لیست دورهان بر اساس CourseId
        /// </summary>
        /// <response code="200">Success</response>
        /// <response code="403">Not Authorized - Value Content:</response>
        /// <response code="500">Server Error - Value Content:</response>
        [ProducesResponseType(typeof(ResultGetCourseDto), 200)]
        [ProducesResponseType(typeof(ErrorDto), 403)]
        [ProducesResponseType(typeof(ErrorDto), 500)]
        [HttpPost]
        [Route("GetByTeacherId")]
        public ActionResult GetByTeacherId(RequestGetCourseByTeacherIdDto dto)
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

                var result = _getCourseService.GetByTeacherId(dto);

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
                        Service = "Course",
                        ResponseCode = 500,
                    }
                });
            }
        }




        /// <summary>
        /// دریافت لیست دورهان بر اساس GetByUserId
        /// </summary>
        /// <response code="200">Success</response>
        /// <response code="403">Not Authorized - Value Content:</response>
        /// <response code="500">Server Error - Value Content:</response>
        [ProducesResponseType(typeof(ResultGetCourseDto), 200)]
        [ProducesResponseType(typeof(ErrorDto), 403)]
        [ProducesResponseType(typeof(ErrorDto), 500)]
        [HttpPost]
        [Route("GetByUserId")]
        public ActionResult GetByUserId(RequestGetCourseByUserIdDto dto)
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
                var courseUsers = _getCourseUserService.GetByUserId(new RequestGetByUserIdDto { UserId = dto.UserId });

                var courseIds = new List<long>();

                if (courseUsers.Rows > 0)
                {

                    foreach (var courseUser in courseUsers.CourseUsers)
                    {
                        courseIds.Add(courseUser.CouserId);
                    }
                }
                else
                {
                    courseIds.Add(0);
                }

                var result = _getCourseService.GetByUserId(new RequestGetCourseByIdListDto { CourseIds = courseIds });

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
                        Service = "Course",
                        ResponseCode = 500,
                    }
                });
            }
        }

    }
}