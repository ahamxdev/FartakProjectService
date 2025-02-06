using Common.Dto;

namespace Application.Services.Payments.Commands.EditPayments
{
    public interface IEditPaymentService
    {
        ResultDto Execute(RequestEditPaymentDto request);
        ResultDto ExecutePurchaseState(RequestEditPaymentPurchaseStateDto request);
    }
}
