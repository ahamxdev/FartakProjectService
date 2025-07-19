using Application.Interfaces.Contexts;
using Common.Dto;


namespace Application.Services.NotificationSettings.Commands.RemoveNotificationSettings
{
    public class RemoveNotificationSettingService : IRemoveNotificationSettingService
    {

        private readonly IDatabaseContext _context;


        public RemoveNotificationSettingService(IDatabaseContext context)
        {
            _context = context;
        }

        public ResultDto Execute(RequestRemoveNotificationSettingDto request)
        {
            var NotificationSetting = _context.NotificationSettings.Find(request.NotificationSettingId);
            if (NotificationSetting == null)
            {
                return new ResultDto
                {
                    IsSuccess = false,
                    Message = "یافت نشد"
                };
            }

            _context.NotificationSettings.Remove(NotificationSetting);
            _context.SaveChanges();
            return new ResultDto()
            {
                IsSuccess = true,
                Message = "با موفقیت حذف شد"
            };
        }
    }
}
