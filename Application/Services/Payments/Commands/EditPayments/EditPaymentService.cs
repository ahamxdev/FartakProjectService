using Application.Interfaces.Contexts;
using Common.Dto;

namespace Application.Services.Payments.Commands.EditPayments
{
    public class EditPaymentService : IEditPaymentService
    {
        private readonly IDatabaseContext _context;
        public EditPaymentService(IDatabaseContext context)
        {
            _context = context;
        }
        public ResultDto Execute(RequestEditPaymentDto request)
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



            try
            {

                payment.PurchaseDate = request.PurchaseDate;
                payment.PurchaseTime = request.PurchaseTime;
                payment.ConfirmDate = request.ConfirmDate;
                payment.ConfirmTime = request.ConfirmTime;
                payment.OrderId = request.OrderId;
                payment.Price = request.Price;
                payment.Description = request.Description;
                payment.PurchaseState = request.PurchaseState;
                payment.ZarinpalAuthority = request.ZarinpalAuthority;


                _context.SaveChanges();

                return new ResultDto()
                {
                    IsSuccess = true,
                    Message = "ویرایش انجام شد"
                };
            }
            catch
            {
                return new ResultDto()
                {
                    IsSuccess = false,
                    Message = "ویرایش با خطا مواجه شد"
                };
            }
        }

        public ResultDto ExecutePurchaseState(RequestEditPaymentPurchaseStateDto request)
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



            try
            {
                payment.ConfirmDate = request.ConfirmDate;
                payment.ConfirmTime = request.ConfirmTime;
                payment.PurchaseState = request.PurchaseState;
                if (request.OrderId != null) payment.OrderId = request.OrderId;


                _context.SaveChanges();

                return new ResultDto()
                {
                    IsSuccess = true,
                    Message = "ویرایش انجام شد"
                };
            }
            catch
            {
                return new ResultDto()
                {
                    IsSuccess = false,
                    Message = "ویرایش با خطا مواجه شد"
                };
            }
        }

    }
}
