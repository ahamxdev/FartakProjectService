namespace Application.Services.Payments.Queries.GetPayments
{
    public class ResultGetPaymentDto
    {
        public required List<GetPaymentDto> Payments { get; set; }
        public long Rows { get; set; }
    }
}
