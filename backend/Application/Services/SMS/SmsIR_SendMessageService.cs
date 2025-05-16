using Application.Services.MessageSetting.Queries.GetMessageSetting;
using Common.Dto;
using IPE.SmsIrClient;
using IPE.SmsIrClient.Models.Requests;
using project.Application.Services.SMS;

namespace Application.Services.SMS
{
    public class SmsIR_SendMessageService : ISmsIR_SendMessageService
    {
        private readonly IGetMessageSettingService _getMessageSettingService;
        public SmsIR_SendMessageService(IGetMessageSettingService getMessageSettingService)
        {
            _getMessageSettingService = getMessageSettingService;
        }


        public async Task<ResultDto> SMSForgetPassword(SMSRequestDto request)

        {

            var MessageSetting = _getMessageSettingService.Execute().MessageSetting[0];
            SmsIr smsIr = new SmsIr(MessageSetting.SMSApiKey);

            //var bulkSendResult =await smsIr.BulkSendAsync(Convert.ToInt64( MessageSetting.SMSLineNumber), text, new string[] { to });
            var verificationSendResult = await smsIr.VerifySendAsync(request.ToSMS, MessageSetting.ForgetPasswordTemplateId, new VerifySendParameter[] { new("Code", request.Code) });
            return new ResultDto
            {
                IsSuccess = true,
                Message = "ارسال شد."
            };
        }

    }
}
