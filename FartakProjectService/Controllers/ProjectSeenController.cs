using System.ComponentModel.DataAnnotations;
using System.Diagnostics;
using Application.Services.ProjectSeens.Commands.AddProjectSeens;
using Application.Services.ProjectSeens.Commands.RemoveProjectSeens;
using Application.Services.ProjectSeens.Queries.GetProjectSeens;
using Common.Dto;
using Common.Services.UserService.Token.Queries.GetToken;
using Microsoft.AspNetCore.Mvc;

namespace FartakProjectSeenService.Controllers
{
    /// <summary>
    /// این سرویس ، سرویس بازدید پروژه می باشد.
    /// •	تمامی رویدادهای موجود در این سرویس قبل از اجرا به سرویس ProjectSeen مراجعه و چک می کنند آیا درخواست توسط کاربر معتبر ارسال شده یا خیر
    /// </summary>
    [ApiController]
    [Route("api/ProjectSeens")]
    public class ProjectSeenController : Controller
    {
        private readonly IAddProjectSeenService _addProjectSeenService;


        private readonly IRemoveProjectSeenService _removeProjectSeenService;
        private readonly IGetProjectSeenService _getProjectSeenService;
        private readonly IConfiguration _configuration;
        private readonly IGetTokenService _getTokenService;
        /// <summary>
        /// سازنده کنترلر
        /// </summary>
        public ProjectSeenController(IAddProjectSeenService addProjectSeenService,
                              IRemoveProjectSeenService removeProjectSeenService,
                              IGetProjectSeenService getProjectSeenService,
                              IConfiguration configuration,
                              IGetTokenService getTokenService)
        {
            _addProjectSeenService = addProjectSeenService;
            _removeProjectSeenService = removeProjectSeenService;
            _getProjectSeenService = getProjectSeenService;
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
        [ProducesResponseType(typeof(ResultDto<ResultAddProjectSeenDto>), 200)]
        [ProducesResponseType(typeof(ValidationResult), 400)]
        [ProducesResponseType(typeof(ErrorDto), 409)]
        [ProducesResponseType(typeof(ErrorDto), 500)]
        [HttpPost]
        [Route("Add")]

        public ActionResult Add(RequestAddProjectSeenDto dto)
        {
            try
            {
                var ProjectSeen = _addProjectSeenService.Execute(dto);
                return Json(ProjectSeen);
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
                        Service = "ProjectSeen",
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
        public ActionResult Delete(RequestRemoveProjectSeenDto dto)
        {
            try
            {

                var result = _removeProjectSeenService.Execute(dto);
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
                        Service = "ProjectSeen",
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
                        Service = "ProjectSeen",
                        ResponseCode = 500,
                    }
                });
            }
        }





        /// <summary>
        /// دریافت لیست بازدید پروژه
        /// </summary>
        /// <response code="200">Success</response>
        /// <response code="403">Not Authorized - Value Content:</response>
        /// <response code="500">Server Error - Value Content:</response>
        [ProducesResponseType(typeof(ResultGetProjectSeenDto), 200)]
        [ProducesResponseType(typeof(ErrorDto), 403)]
        [ProducesResponseType(typeof(ErrorDto), 500)]
        [HttpPost]
        [Route("GetAll")]
        public ActionResult GetAll()
        {
            try
            {

                var result = _getProjectSeenService.GetAll();
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
                        Service = "ProjectSeen",
                        ResponseCode = 500,
                    }
                });
            }
        }




        /// <summary>
        /// دریافت لیست بازدید پروژه
        /// </summary>
        /// <response code="200">Success</response>
        /// <response code="403">Not Authorized - Value Content:</response>
        /// <response code="500">Server Error - Value Content:</response>
        [ProducesResponseType(typeof(ResultGetProjectSeenDto), 200)]
        [ProducesResponseType(typeof(ErrorDto), 403)]
        [ProducesResponseType(typeof(ErrorDto), 500)]
        [HttpPost]
        [Route("GetByProjectId")]
        public ActionResult GetByProjectId(RequestGetProjectSeenByProjectIdDto dto)
        {
            try
            {

                var result = _getProjectSeenService.GetByProjectId(dto);
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
                        Service = "ProjectSeen",
                        ResponseCode = 500,
                    }
                });
            }
        }



        /// <summary>
        /// دریافت لیست بازدید پروژه
        /// </summary>
        /// <response code="200">Success</response>
        /// <response code="403">Not Authorized - Value Content:</response>
        /// <response code="500">Server Error - Value Content:</response>
        [ProducesResponseType(typeof(ResultGetProjectSeenDto), 200)]
        [ProducesResponseType(typeof(ErrorDto), 403)]
        [ProducesResponseType(typeof(ErrorDto), 500)]
        [HttpPost]
        [Route("GetById")]
        public ActionResult GetById(RequestGetProjectSeenByIdDto dto)
        {
            try
            {

                var result = _getProjectSeenService.GetById(dto);
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
                        Service = "ProjectSeen",
                        ResponseCode = 500,
                    }
                });
            }
        }

    }
}