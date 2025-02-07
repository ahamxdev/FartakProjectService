using System.ComponentModel.DataAnnotations;
using System.Diagnostics;
using Application.Services.Payments.Commands.AddPayments;
using Application.Services.Payments.Commands.EditPayments;
using Application.Services.Payments.Queries.GetPayments;
using Application.Services.ZarinpalSettings.Commands.AddZarinpalSettings;
using Application.Services.ZarinpalSettings.Commands.EditZarinpalSettings;
using Application.Services.ZarinpalSettings.Commands.RemoveZarinpalSettings;
using Application.Services.ZarinpalSettings.Queries.GetZarinpalSettings;
using Common.Dto;
using Common.Services.UserService.Token.Queries.GetToken;
using Common.Services.ZarinpalService.Commands.AddZarinpals;
using Microsoft.AspNetCore.Mvc;

namespace Payments.Controllers
{
    /// <summary>
    /// این سرویس تنظیمات درگاه زرین پال است.
    /// •	تمامی رویدادهای موجود در این سرویس قبل از اجرا به سرویس user مراجعه و چک می کنند آیا درخواست توسط کاربر معتبر ارسال شده یا خیر
    /// </summary>

    [ApiController]
    [Route("api/Zarinpals")]
    public class ZarinpalsController : Controller
    {
        private readonly IGetTokenService _getTokenService;
        private readonly IAddZarinpalSettingService _addZarinpalSettingService;
        private readonly IAddPaymentService _addPaymentService;
        private readonly IEditZarinpalSettingService _editZarinpalSettingService;
        private readonly IRemoveZarinpalSettingService _removeZarinpalSettingService;
        private readonly IGetZarinpalSettingService _getZarinpalSettingService;
        private readonly IGetPaymentService _getPaymentSerivce;
        private readonly IEditPaymentService _editPaymentService;
        private readonly IAddZarinpalService _addZarinpalService;
        /// <summary>
        /// سازنده کنترلر
        /// </summary>
        public ZarinpalsController(IAddZarinpalSettingService addZarinpalSettingService,
                                  IEditZarinpalSettingService editZarinpalSettingService,
                                  IGetTokenService getTokenService,
                                  IAddPaymentService addPaymentService,
                                  IRemoveZarinpalSettingService removeZarinpalSettingService,
                                  IGetZarinpalSettingService getZarinpalSettingService,
                                  IEditPaymentService editPaymentService,
                                  IAddZarinpalService addZarinpalService,
                                  IGetPaymentService getPaymentSerivce)
        {
            _addZarinpalSettingService = addZarinpalSettingService;
            _editZarinpalSettingService = editZarinpalSettingService;
            _removeZarinpalSettingService = removeZarinpalSettingService;
            _getZarinpalSettingService = getZarinpalSettingService;
            _getTokenService = getTokenService;
            _addPaymentService = addPaymentService;
            _getPaymentSerivce = getPaymentSerivce;
            _editPaymentService = editPaymentService;
            _addZarinpalService = addZarinpalService;
        }


