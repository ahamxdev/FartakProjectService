using Application.Interfaces.Contexts;
using Common.Dto;

namespace Application.Services.ZarinpalSettings.Commands.EditZarinpalSettings
{
    public class EditZarinpalSettingService : IEditZarinpalSettingService
    {
        private readonly IDatabaseContext _context;
        public EditZarinpalSettingService(IDatabaseContext context)
        {
            _context = context;
        }
        public ResultDto Execute(RequestEditZarinpalSettingDto request)
        {
            var zarinpalSetting = _context.ZarinpalSettings.Find(request.ZarinpalSettingId);
            if (zarinpalSetting == null)
            {
                return new ResultDto
                {
                    IsSuccess = false,
                    Message = "یافت نشد"
                };
            }



            try
            {

                zarinpalSetting.CallbackUrl = request.CallbackUrl;
                zarinpalSetting.TerminalId = request.TerminalId;
                zarinpalSetting.Username = request.Username;
                zarinpalSetting.Password = request.Password;
                zarinpalSetting.ComissionPercent = request.ComissionPercent;
                zarinpalSetting.TaxPercent = request.TaxPercent;

                _context.SaveChanges();

                return new ResultDto()
                {
                    IsSuccess = true,
                    Message = "ویرایش انجام شد"
                };
            }
            catch
            {
                return new ResultDto()
                {
                    IsSuccess = false,
                    Message = "ویرایش با خطا مواجه شد"
                };
            }
        }
    }
}
