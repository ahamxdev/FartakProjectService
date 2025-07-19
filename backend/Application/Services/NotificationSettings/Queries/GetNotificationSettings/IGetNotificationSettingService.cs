namespace Application.Services.NotificationSettings.Queries.GetNotificationSettings
{
    public interface IGetNotificationSettingService
    {
        ResultGetNotificationSettingDto GetById(RequestGetNotificationSettingByIdDto request);
        ResultGetNotificationSettingDto GetAll();
    }
}
