using Application.Interfaces.Contexts;
using Common.Dto;
using Domain.Entities.Payments;

namespace Application.Services.PaymentUses.Commands.AddPaymentUses
{
    public class AddPaymantUseService : IAddPaymentUseService
    {
        private readonly IDatabaseContext _context;
        public AddPaymantUseService(IDatabaseContext context)
        {
            _context = context;
        }
        public ResultDto<ResultAddPaymentUseDto> Execute(RequestAddPaymentUseDto request)
        {

            try
            {
                PaymentUse PaymantUse = new PaymentUse()
                {

                    PaymentUseDate = request.PaymentUseDate,
                    PaymentUseTime = request.PaymentUseTime,
                    Price = request.Price,
                    CourseId = request.CourseId,
                    UserId = request.UserId,
                    PaymentId = request.PaymentId,


                };
                _context.PaymentUses.Add(PaymantUse);
                _context.SaveChanges();
                return new ResultDto<ResultAddPaymentUseDto>()
                {
                    Data = new ResultAddPaymentUseDto() { PaymentUseId = PaymantUse.PaymentUseId },
                    IsSuccess = true,
                    Message = "با موفقیت ثبت شد",

                };
            }
            catch
            {
                return new ResultDto<ResultAddPaymentUseDto>()
                {
                    Data = new ResultAddPaymentUseDto() { PaymentUseId = 0, },
                    IsSuccess = false,
                    Message = "ثبت با خطا مواجه شد",

                };

            }
        }

    }
}
