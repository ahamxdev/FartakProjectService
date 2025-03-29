namespace Application.Services.PaymentUses.Queries.GetPaymentUses
{
    public class RequestGetPaymentUseGetByIdDto
    {
        public long PaymentUseId { get; set; }
    }

    public class RequestGetPaymentUseGetByPaymentIdDto
    {
        public long PaymentId { get; set; }
    }

    public class RequestGetPaymentUseGetByUserIdDto
    {
        public long UserId { get; set; }
    }

    public class RequestGetPaymentUseGetByCourseIdDto
    {
        public long CourseId { get; set; }
    }

    public class RequestGetPaymentUseGetByProjectPhaseIdDto
    {
        public long ProjectPhaseId { get; set; }
    }

}
