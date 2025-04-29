namespace Application.Services.ZarinpalSettings.Queries.GetZarinpalSettings
{
    public class ResultGetZarinpalSettingDto
    {
        public required List<GetZarinpalSettingDto> ZarinpalSettings { get; set; }
        public long Rows { get; set; }
    }
}
