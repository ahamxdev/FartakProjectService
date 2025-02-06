namespace Common.Services.ZarinpalService.Commands.AddZarinpals
{
    public class RequestMetaData
    {
        public required string mobile { get; set; }
        public required string email { get; set; }

    }

    public class RequestRequestZarinpalDto
    {
        public required string merchant_id { get; set; }
        public required string callback_url { get; set; }
        public required string description { get; set; }
        public long amount { get; set; }
        public required RequestMetaData metadata { get; set; }
    }

    public class RequestVerifyZarinpalDto
    {
        public required string merchant_id { get; set; }
        public required string authority { get; set; }
        public long amount { get; set; }
    }
}
