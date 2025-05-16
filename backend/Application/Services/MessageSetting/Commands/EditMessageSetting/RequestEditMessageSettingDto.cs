

namespace Application.Services.MessageSetting.Commands.EditMessageSetting
{
    public class RequestEditMessageSettingDto
    {
        public long MessageSettingId { get; set; }
        //SMS
        public string? SMSApiKey { get; set; }
        public int ForgetPasswordTemplateId { get; set; }
    }
}
