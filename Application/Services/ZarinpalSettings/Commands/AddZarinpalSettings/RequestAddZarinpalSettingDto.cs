namespace Application.Services.ZarinpalSettings.Commands.AddZarinpalSettings
{
    public class RequestAddZarinpalSettingDto
    {
        public required string CallbackUrl { get; set; }
        public required string TerminalId { get; set; }
        public required string Username { get; set; }
        public required string Password { get; set; }
        public long ComissionPercent { get; set; }
        public long TaxPercent { get; set; }
    }



}
