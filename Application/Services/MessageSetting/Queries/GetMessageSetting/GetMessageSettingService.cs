using Application.Interfaces.Contexts;

namespace Application.Services.MessageSetting.Queries.GetMessageSetting
{
    public class GetMessageSettingService : IGetMessageSettingService
    {
        private readonly IDatabaseContext _context;
        public GetMessageSettingService(IDatabaseContext context)
        {
            _context = context;
        }
        public ResultGetMessageSettingDto Execute()
        {
            var MessageSetting = _context.MessageSettings.AsQueryable();
            int rowsCount = 0;
            var MessageSettingList = MessageSetting.Select(p => new GetMessageSettingDto
            {
                MessageSettingId = p.MessageSettingId,
                ForgetPasswordTemplateId = p.ForgetPasswordTemplateId,

            }).OrderBy(x => x.MessageSettingId).Reverse().ToList();
            return new ResultGetMessageSettingDto
            {
                MessageSetting = MessageSettingList,
                Rows = rowsCount,
            };
        }
    }
}
