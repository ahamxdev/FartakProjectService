using System.Diagnostics;
using Application.Services.ProjectTeams.Commands.AddProjectTeams;
using Application.Services.ProjectTeams.Commands.EditProjectTeams;
using Application.Services.ProjectTeams.Commands.RemoveProjectTeams;
using Application.Services.ProjectTeams.Queries.GetProjectTeams;
using Application.Services.UserToken.Queries.GetUserToken;
using Common.Dto;
using Microsoft.AspNetCore.Mvc;

namespace FartakProjectService.Controllers
{
    /// <summary>
    /// این سرویس ، سرویس اعضای تیم  ها می باشد.
    /// •	تمامی رویدادهای موجود در این سرویس قبل از اجرا به سرویس user مراجعه و چک می کنند آیا درخواست توسط کاربر معتبر ارسال شده یا خیر
    /// </summary>
    [ApiController]
    [Route("api/ProjectTeams")]
    public class ProjectTeamController : Controller
    {
        private readonly IAddProjectTeamService _addProjectTeamService;
        private readonly IEditProjectTeamService _editProjectTeamService;
        private readonly IRemoveProjectTeamService _removeProjectTeamService;
        private readonly IGetProjectTeamService _getProjectTeamService;
        private readonly IGetUserTokenService _getUserTokenService;
        /// <summary>
        /// سازنده کنترلر
        /// </summary>
        public ProjectTeamController(IAddProjectTeamService addProjectTeamService,
                              IGetProjectTeamService getProjectTeamService,
                              IEditProjectTeamService editProjectTeamService,
                              IRemoveProjectTeamService removeProjectTeamService,
                              IGetUserTokenService getUserTokenService)
        {
            _addProjectTeamService = addProjectTeamService;
            _getProjectTeamService = getProjectTeamService;
            _editProjectTeamService = editProjectTeamService;
            _removeProjectTeamService = removeProjectTeamService;
            _getUserTokenService = getUserTokenService;
        }

        /// <summary>
        /// اضاف کردن اعضای تیم  ها
        /// </summary>
        /// <response code="200">Success</response>
        /// <response code="409">Not Success - Value Content:</response>
        /// <response code="500">Server Error - Value Content:</response>
        [ProducesResponseType(typeof(ResultDto), 200)]
        [ProducesResponseType(typeof(ErrorDto), 409)]
        [ProducesResponseType(typeof(ErrorDto), 500)]
        [HttpPost]
        [Route("Add")]
        public ActionResult Add(RequestAddProjectTeamDto dto)
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
                var result = _addProjectTeamService.Execute(dto);
                if (result.IsSuccess == true)
                    return Json(result);
                else
                    return StatusCode(409, new
                    {
                        value = new ErrorDto
                        {
                            IsSuccess = false,
                            Message = result.Message,
                            Service = "ProjectTeam",
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
                        Service = "ProjectTeam",
                        ResponseCode = 500,
                    }
                });
            }
        }



        /// <summary>
        /// ویرایش کردن اعضای تیم  ها
        /// </summary>
        /// <response code="200">Success</response>
        /// <response code="409">Not Success - Value Content:</response>
        /// <response code="500">Server Error - Value Content:</response>
        [ProducesResponseType(typeof(ResultDto), 200)]
        [ProducesResponseType(typeof(ErrorDto), 409)]
        [ProducesResponseType(typeof(ErrorDto), 500)]
        [HttpPost]
        [Route("Edit")]
        public ActionResult Edit(RequestEditProjectTeamDto dto)
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
                var result = _editProjectTeamService.Execute(dto);
                if (result.IsSuccess == true)
                    return Json(result);
                else
                    return StatusCode(409, new
                    {
                        value = new ErrorDto
                        {
                            IsSuccess = false,
                            Message = result.Message,
                            Service = "ProjectTeam",
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
                        Service = "ProjectTeam",
                        ResponseCode = 500,
                    }
                });
            }
        }



        /// <summary>
        /// حذف کردن اعضای تیم  ها
        /// </summary>
        /// <response code="200">Success</response>
        /// <response code="409">Not Success - Value Content:</response>
        /// <response code="500">Server Error - Value Content:</response>
        [ProducesResponseType(typeof(ResultDto), 200)]
        [ProducesResponseType(typeof(ErrorDto), 409)]
        [ProducesResponseType(typeof(ErrorDto), 500)]
        [HttpDelete]
        [Route("Delete")]
        public ActionResult Delete(RequestRemoveProjectTeamDto dto)
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
                var result = _removeProjectTeamService.Execute(dto);
                if (result.IsSuccess == true)
                    return Json(result);
                else
                    return StatusCode(409, new
                    {
                        value = new ErrorDto
                        {
                            IsSuccess = false,
                            Message = result.Message,
                            Service = "ProjectTeam",
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
                        Service = "ProjectTeam",
                        ResponseCode = 500,
                    }
                });
            }
        }


        /// <summary>
        /// اعضای تیم  ها بر اساس ای دی 
        /// </summary>
        /// <response code="200">Success</response>
        /// <response code="409">Not Success - Value Content:</response>
        /// <response code="500">Server Error - Value Content:</response>
        [ProducesResponseType(typeof(ResultGetProjectTeamDto), 200)]
        [ProducesResponseType(typeof(ErrorDto), 409)]
        [ProducesResponseType(typeof(ErrorDto), 500)]
        [HttpPost]
        [Route("GetById")]
        public ActionResult GetById(RequestGetProjectTeamByIdDto dto)
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
                var result = _getProjectTeamService.GetById(dto);
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
                        Service = "ProjectTeam",
                        ResponseCode = 500,
                    }
                });
            }
        }




        /// <summary>
        /// اعضای تیم  ها بر اساس ProjectTypeId 
        /// </summary>
        /// <response code="200">Success</response>
        /// <response code="409">Not Success - Value Content:</response>
        /// <response code="500">Server Error - Value Content:</response>
        [ProducesResponseType(typeof(ResultGetProjectTeamDto), 200)]
        [ProducesResponseType(typeof(ErrorDto), 409)]
        [ProducesResponseType(typeof(ErrorDto), 500)]
        [HttpPost]
        [Route("GetByProjectTypeId")]
        public ActionResult GetByProjectTypeId(RequestGetProjectTeamByProjectTypeIdDto dto)
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
                var result = _getProjectTeamService.GetByProjectTypeId(dto);
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
                        Service = "ProjectTeam",
                        ResponseCode = 500,
                    }
                });
            }
        }



        /// <summary>
        /// اعضای تیم 
        /// </summary>
        /// <response code="200">Success</response>
        /// <response code="409">Not Success - Value Content:</response>
        /// <response code="500">Server Error - Value Content:</response>
        [ProducesResponseType(typeof(ResultGetProjectTeamDto), 200)]
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
                var result = _getProjectTeamService.GetAll();
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
                        Service = "ProjectTeam",
                        ResponseCode = 500,
                    }
                });
            }
        }
    }
}
