using Application.Interfaces.Contexts;
using Common.Dto;
using Domain.Entities;
using Domain.Entities.NotificationSettings;
using Microsoft.Extensions.Configuration;

namespace Application.Services.NotificationSettings.Commands.AddNotificationSettings
{
    public class AddNotificationSettingService : IAddNotificationSettingService
    {
        private readonly IDatabaseContext _context;
        private readonly IConfiguration _configuration;
        public AddNotificationSettingService(IDatabaseContext context,
                              IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }
        public ResultDto<ResultAddNotificationSettingDto> Execute(RequestAddNotificationSettingDto request)
        {


            try
            {
                NotificationSetting _notificationSetting = new NotificationSetting
                {
                    UserId = request.UserId,

                    AllNotifications_Email = request.AllNotifications_Email,
                    AllNotifications_Sms = request.AllNotifications_Sms,
                    AllNotifications_InSite = request.AllNotifications_InSite,
                    AllNotifications_Telegram = request.AllNotifications_Telegram,

                    NewProposalRegistered_Email = request.NewProposalRegistered_Email,
                    NewProposalRegistered_Sms = request.NewProposalRegistered_Sms,
                    NewProposalRegistered_InSite = request.NewProposalRegistered_InSite,
                    NewProposalRegistered_Telegram = request.NewProposalRegistered_Telegram,

                    ProposalRejected_Email = request.ProposalRejected_Email,
                    ProposalRejected_Sms = request.ProposalRejected_Sms,
                    ProposalRejected_InSite = request.ProposalRejected_InSite,
                    ProposalRejected_Telegram = request.ProposalRejected_Telegram,

                    ProjectStageChanged_Email = request.ProjectStageChanged_Email,
                    ProjectStageChanged_Sms = request.ProjectStageChanged_Sms,
                    ProjectStageChanged_InSite = request.ProjectStageChanged_InSite,
                    ProjectStageChanged_Telegram = request.ProjectStageChanged_Telegram,

                    ProjectConfirmed_Email = request.ProjectConfirmed_Email,
                    ProjectConfirmed_Sms = request.ProjectConfirmed_Sms,
                    ProjectConfirmed_InSite = request.ProjectConfirmed_InSite,
                    ProjectConfirmed_Telegram = request.ProjectConfirmed_Telegram,

                    ProjectCanceledInProgress_Email = request.ProjectCanceledInProgress_Email,
                    ProjectCanceledInProgress_Sms = request.ProjectCanceledInProgress_Sms,
                    ProjectCanceledInProgress_InSite = request.ProjectCanceledInProgress_InSite,
                    ProjectCanceledInProgress_Telegram = request.ProjectCanceledInProgress_Telegram,

                    TicketReplied_Email = request.TicketReplied_Email,
                    TicketReplied_Sms = request.TicketReplied_Sms,
                    TicketReplied_InSite = request.TicketReplied_InSite,
                    TicketReplied_Telegram = request.TicketReplied_Telegram,

                    MessageNotRead_Email = request.MessageNotRead_Email,
                    MessageNotRead_Sms = request.MessageNotRead_Sms,
                    MessageNotRead_InSite = request.MessageNotRead_InSite,
                    MessageNotRead_Telegram = request.MessageNotRead_Telegram,

                    WithdrawRequest_Email = request.WithdrawRequest_Email,
                    WithdrawRequest_Sms = request.WithdrawRequest_Sms,
                    WithdrawRequest_InSite = request.WithdrawRequest_InSite,
                    WithdrawRequest_Telegram = request.WithdrawRequest_Telegram,

                 };
                _context.NotificationSettings.Add(_notificationSetting);
                _context.SaveChanges();
                return new ResultDto<ResultAddNotificationSettingDto>
                {
                    Data = new ResultAddNotificationSettingDto
                    {
                        NotificationSettingId = _notificationSetting.NotificationSettingId,
                    },
                    IsSuccess = true,
                    Message = "با موفقیت ثبت شد."
                };
            }
            catch
            {
                return new ResultDto<ResultAddNotificationSettingDto>
                {
                    Data = new ResultAddNotificationSettingDto { NotificationSettingId = 0 },
                    IsSuccess = false,
                    Message = "ثبت با خطا مواجه شد."
                };

            }
        }

    }
}
