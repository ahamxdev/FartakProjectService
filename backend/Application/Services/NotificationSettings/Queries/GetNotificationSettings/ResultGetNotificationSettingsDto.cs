namespace Application.Services.NotificationSettings.Queries.GetNotificationSettings
{
    public class ResultGetNotificationSettingDto
    {
        public required List<GetNotificationSettingDto> NotificationSettings { get; set; }
        public long Rows { get; set; }
    }
}
