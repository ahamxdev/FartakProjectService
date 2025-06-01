namespace Common.Services.ZarinpalService.Commands.AddZarinpals
{
    public interface IAddZarinpalService
    {
        ResultRequestZarinpalDto RequestZarinpal(RequestRequestZarinpalDto request);
        ResultVerifyZarinpalDto VerifyZarinpal(RequestVerifyZarinpalDto request);
    }
}
