using Common.Dto;

namespace Application.Services.NotificationSettings.Commands.EditNotificationSettings
{
    public interface IEditNotificationSettingService
    {
        ResultDto Execute(RequestEditNotificationSettingDto request);
    }
}
