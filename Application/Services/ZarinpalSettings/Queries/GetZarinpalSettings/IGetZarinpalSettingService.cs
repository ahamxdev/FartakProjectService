namespace Application.Services.ZarinpalSettings.Queries.GetZarinpalSettings
{
    public interface IGetZarinpalSettingService
    {
        ResultGetZarinpalSettingDto GetById(RequestGetZarinpalSettingByIdDto request);
        ResultGetZarinpalSettingDto GetAll();
    }
}
