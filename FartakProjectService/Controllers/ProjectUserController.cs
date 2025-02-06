using System.ComponentModel.DataAnnotations;
using System.Diagnostics;
using Application.Services.ProjectUsers.Commands.AddProjectUsers;
using Application.Services.ProjectUsers.Commands.RemoveProjectUsers;
using Application.Services.ProjectUsers.Queries.GetProjectUsers;
using Common.Dto;
using Common.Services.UserService.Token.Queries.GetToken;
using Microsoft.AspNetCore.Mvc;

namespace FartakProjectUserService.Controllers
{
    /// <summary>
    /// این سرویس ، سرویس کاربر-پروژه می باشد.
    /// •	تمامی رویدادهای موجود در این سرویس قبل از اجرا به سرویس ProjectUser مراجعه و چک می کنند آیا درخواست توسط کاربر معتبر ارسال شده یا خیر
    /// </summary>
    [ApiController]
    [Route("api/ProjectUsers")]
    public class ProjectUserController : Controller
    {
        private readonly IAddProjectUserService _addProjectUserService;


        private readonly IRemoveProjectUserService _removeProjectUserService;
        private readonly IGetProjectUserService _getProjectUserService;
        private readonly IConfiguration _configuration;
        private readonly IGetTokenService _getTokenService;
        /// <summary>
        /// سازنده کنترلر
        /// </summary>
        public ProjectUserController(IAddProjectUserService addProjectUserService,
                              IRemoveProjectUserService removeProjectUserService,
                              IGetProjectUserService getProjectUserService,
                              IConfiguration configuration,
                              IGetTokenService getTokenService)
        {
            _addProjectUserService = addProjectUserService;
            _removeProjectUserService = removeProjectUserService;
            _getProjectUserService = getProjectUserService;
            _configuration = configuration;
            _getTokenService = getTokenService;
        }
        /// <summary>
        /// اضافه کردن یک کاربر جدید
        /// </summary>
        /// <response code="200">Success</response>
        /// <response code="400">Validation Error</response>
        /// <response code="409">Not Success - Value Content:</response>
        /// <response code="500">Server Error - Value Content:</response>
        [ProducesResponseType(typeof(ResultDto<ResultAddProjectUserDto>), 200)]
        [ProducesResponseType(typeof(ValidationResult), 400)]
        [ProducesResponseType(typeof(ErrorDto), 409)]
        [ProducesResponseType(typeof(ErrorDto), 500)]
        [HttpPost]
        [Route("Add")]

        public ActionResult Add(RequestAddProjectUserDto dto)
        {
            try
            {
                var ProjectUser = _addProjectUserService.Execute(dto);
                return Json(ProjectUser);
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
                        Service = "ProjectUser",
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
        public ActionResult Delete(RequestRemoveProjectUserDto dto)
        {
            try
            {

                var result = _removeProjectUserService.Execute(dto);
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
                        Service = "ProjectUser",
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
                        Service = "ProjectUser",
                        ResponseCode = 500,
                    }
                });
            }
        }





        /// <summary>
        /// دریافت لیست کاربر-پروژه
        /// </summary>
        /// <response code="200">Success</response>
        /// <response code="403">Not Authorized - Value Content:</response>
        /// <response code="500">Server Error - Value Content:</response>
        [ProducesResponseType(typeof(ResultGetProjectUserDto), 200)]
        [ProducesResponseType(typeof(ErrorDto), 403)]
        [ProducesResponseType(typeof(ErrorDto), 500)]
        [HttpPost]
        [Route("GetAll")]
        public ActionResult GetAll()
        {
            try
            {

                var result = _getProjectUserService.GetAll();
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
                        Service = "ProjectUser",
                        ResponseCode = 500,
                    }
                });
            }
        }




        /// <summary>
        /// دریافت لیست کاربر-پروژه
        /// </summary>
        /// <response code="200">Success</response>
        /// <response code="403">Not Authorized - Value Content:</response>
        /// <response code="500">Server Error - Value Content:</response>
        [ProducesResponseType(typeof(ResultGetProjectUserDto), 200)]
        [ProducesResponseType(typeof(ErrorDto), 403)]
        [ProducesResponseType(typeof(ErrorDto), 500)]
        [HttpPost]
        [Route("GetByProjectId")]
        public ActionResult GetByProjectId(RequestGetProjectUserByProjectIdDto dto)
        {
            try
            {

                var result = _getProjectUserService.GetByProjectId(dto);
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
                        Service = "ProjectUser",
                        ResponseCode = 500,
                    }
                });
            }
        }



        /// <summary>
        /// دریافت لیست کاربر-پروژه
        /// </summary>
        /// <response code="200">Success</response>
        /// <response code="403">Not Authorized - Value Content:</response>
        /// <response code="500">Server Error - Value Content:</response>
        [ProducesResponseType(typeof(ResultGetProjectUserDto), 200)]
        [ProducesResponseType(typeof(ErrorDto), 403)]
        [ProducesResponseType(typeof(ErrorDto), 500)]
        [HttpPost]
        [Route("GetByUserId")]
        public ActionResult GetByUserId(RequestGetProjectUserByUserIdDto dto)
        {
            try
            {

                var result = _getProjectUserService.GetByUserId(dto);
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
                        Service = "ProjectUser",
                        ResponseCode = 500,
                    }
                });
            }
        }

    }
}