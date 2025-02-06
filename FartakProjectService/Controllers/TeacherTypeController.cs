using System.ComponentModel.DataAnnotations;
using System.Diagnostics;
using Application.Services.TeacherTypes.Commands.AddTeacherTypes;
using Application.Services.TeacherTypes.Commands.EditTeacherTypes;
using Application.Services.TeacherTypes.Commands.RemoveTeacherTypes;
using Application.Services.TeacherTypes.Queries.GetTeacherTypes;
using Common.Dto;
using Common.Services.UserService.Token.Queries.GetToken;
using Microsoft.AspNetCore.Mvc;

namespace FartakTeacherTypeService.Controllers
{
    /// <summary>
    /// این سرویس ، سرویس نوع تدریس می باشد.
    /// •	تمامی رویدادهای موجود در این سرویس قبل از اجرا به سرویس TeacherType مراجعه و چک می کنند آیا درخواست توسط کاربر معتبر ارسال شده یا خیر
    /// </summary>
    [ApiController]
    [Route("api/TeacherTypes")]
    public class TeacherTypeController : Controller
    {
        private readonly IAddTeacherTypeService _addTeacherTypeService;


        private readonly IRemoveTeacherTypeService _removeTeacherTypeService;
        private readonly IGetTeacherTypeService _getTeacherTypeService;
        private readonly IEditTeacherTypeService _editTeacherTypeService;
        private readonly IConfiguration _configuration;
        private readonly IGetTokenService _getTokenService;
        /// <summary>
        /// سازنده کنترلر
        /// </summary>
        public TeacherTypeController(IAddTeacherTypeService addTeacherTypeService,
                              IRemoveTeacherTypeService removeTeacherTypeService,
                              IGetTeacherTypeService getTeacherTypeService,
                              IEditTeacherTypeService editTeacherTypeService,
                              IConfiguration configuration,
                              IGetTokenService getTokenService)
        {
            _addTeacherTypeService = addTeacherTypeService;
            _removeTeacherTypeService = removeTeacherTypeService;
            _getTeacherTypeService = getTeacherTypeService;
            _editTeacherTypeService = editTeacherTypeService;
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
        [ProducesResponseType(typeof(ResultDto<ResultAddTeacherTypesDto>), 200)]
        [ProducesResponseType(typeof(ValidationResult), 400)]
        [ProducesResponseType(typeof(ErrorDto), 409)]
        [ProducesResponseType(typeof(ErrorDto), 500)]
        [HttpPost]
        [Route("Add")]

        public ActionResult Add(RequestAddTeacherTypesDto dto)
        {
            try
            {
                var TeacherType = _addTeacherTypeService.Execute(dto);
                return Json(TeacherType);
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
                        Service = "TeacherType",
                        ResponseCode = 500,
                    }
                });
            }

        }







        /// <summary>
        /// ویرایش کردن یک کاربر جدید
        /// </summary>
        /// <response code="200">Success</response>
        /// <response code="400">Validation Error</response>
        /// <response code="409">Not Success - Value Content:</response>
        /// <response code="500">Server Error - Value Content:</response>
        [ProducesResponseType(typeof(ResultDto<ResultAddTeacherTypesDto>), 200)]
        [ProducesResponseType(typeof(ValidationResult), 400)]
        [ProducesResponseType(typeof(ErrorDto), 409)]
        [ProducesResponseType(typeof(ErrorDto), 500)]
        [HttpPut]
        [Route("Edit")]

        public ActionResult Edit(RequestEditTeacherTypesDto dto)
        {
            try
            {
                var TeacherType = _editTeacherTypeService.Execute(dto);
                return Json(TeacherType);
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
                        Service = "TeacherType",
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
        public ActionResult Delete(RequestRemoveTeacherTypesDto dto)
        {
            try
            {

                var result = _removeTeacherTypeService.Execute(dto);
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
                        Service = "TeacherType",
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
                        Service = "TeacherType",
                        ResponseCode = 500,
                    }
                });
            }
        }





        /// <summary>
        /// دریافت لیست نوع تدریس
        /// </summary>
        /// <response code="200">Success</response>
        /// <response code="403">Not Authorized - Value Content:</response>
        /// <response code="500">Server Error - Value Content:</response>
        [ProducesResponseType(typeof(ResultGetTeacherTypesDto), 200)]
        [ProducesResponseType(typeof(ErrorDto), 403)]
        [ProducesResponseType(typeof(ErrorDto), 500)]
        [HttpPost]
        [Route("GetAll")]
        public ActionResult GetAll()
        {
            try
            {

                var result = _getTeacherTypeService.GetAll();
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
                        Service = "TeacherType",
                        ResponseCode = 500,
                    }
                });
            }
        }






        /// <summary>
        /// دریافت لیست نوع تدریس
        /// </summary>
        /// <response code="200">Success</response>
        /// <response code="403">Not Authorized - Value Content:</response>
        /// <response code="500">Server Error - Value Content:</response>
        [ProducesResponseType(typeof(ResultGetTeacherTypesDto), 200)]
        [ProducesResponseType(typeof(ErrorDto), 403)]
        [ProducesResponseType(typeof(ErrorDto), 500)]
        [HttpPost]
        [Route("GetById")]
        public ActionResult GetById(RequestGetTeacherTypesByIdDto dto)
        {
            try
            {

                var result = _getTeacherTypeService.GetById(dto);
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
                        Service = "TeacherType",
                        ResponseCode = 500,
                    }
                });
            }
        }

    }
}