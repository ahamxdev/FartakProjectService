using Application.Interfaces.Contexts;
using Common.Dto;

namespace Application.Services.ZarinpalSettings.Commands.RemoveZarinpalSettings
{
    public class RemoveZarinpalSettingService : IRemoveZarinpalSettingService
    {
        private readonly IDatabaseContext _context;

        public RemoveZarinpalSettingService(IDatabaseContext context)
        {
            _context = context;

        }
        public ResultDto Delete(RequestRemoveZarinpalSettingDto request)
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

            _context.ZarinpalSettings.Remove(zarinpalSetting);
            _context.SaveChanges();
            return new ResultDto()
            {
                IsSuccess = true,
                Message = "با موفقیت حذف شد."
            };
        }
    }
}
