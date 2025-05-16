using Common.Dto;

namespace Application.Services.Payments.Commands.AddPayments
{
    public interface IAddPaymentService
    {
        ResultDto<ResultAddPaymentDto> Execute(RequestAddPaymentDto request);
    }
}
