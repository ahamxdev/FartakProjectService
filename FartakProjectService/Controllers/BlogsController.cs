using System.ComponentModel.DataAnnotations;
using System.Diagnostics;
using Application.Services.BlogContents.Commands.AddBlogContent;
using Application.Services.BlogContents.Commands.RemoveBlogContent;
using Application.Services.Blogs.Commands.AddBlog;
using Application.Services.Blogs.Commands.EditBlog;
using Application.Services.Blogs.Commands.RemoveBlog;
using Application.Services.Blogs.Queries.GetBlog;
using Common.Dto;
using Common.Services.UserService.Token.Queries.GetToken;
using Microsoft.AspNetCore.Mvc;

namespace Blogs.Controllers
{
    /// <summary>
    /// این سرویس بلاگ است.
    /// •	تمامی رویدادهای موجود در این سرویس قبل از اجرا به سرویس Writer مراجعه و چک می کنند آیا درخواست توسط کاربر معتبر ارسال شده یا خیر
    /// </summary>
    [ApiController]
    [Route("api/Blogs")]
    public class BlogsController : Controller
    {
        private readonly IGetTokenService _getTokenService;
        private readonly IAddBlogService _addBlogService;
        private readonly IAddBlogContentService _addBlogContentService;
        private readonly IEditBlogService _editBlogService;
        private readonly IRemoveBlogService _removeBlogService;
        private readonly IRemoveBlogContentService _removeBlogContentService;
        private readonly IGetBlogService _getBlogService;


        /// <summary>
        /// سازنده کنترلر
        /// </summary>
        public BlogsController(IAddBlogService addBlogService,
                                  IEditBlogService editBlogService,
                                  IGetTokenService getTokenService,
                                  IGetBlogService getBlogService,
                                  IRemoveBlogService removeBlogService,
                                  IAddBlogContentService addBlogContentService,
                                  IRemoveBlogContentService removeBlogContentService
                                  )
        {
            _addBlogService = addBlogService;
            _editBlogService = editBlogService;
            _removeBlogService = removeBlogService;
            _getBlogService = getBlogService;
            _getTokenService = getTokenService;
            _addBlogContentService = addBlogContentService;
            _removeBlogContentService = removeBlogContentService;

        }


        /// <summary>
        /// اضافه کردن یک بلاگ
        /// </summary>
        /// <response code="200">Success</response>
        /// <response code="400">Validation Error</response>
        /// <response code="403">Not Authorized - Value Content:</response>
        /// <response code="409">Not Success - Value Content:</response>
        /// <response code="500">Server Error - Value Content:</response>
        [ProducesResponseType(typeof(ResultDto<ResultAddBlogDto>), 200)]
        [ProducesResponseType(typeof(ValidationResult), 400)]
        [ProducesResponseType(typeof(ResultDto), 403)]
        [ProducesResponseType(typeof(ResultDto), 409)]
        [ProducesResponseType(typeof(ResultDto), 500)]
        [HttpPost]
        [Route("Add")]
        public ActionResult Add([FromForm] RequestUploadAddBlogDto dto)
        {

            try
            {

                var result = _addBlogService.Execute(dto);
                if (result.IsSuccess == true)
                {


                    int indexContent = 0;

                    foreach (var blogContent in dto.BlogContents)
                    {
                        blogContent.BlogId = result.Data.BlogId;


                        var form = Request.Form;

                        // دسترسی به فایل‌ها
                        var files = form.Files;

                        // دسترسی به سایر مقادیر
                        var blogContents = form["BlogContents['" + indexContent + "'][fileImage]"];
                        // بررسی و پردازش فایل
                        if (files.Count > 0)
                        {
                            var file = files[indexContent];
                            blogContent.FileImage = file;
                            // ذخیره فایل یا پردازش دیگر
                        }

                        var resultContent = _addBlogContentService.Execute(blogContent);
                        if (!resultContent.IsSuccess)
                        {
                            return StatusCode(409, Json(new ErrorDto
                            {
                                IsSuccess = false,
                                ResponseCode = 409,
                                Message = resultContent.Message,
                                Service = "Content",
                            }));
                        }

                        indexContent++;
                    }


                    return Json(result);
                }

                else
                    return StatusCode(409, Json(new ErrorDto
                    {
                        IsSuccess = false,
                        ResponseCode = 409,
                        Message = result.Message,
                        Service = "Blog",
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
                        Service = "Blog",
                        ResponseCode = 500,
                    }
                });
            }
        }



