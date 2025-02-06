using Common.Dto;

namespace Application.Services.Payments.Commands.RemovePayments
{
    public interface IRemovePaymentService
    {
        ResultDto Delete(RequestRemovePaymentDto request);
    }
}
