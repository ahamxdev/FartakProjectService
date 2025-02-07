using Application.Interfaces.Contexts;
using Common.Dto;
using Domain.Entities.Payments;

namespace Application.Services.Payments.Commands.AddPayments
{
    public class AddPaymentService : IAddPaymentService
    {
        private readonly IDatabaseContext _context;
        public AddPaymentService(IDatabaseContext context)
        {
            _context = context;
        }
        public ResultDto<ResultAddPaymentDto> Execute(RequestAddPaymentDto request)
        {

            try
            {
                Payment payment = new Payment()
                {

                    ConfirmDate = request.ConfirmDate,
                    ConfirmTime = request.ConfirmTime,
                    Description = request.Description,
                    OrderId = request.OrderId,
                    PurchaseDate = request.PurchaseDate,
                    PurchaseState = request.PurchaseState,
                    PurchaseTime = request.PurchaseTime,
                    Price = request.Price,
                    UserId = request.UserId,
                    ZarinpalAuthority = request.ZarinpalAuthority,

                };
                _context.Payments.Add(payment);
                _context.SaveChanges();
                return new ResultDto<ResultAddPaymentDto>()
                {
                    Data = new ResultAddPaymentDto() { PaymentId = payment.PaymentId },
                    IsSuccess = true,
                    Message = "با موفقیت ثبت شد",

                };
            }
            catch
            {
                return new ResultDto<ResultAddPaymentDto>()
                {
                    Data = new ResultAddPaymentDto() { PaymentId = 0, },
                    IsSuccess = false,
                    Message = "ثبت با خطا مواجه شد",

                };

            }
        }

    }
}
