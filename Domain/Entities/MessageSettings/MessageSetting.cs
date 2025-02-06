namespace Domain.Entities.MessageSetting
{
    public class MessageSetting
    {
        public long MessageSettingId { get; set; }
        //SMS
        public string? SMSApiKey { get; set; }
        public int SignupTemplateId { get; set; }
        public int ForgetPasswordTemplateId { get; set; }
    }
}
