using Common.Dto;

namespace Application.Services.PaymentUses.Commands.AddPaymentUses
{
    public interface IAddPaymentUseService
    {
        ResultDto<ResultAddPaymentUseDto> Execute(RequestAddPaymentUseDto request);
    }
}
