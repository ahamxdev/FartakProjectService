namespace Application.Services.Payments.Queries.GetPayments
{


    public class RequestGetPaymentByIdDto
    {
        public long PaymentId { get; set; }
    }

    public class RequestGetPaymentByZarinpalAuthorityDto
    {

        public required string ZarinpalAuthority { get; set; }

    }
    public class RequestGetPaymentByUserIdDto
    {
        public long UserId { get; set; }
    }
    public class RequestGetPaymentByRevenuePlanPriceIdDto
    {
        public long RevenuePlanPriceId { get; set; }
    }
    public class RequestGetPaymentByProductIdDto
    {
        public long ProductId { get; set; }
    }

    public class RequestGetPaymentByPurchaseTypeNameDto
    {
        public int PurchaseTypeName { get; set; }
    }

    public class RequestGetPaymentByOrderIdDto
    {
        public required string OrderId { get; set; }
    }
}
