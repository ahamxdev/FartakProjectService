using Common.Dto;

namespace Application.Services.ZarinpalSettings.Commands.RemoveZarinpalSettings
{
    public interface IRemoveZarinpalSettingService
    {
        ResultDto Delete(RequestRemoveZarinpalSettingDto request);
    }
}
