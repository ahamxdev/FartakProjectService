namespace Application.Services.Payments.Queries.GetPayments
{
    public interface IGetPaymentService
    {
        ResultGetPaymentDto GetAll();
        ResultGetPaymentDto GetById(RequestGetPaymentByIdDto request);
        ResultGetPaymentDto GetByUserId(RequestGetPaymentByUserIdDto request);
        ResultGetPaymentDto GetByOrderId(RequestGetPaymentByOrderIdDto request);
        ResultGetPaymentDto GetByZarinpalAuthority(RequestGetPaymentByZarinpalAuthorityDto request);

    }
}
