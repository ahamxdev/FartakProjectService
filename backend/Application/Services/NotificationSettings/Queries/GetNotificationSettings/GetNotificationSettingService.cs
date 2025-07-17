using Application.Interfaces.Contexts;
using Application.Services.NotificationSettings.Queries.GetNotificationSettings;

namespace Application.Services.NotificationSettings.Commands.AddNotificationSettings
{
    public class GetNotificationSettingService : IGetNotificationSettingService
    {
        private readonly IDatabaseContext _context;
        public GetNotificationSettingService(IDatabaseContext context)
        {
            _context = context;
        }

        public ResultGetNotificationSettingDto GetById(RequestGetNotificationSettingByIdDto request)
        {
            var NotificationSetting = _context.NotificationSettings.Where(x => x.NotificationSettingId == request.NotificationSettingId);
            var NotificationSettingList = NotificationSetting.Select(p => new GetNotificationSettingDto
            {
                UserId = p.UserId,

                AllNotifications_Email = p.AllNotifications_Email,
                AllNotifications_Sms = p.AllNotifications_Sms,
                AllNotifications_InSite = p.AllNotifications_InSite,
                AllNotifications_Telegram = p.AllNotifications_Telegram,

                NewProposalRegistered_Email = p.NewProposalRegistered_Email,
                NewProposalRegistered_Sms = p.NewProposalRegistered_Sms,
                NewProposalRegistered_InSite = p.NewProposalRegistered_InSite,
                NewProposalRegistered_Telegram = p.NewProposalRegistered_Telegram,

                ProposalRejected_Email = p.ProposalRejected_Email,
                ProposalRejected_Sms = p.ProposalRejected_Sms,
                ProposalRejected_InSite = p.ProposalRejected_InSite,
                ProposalRejected_Telegram = p.ProposalRejected_Telegram,

                ProjectStageChanged_Email = p.ProjectStageChanged_Email,
                ProjectStageChanged_Sms = p.ProjectStageChanged_Sms,
                ProjectStageChanged_InSite = p.ProjectStageChanged_InSite,
                ProjectStageChanged_Telegram = p.ProjectStageChanged_Telegram,

                ProjectConfirmed_Email = p.ProjectConfirmed_Email,
                ProjectConfirmed_Sms = p.ProjectConfirmed_Sms,
                ProjectConfirmed_InSite = p.ProjectConfirmed_InSite,
                ProjectConfirmed_Telegram = p.ProjectConfirmed_Telegram,

                ProjectCanceledInProgress_Email = p.ProjectCanceledInProgress_Email,
                ProjectCanceledInProgress_Sms = p.ProjectCanceledInProgress_Sms,
                ProjectCanceledInProgress_InSite = p.ProjectCanceledInProgress_InSite,
                ProjectCanceledInProgress_Telegram = p.ProjectCanceledInProgress_Telegram,

                TicketReplied_Email = p.TicketReplied_Email,
                TicketReplied_Sms = p.TicketReplied_Sms,
                TicketReplied_InSite = p.TicketReplied_InSite,
                TicketReplied_Telegram = p.TicketReplied_Telegram,

                MessageNotRead_Email = p.MessageNotRead_Email,
                MessageNotRead_Sms = p.MessageNotRead_Sms,
                MessageNotRead_InSite = p.MessageNotRead_InSite,
                MessageNotRead_Telegram = p.MessageNotRead_Telegram,

                WithdrawRequest_Email = p.WithdrawRequest_Email,
                WithdrawRequest_Sms = p.WithdrawRequest_Sms,
                WithdrawRequest_InSite = p.WithdrawRequest_InSite,
                WithdrawRequest_Telegram = p.WithdrawRequest_Telegram,

                NotificationSettingId = p.NotificationSettingId,

            }).OrderBy(x => x.NotificationSettingId).ToList();
            return new ResultGetNotificationSettingDto
            {
                NotificationSettings = NotificationSettingList,
                Rows = NotificationSettingList.Count,
            };
        }

        public ResultGetNotificationSettingDto GetAll()
        {
            var NotificationSetting = _context.NotificationSettings;
            var NotificationSettingList = NotificationSetting.Select(p => new GetNotificationSettingDto
            {
                UserId = p.UserId,

                AllNotifications_Email = p.AllNotifications_Email,
                AllNotifications_Sms = p.AllNotifications_Sms,
                AllNotifications_InSite = p.AllNotifications_InSite,
                AllNotifications_Telegram = p.AllNotifications_Telegram,

                NewProposalRegistered_Email = p.NewProposalRegistered_Email,
                NewProposalRegistered_Sms = p.NewProposalRegistered_Sms,
                NewProposalRegistered_InSite = p.NewProposalRegistered_InSite,
                NewProposalRegistered_Telegram = p.NewProposalRegistered_Telegram,

                ProposalRejected_Email = p.ProposalRejected_Email,
                ProposalRejected_Sms = p.ProposalRejected_Sms,
                ProposalRejected_InSite = p.ProposalRejected_InSite,
                ProposalRejected_Telegram = p.ProposalRejected_Telegram,

                ProjectStageChanged_Email = p.ProjectStageChanged_Email,
                ProjectStageChanged_Sms = p.ProjectStageChanged_Sms,
                ProjectStageChanged_InSite = p.ProjectStageChanged_InSite,
                ProjectStageChanged_Telegram = p.ProjectStageChanged_Telegram,

                ProjectConfirmed_Email = p.ProjectConfirmed_Email,
                ProjectConfirmed_Sms = p.ProjectConfirmed_Sms,
                ProjectConfirmed_InSite = p.ProjectConfirmed_InSite,
                ProjectConfirmed_Telegram = p.ProjectConfirmed_Telegram,

                ProjectCanceledInProgress_Email = p.ProjectCanceledInProgress_Email,
                ProjectCanceledInProgress_Sms = p.ProjectCanceledInProgress_Sms,
                ProjectCanceledInProgress_InSite = p.ProjectCanceledInProgress_InSite,
                ProjectCanceledInProgress_Telegram = p.ProjectCanceledInProgress_Telegram,

                TicketReplied_Email = p.TicketReplied_Email,
                TicketReplied_Sms = p.TicketReplied_Sms,
                TicketReplied_InSite = p.TicketReplied_InSite,
                TicketReplied_Telegram = p.TicketReplied_Telegram,

                MessageNotRead_Email = p.MessageNotRead_Email,
                MessageNotRead_Sms = p.MessageNotRead_Sms,
                MessageNotRead_InSite = p.MessageNotRead_InSite,
                MessageNotRead_Telegram = p.MessageNotRead_Telegram,

                WithdrawRequest_Email = p.WithdrawRequest_Email,
                WithdrawRequest_Sms = p.WithdrawRequest_Sms,
                WithdrawRequest_InSite = p.WithdrawRequest_InSite,
                WithdrawRequest_Telegram = p.WithdrawRequest_Telegram,

                NotificationSettingId = p.NotificationSettingId,

            }).OrderBy(x => x.NotificationSettingId).ToList();
            return new ResultGetNotificationSettingDto
            {
                NotificationSettings = NotificationSettingList,
                Rows = NotificationSettingList.Count,
            };
        }
    }
}
