using System.ComponentModel.DataAnnotations;
using System.Diagnostics;
using Application.Services.ProjectCategories.Commands.AddProjectCategories;
using Application.Services.ProjectCategories.Commands.EditProjectCategories;
using Application.Services.ProjectCategories.Commands.RemoveProjectCategories;
using Application.Services.ProjectCategories.Queries.GetProjectCategories;
using Application.Services.UserToken.Queries.GetUserToken;
using Common.Dto;
using Microsoft.AspNetCore.Mvc;

namespace FartakProjectService.Controllers
{
    /// <summary>
    /// این سرویس ، سرویس عنوان دسته بندی می باشد.
    /// •	تمامی رویدادهای موجود در این سرویس قبل از اجرا به سرویس ProjectCategory مراجعه و چک می کنند آیا درخواست توسط عنوان دسته بندی معتبر ارسال شده یا خیر
    /// </summary>
    [ApiController]
    [Route("api/ProjectCategories")]
    public class ProjectCategoryController : Controller
    {
        private readonly IAddProjectCategoryService _addProjectCategoryService;

        private readonly IEditProjectCategoryService _editProjectCategoryService;
        private readonly IRemoveProjectCategoryService _removeProjectCategoryService;
        private readonly IGetProjectCategoryService _getProjectCategoryService;
        private readonly IConfiguration _configuration;
        private readonly IGetUserTokenService _getUserTokenService;
        /// <summary>
        /// سازنده کنترلر
        /// </summary>
        public ProjectCategoryController(IAddProjectCategoryService addProjectCategoryService,
                              IEditProjectCategoryService editProjectCategoryService,
                              IRemoveProjectCategoryService removeProjectCategoryService,
                              IGetProjectCategoryService getProjectCategoryService,
                              IConfiguration configuration,
                              IGetUserTokenService getUserTokenService)
        {
            _addProjectCategoryService = addProjectCategoryService;
            _editProjectCategoryService = editProjectCategoryService;
            _removeProjectCategoryService = removeProjectCategoryService;
            _getProjectCategoryService = getProjectCategoryService;
            _configuration = configuration;
            _getUserTokenService = getUserTokenService;
        }
        /// <summary>
        /// اضافه کردن یک عنوان دسته بندی جدید
        /// </summary>
        /// <response code="200">Success</response>
        /// <response code="400">Validation Error</response>
        /// <response code="409">Not Success - Value Content:</response>
        /// <response code="500">Server Error - Value Content:</response>
        [ProducesResponseType(typeof(ResultDto<ResultAddProjectCategoryDto>), 200)]
        [ProducesResponseType(typeof(ValidationResult), 400)]
        [ProducesResponseType(typeof(ErrorDto), 409)]
        [ProducesResponseType(typeof(ErrorDto), 500)]
        [HttpPost]
        [Route("Add")]

        public ActionResult Add(RequestAddProjectCategoryDto dto)
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
                var ProjectCategory = _addProjectCategoryService.Execute(dto);
                return Json(ProjectCategory);
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
                        Service = "ProjectCategory",
                        ResponseCode = 500,
                    }
                });
            }

        }

        /// <summary>
        /// حذف عنوان دسته بندی
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
        public ActionResult Delete(RequestRemoveProjectCategoryDto dto)
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
                var result = _removeProjectCategoryService.Execute(dto);
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
                        Service = "ProjectCategory",
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
                        Service = "ProjectCategory",
                        ResponseCode = 500,
                    }
                });
            }
        }




        /// <summary>
        /// ویرایش عنوان دسته بندی
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
        public ActionResult Edit(RequestEditProjectCategoryDto dto)
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
                var result = _editProjectCategoryService.Execute(dto);
                if (result.IsSuccess == true)
                    return Json(result);
                else
                    return StatusCode(409, Json(new ErrorDto
                    {
                        IsSuccess = false,
                        Message = result.Message,
                        Service = "ProjectCategory",
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
                        Service = "ProjectCategory",
                        ResponseCode = 500,
                    }
                });
            }
        }



        /// <summary>
        /// دریافت لیست عنوان دسته بندی
        /// </summary>
        /// <response code="200">Success</response>
        /// <response code="403">Not Authorized - Value Content:</response>
        /// <response code="500">Server Error - Value Content:</response>
        [ProducesResponseType(typeof(ResultGetProjectCategoryDto), 200)]
        [ProducesResponseType(typeof(ErrorDto), 403)]
        [ProducesResponseType(typeof(ErrorDto), 500)]
        [HttpPost]
        [Route("GetAll")]
        public ActionResult GetAll()
        {
            try
            {

                var result = _getProjectCategoryService.GetAll();
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
                        Service = "ProjectCategory",
                        ResponseCode = 500,
                    }
                });
            }
        }

        /// <summary>
        /// دریافت لیست عنوان دسته بندی بر اساس ProjectCategoryId
        /// </summary>
        /// <response code="200">Success</response>
        /// <response code="403">Not Authorized - Value Content:</response>
        /// <response code="500">Server Error - Value Content:</response>
        [ProducesResponseType(typeof(ResultGetProjectCategoryDto), 200)]
        [ProducesResponseType(typeof(ErrorDto), 403)]
        [ProducesResponseType(typeof(ErrorDto), 500)]
        [HttpPost]
        [Route("GetById")]
        public ActionResult GetById(RequestGetProjectCategoryByIdDto dto)
        {
            try
            {


                var result = _getProjectCategoryService.GetById(dto);

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
                        Service = "ProjectCategory",
                        ResponseCode = 500,
                    }
                });
            }
        }



    }
}