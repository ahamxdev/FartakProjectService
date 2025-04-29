using Application.Interfaces.Contexts;
using Common.Dto;

namespace Application.Services.Payments.Commands.RemovePayments
{
    public class RemovePaymentService : IRemovePaymentService
    {
        private readonly IDatabaseContext _context;

        public RemovePaymentService(IDatabaseContext context)
        {
            _context = context;

        }
        public ResultDto Delete(RequestRemovePaymentDto request)
        {

            var payment = _context.Payments.Find(request.PaymentId);
            if (payment == null)
            {
                return new ResultDto
                {
                    IsSuccess = false,
                    Message = "یافت نشد"
                };
            }

            _context.Payments.Remove(payment);
            _context.SaveChanges();
            return new ResultDto()
            {
                IsSuccess = true,
                Message = "با موفقیت حذف شد."
            };
        }

    }
}
