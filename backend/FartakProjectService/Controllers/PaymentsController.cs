using System.ComponentModel.DataAnnotations;
using System.Diagnostics;
using Application.Services.Payments.Commands.AddPayments;
using Application.Services.Payments.Commands.EditPayments;
using Application.Services.Payments.Commands.RemovePayments;
using Application.Services.Payments.Queries.GetPayments;
using Application.Services.UserToken.Queries.GetUserToken;
using Common.Dto;
using Microsoft.AspNetCore.Mvc;

namespace Payments.Controllers
{
    /// <summary>
    /// این سرویس خرید است.
    /// •	تمامی رویدادهای موجود در این سرویس قبل از اجرا به سرویس user مراجعه و چک می کنند آیا درخواست توسط کاربر معتبر ارسال شده یا خیر
    /// </summary>
    [ApiController]
    [Route("api/Payments")]
    public class PaymentsController : Controller
    {
        private readonly IGetUserTokenService _getUserTokenService;
        private readonly IAddPaymentService _addPaymentService;
        private readonly IEditPaymentService _editPaymentService;
        private readonly IRemovePaymentService _removePaymentService;
        private readonly IGetPaymentService _getPaymentService;




        /// <summary>
        /// سازنده کنترلر
        /// </summary>
        public PaymentsController(IAddPaymentService addPaymentService,
                                  IEditPaymentService editPaymentService,
                                  IGetUserTokenService getUserTokenService,
                                  IGetPaymentService getPaymentService,
                                  IRemovePaymentService removePaymentService)
        {
            _addPaymentService = addPaymentService;
            _editPaymentService = editPaymentService;
            _removePaymentService = removePaymentService;
            _getPaymentService = getPaymentService;
            _getUserTokenService = getUserTokenService;

        }


        /// <summary>
        /// اضافه کردن یک خرید جدید
        /// </summary>
        /// <response code="200">Success</response>
        /// <response code="400">Validation Error</response>
        /// <response code="403">Not Authorized - Value Content:</response>
        /// <response code="409">Not Success - Value Content:</response>
        /// <response code="500">Server Error - Value Content:</response>
        [ProducesResponseType(typeof(ResultDto<ResultAddPaymentDto>), 200)]
        [ProducesResponseType(typeof(ValidationResult), 400)]
        [ProducesResponseType(typeof(ResultDto), 403)]
        [ProducesResponseType(typeof(ResultDto), 409)]
        [ProducesResponseType(typeof(ResultDto), 500)]
        [HttpPost]
        [Route("Add")]
        public ActionResult Add(RequestAddPaymentDto dto)
        {

            try
            {

                var tokenDto = new RequestCheckTokenDto { Token="",SelfUserId=0 };
                if (Request.Headers["token"].Count() > 0)
                {
                    tokenDto.Token = Request.Headers["token"];
                }
                if (Request.Headers["userId"].Count() > 0)
                {
                    tokenDto.SelfUserId = long.Parse(Request.Headers["userId"]);
                }
                if (tokenDto.Token == null || tokenDto.SelfUserId==0)
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

                var result = _addPaymentService.Execute(dto);


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
                        Service = "Payment",
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
                        Service = "Payment",
                        ResponseCode = 500,
                    }
                });
            }
        }

        /// <summary>
        /// ویرایش یک خرید
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
        public ActionResult Edit(RequestEditPaymentDto dto)
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

                var result = _editPaymentService.Execute(dto);
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
                        Service = "Payment",
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
                        Service = "Payment",
                        ResponseCode = 500,
                    }
                });
            }
        }




        /// <summary>
        /// ویرایش وضیعت یک خرید
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
        [Route("EditPurchaseState")]
        public ActionResult EditPurchaseState(RequestEditPaymentPurchaseStateDto dto)
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
                var result = _editPaymentService.ExecutePurchaseState(dto);
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
                        Service = "Payment",
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
                        Service = "Payment",
                        ResponseCode = 500,
                    }
                });
            }
        }




        /// <summary>
        /// حذف فیزیکی یک خرید
        /// اگر بر روی خرید پرداختی باشد ، امکان حذف وجود ندارد
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
        public ActionResult Delete(RequestRemovePaymentDto dto)
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

                var result = _removePaymentService.Delete(dto);
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
                        Service = "Payment",
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
                        Service = "Payment",
                        ResponseCode = 500,
                    }
                });
            }

        }



        /// <summary>
        /// دریافت تمامی خرید ها
        /// </summary>
        /// <response code="200">Success</response>
        /// <response code="403">Not Authorized - Value Content:</response>
        /// <response code="500">Server Error - Value Content:</response>
        [ProducesResponseType(typeof(ResultGetPaymentDto), 200)]
        [ProducesResponseType(typeof(ResultDto), 403)]
        [ProducesResponseType(typeof(ResultDto), 500)]
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
                var result = _getPaymentService.GetAll();
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
                        Service = "Payment",
                        ResponseCode = 500,
                    }
                });
            }
        }





        /// <summary>
        /// دریافت اطلاعات یک خرید بر اساس PaymentId
        /// </summary>
        /// <response code="200">Success</response>
        /// <response code="403">Not Authorized - Value Content:</response>
        /// <response code="500">Server Error - Value Content:</response>
        [ProducesResponseType(typeof(ResultGetPaymentDto), 200)]
        [ProducesResponseType(typeof(ResultDto), 403)]
        [ProducesResponseType(typeof(ResultDto), 500)]
        [HttpPost]
        [Route("GetById")]
        public ActionResult GetById(RequestGetPaymentByIdDto dto)
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
                var result = _getPaymentService.GetById(dto);
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
                        Service = "Payment",
                        ResponseCode = 500,
                    }
                });
            }
        }



        /// <summary>
        /// دریافت اطلاعات یک خرید بر اساس UserId
        /// </summary>
        /// <response code="200">Success</response>
        /// <response code="403">Not Authorized - Value Content:</response>
        /// <response code="500">Server Error - Value Content:</response>
        [ProducesResponseType(typeof(ResultGetPaymentDto), 200)]
        [ProducesResponseType(typeof(ResultDto), 403)]
        [ProducesResponseType(typeof(ResultDto), 500)]
        [HttpPost]
        [Route("GetByUserId")]
        public ActionResult GetByUserId(RequestGetPaymentByUserIdDto dto)
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
                var result = _getPaymentService.GetByUserId(dto);
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
                        Service = "Payment",
                        ResponseCode = 500,
                    }
                });
            }
        }



        /// <summary>
        /// دریافت اطلاعات یک خرید بر اساس OrderId
        /// </summary>
        /// <response code="200">Success</response>
        /// <response code="403">Not Authorized - Value Content:</response>
        /// <response code="500">Server Error - Value Content:</response>
        [ProducesResponseType(typeof(ResultGetPaymentDto), 200)]
        [ProducesResponseType(typeof(ResultDto), 403)]
        [ProducesResponseType(typeof(ResultDto), 500)]
        [HttpPost]
        [Route("GetByOrderId")]
        public ActionResult GetByOrderId(RequestGetPaymentByOrderIdDto dto)
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
                var result = _getPaymentService.GetByOrderId(dto);
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
                        Service = "Payment",
                        ResponseCode = 500,
                    }
                });
            }
        }


    }
}
