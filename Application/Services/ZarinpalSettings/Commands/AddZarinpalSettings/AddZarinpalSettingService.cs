using Application.Interfaces.Contexts;
using Common.Dto;
using Domain.Entities.ZarinpalSettings;

namespace Application.Services.ZarinpalSettings.Commands.AddZarinpalSettings
{
    public class AddZarinpalSettingService : IAddZarinpalSettingService
    {
        private readonly IDatabaseContext _context;
        public AddZarinpalSettingService(IDatabaseContext context)
        {
            _context = context;
        }
        public ResultDto<ResultAddZarinpalSettingDto> Execute(RequestAddZarinpalSettingDto request)
        {

            try
            {
                ZarinpalSetting zarinpalSetting = new ZarinpalSetting()
                {
                    CallbackUrl = request.CallbackUrl,
                    ComissionPercent = request.ComissionPercent,
                    Password = request.Password,
                    TerminalId = request.TerminalId,
                    TaxPercent = request.TaxPercent,
                    Username = request.Username,

                };
                _context.ZarinpalSettings.Add(zarinpalSetting);
                _context.SaveChanges();
                return new ResultDto<ResultAddZarinpalSettingDto>()
                {
                    Data = new ResultAddZarinpalSettingDto() { ZarinpalSettingId = zarinpalSetting.ZarinpalSettingId },
                    IsSuccess = true,
                    Message = "با موفقیت ثبت شد",

                };
            }
            catch
            {
                return new ResultDto<ResultAddZarinpalSettingDto>()
                {
                    Data = new ResultAddZarinpalSettingDto() { ZarinpalSettingId = 0, },
                    IsSuccess = false,
                    Message = "ثبت با خطا مواجه شد",

                };

            }
        }
    }
}