        /// <summary>
        /// اضافه کردن یک تنظیمات درگاه زرین پال جدید
        /// </summary>
        /// <response code="200">Success</response>
        /// <response code="400">Validation Error</response>
        /// <response code="403">Not Authorized - Value Content:</response>
        /// <response code="409">Not Success - Value Content:</response>
        /// <response code="500">Server Error - Value Content:</response>
        [ProducesResponseType(typeof(ResultDto<ResultAddZarinpalSettingDto>), 200)]
        [ProducesResponseType(typeof(ValidationResult), 400)]
        [ProducesResponseType(typeof(ResultDto), 403)]
        [ProducesResponseType(typeof(ResultDto), 409)]
        [ProducesResponseType(typeof(ResultDto), 500)]
        [HttpPost]
        [Route("AddSetting")]
        public ActionResult AddSetting(RequestAddZarinpalSettingDto dto)
        {

            try
            {

                var tokenDto = new RequestGetTokenDto { };
                if (Request.Headers["Authorization"].Count() > 0)
                {
                    tokenDto.Token = Request.Headers["Authorization"];
                }
                if (Request.Headers["selfUserId"].Count() > 0)
                {
                    tokenDto.SelfUserId = Request.Headers["selfUserId"];
                }
                if (tokenDto.Token == null || tokenDto.SelfUserId == null)
                {
                    return StatusCode(409, Json(new ErrorDto
                    {
                        IsSuccess = false,
                        ResponseCode = 409,
                        Message = "مقادیر توکن نامعتبر میباشد",
                        Service = "User",
                    }));
                }
                if (_getTokenService.GetValidateToken(tokenDto) == false)
                {
                    return StatusCode(403, Json(new ErrorDto { IsSuccess = false, Message = "توکن نامعتبر است", ResponseCode = 403, Service = "User" }));
                }
                var result = _addZarinpalSettingService.Execute(dto);
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
                        Service = "ZarinpalSetting",
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
                        Service = "Zarinpal",
                        ResponseCode = 500,
                    }
                });
            }
        }

        /// <summary>
        /// ویرایش یک تنظیمات درگاه زرین پال
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
        [Route("EditSetting")]
        public ActionResult EditSetting(RequestEditZarinpalSettingDto dto)
        {

            try
            {

                var tokenDto = new RequestGetTokenDto { };
                if (Request.Headers["Authorization"].Count() > 0)
                {
                    tokenDto.Token = Request.Headers["Authorization"];
                }
                if (Request.Headers["selfUserId"].Count() > 0)
                {
                    tokenDto.SelfUserId = Request.Headers["selfUserId"];
                }
                if (tokenDto.Token == null || tokenDto.SelfUserId == null)
                {
                    return StatusCode(409, Json(new ErrorDto
                    {
                        IsSuccess = false,
                        ResponseCode = 409,
                        Message = "مقادیر توکن نامعتبر میباشد",
                        Service = "User",
                    }));
                }
                if (_getTokenService.GetValidateToken(tokenDto) == false)
                {
                    return StatusCode(403, Json(new ErrorDto { IsSuccess = false, Message = "توکن نامعتبر است", ResponseCode = 403, Service = "User" }));
                }
                var result = _editZarinpalSettingService.Execute(dto);
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
                        Service = "ZarinpalSetting",
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
                        Service = "Zarinpal",
                        ResponseCode = 500,
                    }
                });
            }
        }


        /// <summary>
        /// حذف یک تنظیمات درگاه زرین پال
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
        public ActionResult Delete(RequestRemoveZarinpalSettingDto dto)
        {

            try
            {

                var tokenDto = new RequestGetTokenDto { };
                if (Request.Headers["Authorization"].Count() > 0)
                {
                    tokenDto.Token = Request.Headers["Authorization"];
                }
                if (Request.Headers["selfUserId"].Count() > 0)
                {
                    tokenDto.SelfUserId = Request.Headers["selfUserId"];
                }
                if (tokenDto.Token == null || tokenDto.SelfUserId == null)
                {
                    return StatusCode(409, Json(new ErrorDto
                    {
                        IsSuccess = false,
                        ResponseCode = 409,
                        Message = "مقادیر توکن نامعتبر میباشد",
                        Service = "User",
                    }));
                }
                if (_getTokenService.GetValidateToken(tokenDto) == false)
                {
                    return StatusCode(403, Json(new ErrorDto { IsSuccess = false, Message = "توکن نامعتبر است", ResponseCode = 403, Service = "User" }));
                }
                var result = _removeZarinpalSettingService.Delete(dto);
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
                        Service = "ZarinpalSetting",
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
                        Service = "Zarinpal",
                        ResponseCode = 500,
                    }
                });
            }
        }




        /// <summary>
        /// دریافت تمامی تنظیمات درگاه زرین پال ها
        /// </summary>
        /// <response code="200">Success</response>
        /// <response code="403">Not Authorized - Value Content:</response>
        /// <response code="500">Server Error - Value Content:</response>
        [ProducesResponseType(typeof(ResultGetZarinpalSettingDto), 200)]
        [ProducesResponseType(typeof(ResultDto), 403)]
        [ProducesResponseType(typeof(ResultDto), 500)]
        [HttpPost]
        [Route("GetAll")]
        public ActionResult GetAll()
        {

            try
            {

                var tokenDto = new RequestGetTokenDto { };
                if (Request.Headers["Authorization"].Count() > 0)
                {
                    tokenDto.Token = Request.Headers["Authorization"];
                }
                if (Request.Headers["selfUserId"].Count() > 0)
                {
                    tokenDto.SelfUserId = Request.Headers["selfUserId"];
                }
                if (tokenDto.Token == null || tokenDto.SelfUserId == null)
                {
                    return StatusCode(409, Json(new ErrorDto
                    {
                        IsSuccess = false,
                        ResponseCode = 409,
                        Message = "مقادیر توکن نامعتبر میباشد",
                        Service = "User",
                    }));
                }
                if (_getTokenService.GetValidateToken(tokenDto) == false)
                {
                    return StatusCode(403, Json(new ErrorDto { IsSuccess = false, Message = "توکن نامعتبر است", ResponseCode = 403, Service = "User" }));
                }
                var result = _getZarinpalSettingService.GetAll();
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
                        Service = "Zarinpal",
                        ResponseCode = 500,
                    }
                });
            }
        }


        /// <summary>
        /// دریافت اطلاعات یک تنظیمات درگاه زرین پال بر اساس ZarinpalSettingId
        /// </summary>
        /// <response code="200">Success</response>
        /// <response code="403">Not Authorized - Value Content:</response>
        /// <response code="500">Server Error - Value Content:</response>
        [ProducesResponseType(typeof(ResultGetZarinpalSettingDto), 200)]
        [ProducesResponseType(typeof(ResultDto), 403)]
        [ProducesResponseType(typeof(ResultDto), 500)]
        [HttpPost]
        [Route("GetById")]
        public ActionResult GetById(RequestGetZarinpalSettingByIdDto dto)
        {

            try
            {

                var tokenDto = new RequestGetTokenDto { };
                if (Request.Headers["Authorization"].Count() > 0)
                {
                    tokenDto.Token = Request.Headers["Authorization"];
                }
                if (Request.Headers["selfUserId"].Count() > 0)
                {
                    tokenDto.SelfUserId = Request.Headers["selfUserId"];
                }
                if (tokenDto.Token == null || tokenDto.SelfUserId == null)
                {
                    return StatusCode(409, Json(new ErrorDto
                    {
                        IsSuccess = false,
                        ResponseCode = 409,
                        Message = "مقادیر توکن نامعتبر میباشد",
                        Service = "User",
                    }));
                }
                if (_getTokenService.GetValidateToken(tokenDto) == false)
                {
                    return StatusCode(403, Json(new ErrorDto { IsSuccess = false, Message = "توکن نامعتبر است", ResponseCode = 403, Service = "User" }));
                }
                var result = _getZarinpalSettingService.GetById(dto);
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
                        Service = "Zarinpal",
                        ResponseCode = 500,
                    }
                });
            }
        }



        /// <summary>
        /// درخواست لینک زرین پال
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
        [HttpPost]
        [Route("RequestZarinpalUrl")]

        public ActionResult RequestZarinpalUrl(RequestUrlZarinpalRequestDto dto)
        {

            try
            {

                var tokenDto = new RequestGetTokenDto { };
                if (Request.Headers["Authorization"].Count() > 0)
                {
                    tokenDto.Token = Request.Headers["Authorization"];
                }
                if (Request.Headers["selfUserId"].Count() > 0)
                {
                    tokenDto.SelfUserId = Request.Headers["selfUserId"];
                }
                if (tokenDto.Token == null || tokenDto.SelfUserId == null)
                {
                    return StatusCode(409, Json(new ErrorDto
                    {
                        IsSuccess = false,
                        ResponseCode = 409,
                        Message = "مقادیر توکن نامعتبر میباشد",
                        Service = "User",
                    }));
                }
                if (_getTokenService.GetValidateToken(tokenDto) == false)
                {
                    return StatusCode(403, Json(new ErrorDto { IsSuccess = false, Message = "توکن نامعتبر است", ResponseCode = 403, Service = "User" }));
                }

                var setting = _getZarinpalSettingService.GetAll().ZarinpalSettings[0];

                //Start
                string CallBackUrl = setting.CallbackUrl;
                string TerminalId = setting.TerminalId;
                string UserName = setting.Username;
                string UserPassword = setting.Password;
                long settingTax = setting.TaxPercent;
                var totalTax = (dto.Price * settingTax) / 100;

                var result = _addZarinpalService.RequestZarinpal(new RequestRequestZarinpalDto
                {
                    callback_url = CallBackUrl,
                    description = dto.Description,
                    merchant_id = TerminalId,
                    amount = dto.Price + totalTax,

                    metadata = new RequestMetaData
                    {
                        email = dto.Email,
                        mobile = dto.Mobile,
                    }
                });

                if (result.Errors != null)
                {

                    return StatusCode(409, Json(new ErrorDto()
                    {
                        IsSuccess = false,
                        Message = result.Errors.code + " : " + result.Errors.message,
                        ResponseCode = 409,
                        Service = "Zarinpal",
                    }));

                }

                if (result.Data == null)
                {
                    return StatusCode(409, Json(new ErrorDto()
                    {
                        IsSuccess = false,
                        Message = "دیتایی از سمت زرین پال دریافت نشد",
                        ResponseCode = 409,
                        Service = "Zarinpal",
                    }));
                }


                var payment = _addPaymentService.Execute(new RequestAddPaymentDto
                {

                    UserId = dto.UserId,
                    PurchaseDate = dto.PurchaseDate,
                    PurchaseState = 2,
                    ConfirmDate = "",
                    ConfirmTime = "",
                    Description = dto.Description,
                    OrderId = "",
                    PurchaseTime = dto.PurchaseTime,
                    ZarinpalAuthority = result.Data.authority,
                    Price = dto.Price

                });

                if (!payment.IsSuccess)
                {

                    return StatusCode(409, Json(new ErrorDto
                    {
                        IsSuccess = false,
                        ResponseCode = 409,
                        Message = payment.Message,
                        Service = "Payment",
                    }));

                }


                if (result.Data != null)
                {
                    return Json(new ResultDto<ResultDataDto>()
                    {
                        IsSuccess = true,
                        Message = "با موفقیت انجام شد",
                        Data = result.Data

                    });
                }
                else
                {

                    return StatusCode(409, Json(new ErrorDto
                    {
                        IsSuccess = false,
                        ResponseCode = 409,
                        Message = result.Data.message,
                        Service = "Zarinpal",
                    }));

                }

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
                        Service = "Zarinpal",
                        ResponseCode = 500,
                    }
                });
            }

        }



        /// <summary>
        /// تایید خرید زرین پال
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
        [HttpPost]
        [Route("VerifyZarinpal")]
        public ActionResult VerifyZarinpal(RequestVerifyZarinpalConfirmDto dto)
        {
            try
            {
                var tokenDto = new RequestGetTokenDto { };
                if (Request.Headers["Authorization"].Count() > 0)
                {
                    tokenDto.Token = Request.Headers["Authorization"];
                }
                if (Request.Headers["selfUserId"].Count() > 0)
                {
                    tokenDto.SelfUserId = Request.Headers["selfUserId"];
                }
                if (tokenDto.Token == null || tokenDto.SelfUserId == null)
                {
                    return StatusCode(409, Json(new ErrorDto
                    {
                        IsSuccess = false,
                        ResponseCode = 409,
                        Message = "مقادیر توکن نامعتبر میباشد",
                        Service = "User",
                    }));
                }
                if (_getTokenService.GetValidateToken(tokenDto) == false)
                {
                    return StatusCode(403, Json(new ErrorDto { IsSuccess = false, Message = "توکن نامعتبر است", ResponseCode = 403, Service = "User" }));
                }

                var payment = _getPaymentSerivce.GetByZarinpalAuthority(new RequestGetPaymentByZarinpalAuthorityDto
                {
                    ZarinpalAuthority = dto.Authority
                });
                if (payment.Rows == 0)
                {

                    return StatusCode(409, Json(new ErrorDto
                    {
                        IsSuccess = false,
                        ResponseCode = 409,
                        Message = "پرداختی وجود ندارد.",
                        Service = "Zarinpal",
                    }));
                }
                if (payment.Payments[0].PurchaseState == 0)
                {
                    return StatusCode(409, Json(new ErrorDto
                    {
                        IsSuccess = false,
                        ResponseCode = 409,
                        Message = "این پرداخت قبلا تایید شده",
                        Service = "Zarinpal",
                    }));
                }

                if (dto.Status.ToUpper() == "NOK")
                {
                    _editPaymentService.ExecutePurchaseState(new RequestEditPaymentPurchaseStateDto
                    {
                        PaymentId = payment.Payments[0].PaymentId,
                        ConfirmDate = dto.ConfirmDate,
                        ConfirmTime = dto.ConfirmTime,
                        PurchaseState = 1,
                        OrderId = ""
                    });

                    return StatusCode(409, Json(new ErrorDto
                    {
                        IsSuccess = false,
                        ResponseCode = 409,
                        Message = "پرداخت آنلاین با خطا مواجه شده است.",
                        Service = "Zarinpal",
                    }));
                }
                else
                {
                    var setting = _getZarinpalSettingService.GetAll().ZarinpalSettings[0];

                    //Start
                    string CallBackUrl = setting.CallbackUrl;
                    string TerminalId = setting.TerminalId;
                    string UserName = setting.Username;
                    string UserPassword = setting.Password;
                    long TaxPercent = setting.TaxPercent;


                    long priceTax = ((payment.Payments[0].Price) * TaxPercent) / 100;

                    long price = priceTax + payment.Payments[0].Price;

                    var verification = _addZarinpalService.VerifyZarinpal(new RequestVerifyZarinpalDto
                    {
                        amount = price,
                        merchant_id = TerminalId,
                        authority = dto.Authority,
                    });
                    //ارسال به صفحه خطا
                    if (verification.Data.code != 100)
                    {
                        _editPaymentService.ExecutePurchaseState(new RequestEditPaymentPurchaseStateDto
                        {
                            PaymentId = payment.Payments[0].PaymentId,
                            ConfirmDate = dto.ConfirmDate,
                            ConfirmTime = dto.ConfirmTime,
                            PurchaseState = 1,
                            OrderId = ""
                        });

                        return StatusCode(409, Json(new ErrorDto
                        {
                            IsSuccess = false,
                            ResponseCode = 409,
                            Message = "پرداخت آنلاین با خطا مواجه شده است.",
                            Service = "Zarinpal",
                        }));
                    }
                    else
                    {
                        var resultPayment = _editPaymentService.ExecutePurchaseState(new RequestEditPaymentPurchaseStateDto
                        {
                            PaymentId = payment.Payments[0].PaymentId,
                            ConfirmDate = dto.ConfirmDate,
                            ConfirmTime = dto.ConfirmTime,
                            PurchaseState = 0,
                            OrderId = verification.Data.ref_id
                        });


                        if (resultPayment.IsSuccess == true)
                        {
                            //  string response = "پرداخت شما با موفقیت انجام شد" + " - " + "شماره پیگیری تراکنش: " + ;
                            string response = "پرداخت شما با موفقیت انجام شد";


                            return Json(new ResultDto<ResultVerifyDataResponseDto>
                            {
                                IsSuccess = true,
                                Message = response,
                                Data = new ResultVerifyDataResponseDto
                                {
                                    ref_id = verification.Data.ref_id
                                }
                            });

                        }

                        else
                            return StatusCode(409, Json(new ErrorDto
                            {
                                IsSuccess = false,
                                ResponseCode = 409,
                                Message = resultPayment.Message,
                                Service = "Zarinpal",
                            }));

                    }
                }
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
                        Service = "Zarinpal",
                        ResponseCode = 500,
                    }
                });
            }




        }


    }
}
