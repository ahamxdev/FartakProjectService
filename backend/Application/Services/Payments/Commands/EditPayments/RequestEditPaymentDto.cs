namespace Application.Services.Payments.Commands.EditPayments
{
    public class RequestEditPaymentDto
    {
        public long PaymentId { get; set; }
        public long UserId { get; set; }
        public required string PurchaseDate { get; set; }
        public required string PurchaseTime { get; set; }
        public required string ConfirmDate { get; set; }
        public required string ConfirmTime { get; set; }
        public long Price { get; set; }
        public required string OrderId { get; set; }
        public required string ZarinpalAuthority { get; set; }
        public string? Description { get; set; }
        public int PurchaseState { get; set; }// 0 = ok , 1 = unSuccessful , 2 = doing 
    }

    public class RequestEditPaymentPurchaseStateDto
    {
        public long PaymentId { get; set; }
        public required string ConfirmDate { get; set; }
        public required string ConfirmTime { get; set; }
        public required string OrderId { get; set; }
        public int PurchaseState { get; set; }// 0 = ok , 1 = unSuccessful , 2 = doing 
    }


    public class RequestVerifyZarinpalConfirmDto
    {
        public required string Authority { get; set; }
        public required string Status { get; set; }
        public required string ConfirmDate { get; set; }
        public required string ConfirmTime { get; set; }


    }

}
