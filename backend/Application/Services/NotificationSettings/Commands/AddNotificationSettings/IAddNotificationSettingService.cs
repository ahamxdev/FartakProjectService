using Common.Dto;

namespace Application.Services.NotificationSettings.Commands.AddNotificationSettings
{
    public interface IAddNotificationSettingService
    {
        ResultDto<ResultAddNotificationSettingDto> Execute(RequestAddNotificationSettingDto request);
    }
}
