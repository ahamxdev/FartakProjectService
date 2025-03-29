namespace Application.Services.PaymentUses.Queries.GetPaymentUses
{
    public interface IGetPaymentUseService
    {
        ResultGetPaymentUseDto GetByUserId(RequestGetPaymentUseGetByUserIdDto request);
        ResultGetPaymentUseDto GetById(RequestGetPaymentUseGetByIdDto request);
        ResultGetPaymentUseDto GetByPaymentId(RequestGetPaymentUseGetByPaymentIdDto request);
        ResultGetPaymentUseDto GetByCourseId(RequestGetPaymentUseGetByCourseIdDto request);
        ResultGetPaymentUseDto GetByProjectPhaseId(RequestGetPaymentUseGetByProjectPhaseIdDto request);
        ResultGetPaymentUseDto GetAll();
    }
}
