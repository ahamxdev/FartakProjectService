using Common.Dto;

namespace Application.Services.ZarinpalSettings.Commands.AddZarinpalSettings
{
    public interface IAddZarinpalSettingService
    {
        ResultDto<ResultAddZarinpalSettingDto> Execute(RequestAddZarinpalSettingDto request);
    }
}
