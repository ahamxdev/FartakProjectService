namespace Application.Services.MessageSetting.Queries.GetMessageSetting
{
    public class GetMessageSettingDto
    {
        public long MessageSettingId { get; set; }
        //SMS
        public string? SMSApiKey { get; set; }
        public int ForgetPasswordTemplateId { get; set; }
    }
}
