using Application.Interfaces.Contexts;
using Common.Dto;
using Microsoft.Extensions.Configuration;

namespace Application.Services.NotificationSettings.Commands.EditNotificationSettings
{
    public class EditNotificationSettingService : IEditNotificationSettingService
    {
        private readonly IDatabaseContext _context;
        private readonly IConfiguration _configuration;

        public EditNotificationSettingService(IDatabaseContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }
        public ResultDto Execute(RequestEditNotificationSettingDto request)
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


            try
            {

                NotificationSetting.UserId = request.UserId;

                NotificationSetting.AllNotifications_Email = request.AllNotifications_Email;
                NotificationSetting.AllNotifications_Sms = request.AllNotifications_Sms;
                NotificationSetting.AllNotifications_InSite = request.AllNotifications_InSite;
                NotificationSetting.AllNotifications_Telegram = request.AllNotifications_Telegram;

                NotificationSetting.NewProposalRegistered_Email = request.NewProposalRegistered_Email;
                NotificationSetting.NewProposalRegistered_Sms = request.NewProposalRegistered_Sms;
                NotificationSetting.NewProposalRegistered_InSite = request.NewProposalRegistered_InSite;
                NotificationSetting.NewProposalRegistered_Telegram = request.NewProposalRegistered_Telegram;

                NotificationSetting.ProposalRejected_Email = request.ProposalRejected_Email;
                NotificationSetting.ProposalRejected_Sms = request.ProposalRejected_Sms;
                NotificationSetting.ProposalRejected_InSite = request.ProposalRejected_InSite;
                NotificationSetting.ProposalRejected_Telegram = request.ProposalRejected_Telegram;

                NotificationSetting.ProjectStageChanged_Email = request.ProjectStageChanged_Email;
                NotificationSetting.ProjectStageChanged_Sms = request.ProjectStageChanged_Sms;
                NotificationSetting.ProjectStageChanged_InSite = request.ProjectStageChanged_InSite;
                NotificationSetting.ProjectStageChanged_Telegram = request.ProjectStageChanged_Telegram;

                NotificationSetting.ProjectConfirmed_Email = request.ProjectConfirmed_Email;
                NotificationSetting.ProjectConfirmed_Sms = request.ProjectConfirmed_Sms;
                NotificationSetting.ProjectConfirmed_InSite = request.ProjectConfirmed_InSite;
                NotificationSetting.ProjectConfirmed_Telegram = request.ProjectConfirmed_Telegram;

                NotificationSetting.ProjectCanceledInProgress_Email = request.ProjectCanceledInProgress_Email;
                NotificationSetting.ProjectCanceledInProgress_Sms = request.ProjectCanceledInProgress_Sms;
                NotificationSetting.ProjectCanceledInProgress_InSite = request.ProjectCanceledInProgress_InSite;
                NotificationSetting.ProjectCanceledInProgress_Telegram = request.ProjectCanceledInProgress_Telegram;

                NotificationSetting.TicketReplied_Email = request.TicketReplied_Email;
                NotificationSetting.TicketReplied_Sms = request.TicketReplied_Sms;
                NotificationSetting.TicketReplied_InSite = request.TicketReplied_InSite;
                NotificationSetting.TicketReplied_Telegram = request.TicketReplied_Telegram;

                NotificationSetting.MessageNotRead_Email = request.MessageNotRead_Email;
                NotificationSetting.MessageNotRead_Sms = request.MessageNotRead_Sms;
                NotificationSetting.MessageNotRead_InSite = request.MessageNotRead_InSite;
                NotificationSetting.MessageNotRead_Telegram = request.MessageNotRead_Telegram;

                NotificationSetting.WithdrawRequest_Email = request.WithdrawRequest_Email;
                NotificationSetting.WithdrawRequest_Sms = request.WithdrawRequest_Sms;
                NotificationSetting.WithdrawRequest_InSite = request.WithdrawRequest_InSite;
                NotificationSetting.WithdrawRequest_Telegram = request.WithdrawRequest_Telegram;


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
