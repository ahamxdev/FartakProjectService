namespace Application.Services.PaymentUses.Commands.AddPaymentUses
{
    public class RequestAddPaymentUseDto
    {
        public long UserId { get; set; }
        public long PaymentId { get; set; }
        public long CourseId { get; set; }
        public required string PaymentUseDate { get; set; }
        public required string PaymentUseTime { get; set; }
        public long Price { get; set; }
    }
}
