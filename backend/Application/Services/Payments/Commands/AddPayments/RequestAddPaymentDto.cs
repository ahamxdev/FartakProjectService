namespace Application.Services.Payments.Commands.AddPayments
{
    public class RequestAddPaymentDto
    {
        public long UserId { get; set; }
        public required string PurchaseDate { get; set; }
        public required string PurchaseTime { get; set; }
        public required string ConfirmDate { get; set; }
        public required string ConfirmTime { get; set; }
        public required string ZarinpalAuthority { get; set; }
        public long Price { get; set; }
        public required string OrderId { get; set; }
        public string? Description { get; set; }
        public int PurchaseState { get; set; }// 0 = ok , 1 = unSuccessful , 2 = doing 

    }


    public class RequestUrlZarinpalRequestDto
    {


        public long UserId { get; set; }
        public required string PurchaseDate { get; set; }
        public required string PurchaseTime { get; set; }
        public required string Description { get; set; }
        public required string Email { get; set; }
        public required string Mobile { get; set; }
        public long Price { get; set; }
        public required string PaymentStatus { get; set; }
    }


}
