using System.ComponentModel.DataAnnotations;
using System.Diagnostics;
using Application.Services.BlogContents.Commands.AddBlogContent;
using Application.Services.BlogContents.Commands.EditBlogContent;
using Application.Services.BlogContents.Commands.RemoveBlogContent;
using Application.Services.BlogContents.Queries.GetBlogContent;
using Common.Dto;
using Common.Services.UserService.Token.Queries.GetToken;
using Microsoft.AspNetCore.Mvc;

namespace BlogContents.Controllers
{
    /// <summary>
    /// این سرویس محتوای بلاگ است.
    /// •	تمامی رویدادهای موجود در این سرویس قبل از اجرا به سرویس Writer مراجعه و چک می کنند آیا درخواست توسط کاربر معتبر ارسال شده یا خیر
    /// </summary>
    [ApiController]
    [Route("api/BlogContents")]
    public class BlogContentsController : Controller
    {
        private readonly IGetTokenService _getTokenService;
        private readonly IAddBlogContentService _addBlogContentService;
        private readonly IEditBlogContentService _editBlogContentService;
        private readonly IRemoveBlogContentService _removeBlogContentService;
        private readonly IGetBlogContentService _getBlogContentService;

        /// <summary>
        /// سازنده کنترلر
        /// </summary>
        public BlogContentsController(IAddBlogContentService addBlogContentService,
                                  IEditBlogContentService editBlogContentService,
                                  IGetTokenService getTokenService, IGetBlogContentService getBlogContentService,
                                  IRemoveBlogContentService removeBlogContentService)
        {
            _addBlogContentService = addBlogContentService;
            _editBlogContentService = editBlogContentService;
            _removeBlogContentService = removeBlogContentService;
            _getBlogContentService = getBlogContentService;
            _getTokenService = getTokenService;

        }


        /// <summary>
        /// اضافه کردن یک محتوای بلاگ
        /// </summary>
        /// <response code="200">Success</response>
        /// <response code="400">Validation Error</response>
        /// <response code="403">Not Authorized - Value Content:</response>
        /// <response code="409">Not Success - Value Content:</response>
        /// <response code="500">Server Error - Value Content:</response>
        [ProducesResponseType(typeof(ResultDto<ResultAddBlogContentDto>), 200)]
        [ProducesResponseType(typeof(ValidationResult), 400)]
        [ProducesResponseType(typeof(ResultDto), 403)]
        [ProducesResponseType(typeof(ResultDto), 409)]
        [ProducesResponseType(typeof(ResultDto), 500)]
        [HttpPost]
        [Route("Add")]
        public ActionResult Add([FromForm] RequestUploadAddBlogContentDto dto)
        {

            try
            {
                var result = _addBlogContentService.Execute(dto);
                if (result.IsSuccess == true)
                {
                    return Json(result);
                }

                else
                    return StatusCode(409, Json(new ErrorDto
                    {
                        IsSuccess = false,
                        ResponseCode = 409,
                        Message = result.Message,
                        Service = "BlogContent",
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
                        Service = "BlogContent",
                        ResponseCode = 500,
                    }
                });
            }
        }



        /// <summary>
        /// ویرایش یک محتوای بلاگ
        /// </summary>
        /// <response code="200">Success</response>
        /// <response code="400">Validation Error</response>
        /// <response code="403">Not Authorized - Value Content:</response>
        /// <response code="409">Not Success - Value Content:</response>
        /// <response code="500">Server Error - Value Content:</response>
        [ProducesResponseType(typeof(ResultDto), 200)]
        [ProducesResponseType(typeof(ValidationResult), 400)]
        [ProducesResponseType(typeof(ResultDto), 403)]
        [ProducesResponseType(typeof(ResultDto), 409)]
        [ProducesResponseType(typeof(ResultDto), 500)]
        [HttpPut]
        [Route("Edit")]
        public ActionResult Edit([FromForm] RequestEditBlogContentDto dto)
        {

            try
            {

                var result = _editBlogContentService.Execute(dto);
                if (result.IsSuccess == true)
                {
                    return Json(result);
                }

                else
                    return StatusCode(409, Json(new ErrorDto
                    {
                        IsSuccess = false,
                        ResponseCode = 409,
                        Message = result.Message,
                        Service = "BlogContent",
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
                        Service = "BlogContent",
                        ResponseCode = 500,
                    }
                });
            }
        }



        /// <summary>
        /// حذف فیزیکی یک محتوای بلاگ
        /// </summary>
        /// <response code="200">Success</response>
        /// <response code="400">Validation Error</response>
        /// <response code="403">Not Authorized - Value Content:</response>
        /// <response code="409">Not Success - Value Content:</response>
        /// <response code="500">Server Error - Value Content:</response>
        [ProducesResponseType(typeof(ResultDto), 200)]
        [ProducesResponseType(typeof(ValidationResult), 400)]
        [ProducesResponseType(typeof(ResultDto), 403)]
        [ProducesResponseType(typeof(ResultDto), 409)]
        [ProducesResponseType(typeof(ResultDto), 500)]
        [HttpDelete]
        [Route("Delete")]
        public ActionResult Delete(RequestRemoveBlogContentDto dto)
        {
            try
            {

                var result = _removeBlogContentService.Delete(dto);
                if (result.IsSuccess == true)
                {
                    return Json(result);
                }

                else
                    return StatusCode(409, Json(new ErrorDto
                    {
                        IsSuccess = false,
                        ResponseCode = 409,
                        Message = result.Message,
                        Service = "BlogContent",
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
                        Service = "BlogContent",
                        ResponseCode = 500,
                    }
                });
            }

        }


        /// <summary>
        /// دریافت تمامی محتوای بلاگ ها بر اساس BlogId
        /// </summary>
        /// <response code="200">Success</response>
        /// <response code="403">Not Authorized - Value Content:</response>
        /// <response code="500">Server Error - Value Content:</response>
        [ProducesResponseType(typeof(ResultGetBlogContentDto), 200)]
        [ProducesResponseType(typeof(ResultDto), 403)]
        [ProducesResponseType(typeof(ResultDto), 500)]
        [HttpPost]
        [Route("GetByBlogId")]
        public ActionResult GetByBlogId(RequestGetBlogContentByBlogIdDto dto)
        {

            try
            {

                var result = _getBlogContentService.GetByBlogId(dto);
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
                        Service = "BlogContent",
                        ResponseCode = 500,
                    }
                });
            }
        }





        /// <summary>
        /// دریافت تمامی محتوای بلاگ ها بر اساس BlogContentId
        /// </summary>
        /// <response code="200">Success</response>
        /// <response code="403">Not Authorized - Value Content:</response>
        /// <response code="500">Server Error - Value Content:</response>
        [ProducesResponseType(typeof(ResultGetBlogContentDto), 200)]
        [ProducesResponseType(typeof(ResultDto), 403)]
        [ProducesResponseType(typeof(ResultDto), 500)]
        [HttpPost]
        [Route("GetById")]
        public ActionResult GetById(RequestGetBlogContentByIdDto dto)
        {

            try
            {

                var result = _getBlogContentService.GetById(dto);
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
                        Service = "BlogContent",
                        ResponseCode = 500,
                    }
                });
            }
        }

    }
}
