using Application.Interfaces.Contexts;
using Common.Dto;

namespace Application.Services.MessageSetting.Commands.EditMessageSetting
{
    public class EditMessageSettingService : IEditMessageSettingService
    {
        private readonly IDatabaseContext _context;

        public EditMessageSettingService(IDatabaseContext context)
        {
            _context = context;
        }
        public ResultDto GetAll(RequestEditMessageSettingDto request)
        {
            var MessageSetting = _context.MessageSettings.FirstOrDefault();
            if (MessageSetting == null)
            {
                return new ResultDto
                {
                    IsSuccess = false,
                    Message = "ستینگ یافت نشد"
                };
            }
            try
            {
                MessageSetting.SMSApiKey = request.SMSApiKey;
                MessageSetting.ForgetPasswordTemplateId = request.ForgetPasswordTemplateId;
                _context.SaveChanges();

                return new ResultDto()
                {
                    IsSuccess = true,
                    Message = "ویرایش ستینگ انجام شد"
                };
            }
            catch
            {
                return new ResultDto()
                {
                    IsSuccess = false,
                    Message = "ویرایش ستینگ با خطا مواجه شد"
                };
            }

        }

    }
}
