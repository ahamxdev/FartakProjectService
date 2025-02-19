using System.ComponentModel.DataAnnotations;
using System.Diagnostics;
using Application.Services.TeacherUserResumes.Commands.AddTeacherUserResumes;
using Application.Services.TeacherUserResumes.Commands.EditTeacherUserResumes;
using Application.Services.TeacherUserResumes.Commands.RemoveTeacherUserResumes;
using Application.Services.TeacherUserResumes.Queries.GetTeacherUserResumes;
using Common.Dto;
using Common.Services.UserService.Token.Queries.GetToken;
using Microsoft.AspNetCore.Mvc;

namespace FartakProjectService.Controllers
{
    /// <summary>
    /// این سرویس ، سرویس رزومه اساتید می باشد.
    /// •	تمامی رویدادهای موجود در این سرویس قبل از اجرا به سرویس TeacherUserResume مراجعه و چک می کنند آیا درخواست توسط استاد معتبر ارسال شده یا خیر
    /// </summary>
    [ApiController]
    [Route("api/TeacherUserResumes")]
    public class TeacherUserResumeController : Controller
    {
        private readonly IAddTeacherUserResumeService _addTeacherUserResumeService;

        private readonly IEditTeacherUserResumeService _editTeacherUserResumeService;
        private readonly IRemoveTeacherUserResumeService _removeTeacherUserResumeService;
        private readonly IGetTeacherUserResumeService _getTeacherUserResumeService;
        private readonly IConfiguration _configuration;
        private readonly IGetTokenService _getTokenService;
        /// <summary>
        /// سازنده کنترلر
        /// </summary>
        public TeacherUserResumeController(IAddTeacherUserResumeService addTeacherUserResumeService,
                              IEditTeacherUserResumeService editTeacherUserResumeService,
                              IRemoveTeacherUserResumeService removeTeacherUserResumeService,
                              IGetTeacherUserResumeService getTeacherUserResumeService,
                              IConfiguration configuration,
                              IGetTokenService getTokenService)
        {
            _addTeacherUserResumeService = addTeacherUserResumeService;
            _editTeacherUserResumeService = editTeacherUserResumeService;
            _removeTeacherUserResumeService = removeTeacherUserResumeService;
            _getTeacherUserResumeService = getTeacherUserResumeService;
            _configuration = configuration;
            _getTokenService = getTokenService;
        }
        /// <summary>
        /// اضافه کردن یک استاد جدید
        /// </summary>
        /// <response code="200">Success</response>
        /// <response code="400">Validation Error</response>
        /// <response code="409">Not Success - Value Content:</response>
        /// <response code="500">Server Error - Value Content:</response>
        [ProducesResponseType(typeof(ResultDto<ResultAddTeacherUserResumeDto>), 200)]
        [ProducesResponseType(typeof(ValidationResult), 400)]
        [ProducesResponseType(typeof(ErrorDto), 409)]
        [ProducesResponseType(typeof(ErrorDto), 500)]
        [HttpPost]
        [Route("Add")]

        public ActionResult Add( RequestAddTeacherUserResumeDto dto)
        {
            try
            {
                var TeacherUserResume = _addTeacherUserResumeService.Execute(dto);
                return Json(TeacherUserResume);
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
                        Service = "TeacherUserResume",
                        ResponseCode = 500,
                    }
                });
            }

        }

        /// <summary>
        /// حذف استاد
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
        public ActionResult Delete(RequestRemoveTeacherUserResumeDto dto)
        {
            try
            {

                var result = _removeTeacherUserResumeService.Execute(dto);
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
                        Service = "TeacherUserResume",
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
                        Service = "TeacherUserResume",
                        ResponseCode = 500,
                    }
                });
            }
        }




        /// <summary>
        /// ویرایش استاد
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
        public ActionResult Edit( RequestEditTeacherUserResumeDto dto)
        {
            try
            {

                var result = _editTeacherUserResumeService.Execute(dto);
                if (result.IsSuccess == true)
                    return Json(result);
                else
                    return StatusCode(409, Json(new ErrorDto
                    {
                        IsSuccess = false,
                        Message = result.Message,
                        Service = "TeacherUserResume",
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
                        Service = "TeacherUserResume",
                        ResponseCode = 500,
                    }
                });
            }
        }





        /// <summary>
        /// دریافت لیست رزومه اساتید
        /// </summary>
        /// <response code="200">Success</response>
        /// <response code="403">Not Authorized - Value Content:</response>
        /// <response code="500">Server Error - Value Content:</response>
        [ProducesResponseType(typeof(ResultGetTeacherUserResumeDto), 200)]
        [ProducesResponseType(typeof(ErrorDto), 403)]
        [ProducesResponseType(typeof(ErrorDto), 500)]
        [HttpPost]
        [Route("GetAll")]
        public ActionResult GetAll()
        {
            try
            {

                var result = _getTeacherUserResumeService.GetAll();
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
                        Service = "TeacherUserResume",
                        ResponseCode = 500,
                    }
                });
            }
        }




        /// <summary>
        /// دریافت لیست رزومه اساتید بر اساس TeacherUserResumeId
        /// </summary>
        /// <response code="200">Success</response>
        /// <response code="403">Not Authorized - Value Content:</response>
        /// <response code="500">Server Error - Value Content:</response>
        [ProducesResponseType(typeof(ResultGetTeacherUserResumeDto), 200)]
        [ProducesResponseType(typeof(ErrorDto), 403)]
        [ProducesResponseType(typeof(ErrorDto), 500)]
        [HttpPost]
        [Route("GetById")]
        public ActionResult GetById(RequestGetTeacherUserResumeByIdDto dto)
        {
            try
            {


                var result = _getTeacherUserResumeService.GetById(dto);

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
                        Service = "TeacherUserResume",
                        ResponseCode = 500,
                    }
                });
            }
        }



        /// <summary>
        /// دریافت لیست رزومه اساتید بر اساس TeacherUserId
        /// </summary>
        /// <response code="200">Success</response>
        /// <response code="403">Not Authorized - Value Content:</response>
        /// <response code="500">Server Error - Value Content:</response>
        [ProducesResponseType(typeof(ResultGetTeacherUserResumeDto), 200)]
        [ProducesResponseType(typeof(ErrorDto), 403)]
        [ProducesResponseType(typeof(ErrorDto), 500)]
        [HttpPost]
        [Route("GetByTeacherUserId")]
        public ActionResult GetByTeacherUserId(RequestGetTeacherUserResumeByTeacherUserIdDto dto)
        {
            try
            {


                var result = _getTeacherUserResumeService.GetByTeacherUserId(dto);

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
                        Service = "TeacherUserResume",
                        ResponseCode = 500,
                    }
                });
            }
        }



    }
}