using Common.Dto;
using project.Application.Services.SMS;

namespace Application.Services.SMS
{
    public interface ISmsIR_SendMessageService
    {
        Task<ResultDto> SMSForgetPassword(SMSRequestDto request);
    }
}
