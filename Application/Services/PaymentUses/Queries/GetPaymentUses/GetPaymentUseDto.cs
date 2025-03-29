namespace Application.Services.PaymentUses.Queries.GetPaymentUses
{
    public class GetPaymentUseDto
    {
        public long PaymentUseId { get; set; }
        public long UserId { get; set; }
        public long PaymentId { get; set; }

        public long CourseId { get; set; }
        public required string PaymentUseDate { get; set; }
        public required string PaymentUseTime { get; set; }
        public long Price { get; set; }
        public long ProjectPhaseId { get; set; }
    }
}
