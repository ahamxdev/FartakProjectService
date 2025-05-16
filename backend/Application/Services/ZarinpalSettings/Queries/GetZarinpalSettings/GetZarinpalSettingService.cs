using Application.Interfaces.Contexts;

namespace Application.Services.ZarinpalSettings.Queries.GetZarinpalSettings
{
    public class GetZarinpalSettingService : IGetZarinpalSettingService
    {
        private readonly IDatabaseContext _context;
        public GetZarinpalSettingService(IDatabaseContext context)
        {
            _context = context;
        }

        public ResultGetZarinpalSettingDto GetAll()
        {
            var zarinpalSettings = _context.ZarinpalSettings;
            var zarinpalSettingList = zarinpalSettings.Select(p => new GetZarinpalSettingDto
            {
                ZarinpalSettingId = p.ZarinpalSettingId,
                TaxPercent = p.TaxPercent,
                ComissionPercent = p.ComissionPercent,
                Username = p.Username,
                CallbackUrl = p.CallbackUrl,
                Password = p.Password,
                TerminalId = p.TerminalId

            }).OrderBy(x => x.ZarinpalSettingId).ToList();
            return new ResultGetZarinpalSettingDto
            {
                ZarinpalSettings = zarinpalSettingList,
                Rows = zarinpalSettingList.Count,
            };
        }

        public ResultGetZarinpalSettingDto GetById(RequestGetZarinpalSettingByIdDto request)
        {
            var zarinpalSettings = _context.ZarinpalSettings.Where(p => p.ZarinpalSettingId == request.ZarinpalSettingId);
            var zarinpalSettingList = zarinpalSettings.Select(p => new GetZarinpalSettingDto
            {
                ZarinpalSettingId = p.ZarinpalSettingId,
                TaxPercent = p.TaxPercent,
                ComissionPercent = p.ComissionPercent,
                Username = p.Username,
                CallbackUrl = p.CallbackUrl,
                Password = p.Password,
                TerminalId = p.TerminalId

            }).OrderBy(x => x.ZarinpalSettingId).ToList();
            return new ResultGetZarinpalSettingDto
            {
                ZarinpalSettings = zarinpalSettingList,
                Rows = zarinpalSettingList.Count,
            };
        }
    }
}
