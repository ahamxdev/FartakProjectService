using Common.Dto;

namespace Application.Services.ZarinpalSettings.Commands.EditZarinpalSettings
{
    public interface IEditZarinpalSettingService
    {
        ResultDto Execute(RequestEditZarinpalSettingDto request);
    }
}
