namespace Application.Services.PaymentUses.Queries.GetPaymentUses
{
    public class ResultGetPaymentUseDto
    {
        public required List<GetPaymentUseDto> PaymentUses { get; set; }
        public long Rows { get; set; }
    }
}
