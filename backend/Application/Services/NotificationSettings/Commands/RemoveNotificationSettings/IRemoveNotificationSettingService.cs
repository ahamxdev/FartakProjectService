using Common.Dto;

namespace Application.Services.NotificationSettings.Commands.RemoveNotificationSettings
{
    public interface IRemoveNotificationSettingService
    {
        ResultDto Execute(RequestRemoveNotificationSettingDto request);
    }
}