        /// <summary>
        /// ویرایش یک بلاگ
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
        public ActionResult Edit([FromForm] RequestEditBlogDto dto)
        {

            try
            {


                var result = _editBlogService.Execute(dto);
                if (result.IsSuccess == true)
                {
                    int indexContent = 0;

                    _removeBlogContentService.DeleteByBlogId(new RequestRemoveBlogContentByBlogIdDto { BlogId = dto.BlogId });

                    foreach (var blogContent in dto.BlogContents)
                    {
                        blogContent.BlogId = dto.BlogId;


                        var form = Request.Form;

                        // دسترسی به فایل‌ها
                        var files = form.Files;

                        // دسترسی به سایر مقادیر
                        var blogContents = form["BlogContents['" + indexContent + "'][fileImage]"];
                        // بررسی و پردازش فایل
                        if (files.Count > 0)
                        {
                            var file = files[indexContent];
                            blogContent.FileImage = file;
                            // ذخیره فایل یا پردازش دیگر
                        }
                        else
                        {

                            return StatusCode(409, Json(new ErrorDto
                            {
                                IsSuccess = false,
                                ResponseCode = 409,
                                Message = "محتوا اجباری است",
                                Service = "Content",
                            }));

                        }

                        var resultContent = _addBlogContentService.Execute(blogContent);
                        if (!resultContent.IsSuccess)
                        {
                            return StatusCode(409, Json(new ErrorDto
                            {
                                IsSuccess = false,
                                ResponseCode = 409,
                                Message = resultContent.Message,
                                Service = "Content",
                            }));
                        }

                        indexContent++;
                    }



                    return Json(result);
                }

                else
                    return StatusCode(409, Json(new ErrorDto
                    {
                        IsSuccess = false,
                        ResponseCode = 409,
                        Message = result.Message,
                        Service = "Blog",
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
                        Service = "Blog",
                        ResponseCode = 500,
                    }
                });
            }
        }


        /// <summary>
        /// حذف فیزیکی یک بلاگ
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
        public ActionResult Delete(RequestRemoveBlogDto dto)
        {
            try
            {


                var result = _removeBlogService.Delete(dto);
                if (result.IsSuccess == true)
                {

                    _removeBlogContentService.DeleteByBlogId(new RequestRemoveBlogContentByBlogIdDto
                    {
                        BlogId = dto.BlogId
                    });

                    return Json(result);
                }

                else
                    return StatusCode(409, Json(new ErrorDto
                    {
                        IsSuccess = false,
                        ResponseCode = 409,
                        Message = result.Message,
                        Service = "Blog",
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
                        Service = "Blog",
                        ResponseCode = 500,
                    }
                });
            }

        }



        /// <summary>
        /// دریافت تمامی بلاگ ها
        /// </summary>
        /// <response code="200">Success</response>
        /// <response code="403">Not Authorized - Value Content:</response>
        /// <response code="500">Server Error - Value Content:</response>
        [ProducesResponseType(typeof(ResultGetBlogDto), 200)]
        [ProducesResponseType(typeof(ResultDto), 403)]
        [ProducesResponseType(typeof(ResultDto), 500)]
        [HttpPost]
        [Route("GetAll")]
        public ActionResult GetAll()
        {

            try
            {
                var result = _getBlogService.GetAll();
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
                        Service = "Blog",
                        ResponseCode = 500,
                    }
                });
            }
        }



        /// <summary>
        /// دریافت تمامی بلاگ ها بر اساس BlogId
        /// </summary>
        /// <response code="200">Success</response>
        /// <response code="403">Not Authorized - Value Content:</response>
        /// <response code="500">Server Error - Value Content:</response>
        [ProducesResponseType(typeof(ResultGetBlogDto), 200)]
        [ProducesResponseType(typeof(ResultDto), 403)]
        [ProducesResponseType(typeof(ResultDto), 500)]
        [HttpPost]
        [Route("GetById")]
        public ActionResult GetById(RequestGetBlogByIdDto dto)
        {

            try
            {
                var result = _getBlogService.GetById(dto);
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
                        Service = "Blog",
                        ResponseCode = 500,
                    }
                });
            }
        }


    }
}
