namespace Application.Services.NotificationSettings.Queries.GetNotificationSettings
{
    public class GetNotificationSettingDto { 
      public long NotificationSettingId { get; set; }
    public long UserId { get; set; }

    //  تنظیم کلی برای فعال یا غیرفعال کردن همه اعلان‌ها
    public bool AllNotifications_Email { get; set; }
    public bool AllNotifications_Sms { get; set; }
    public bool AllNotifications_InSite { get; set; }
    public bool AllNotifications_Telegram { get; set; }

    //  اعلان هنگام ثبت پیشنهاد جدید
    public bool NewProposalRegistered_Email { get; set; }
    public bool NewProposalRegistered_Sms { get; set; }
    public bool NewProposalRegistered_InSite { get; set; }
    public bool NewProposalRegistered_Telegram { get; set; }

    // ❌ اعلان زمانی که پیشنهاد رد می‌شود
    public bool ProposalRejected_Email { get; set; }
    public bool ProposalRejected_Sms { get; set; }
    public bool ProposalRejected_InSite { get; set; }
    public bool ProposalRejected_Telegram { get; set; }

    //  اعلان تغییر وضعیت مراحل پروژه (شروع، در حال انجام، پایان)
    public bool ProjectStageChanged_Email { get; set; }
    public bool ProjectStageChanged_Sms { get; set; }
    public bool ProjectStageChanged_InSite { get; set; }
    public bool ProjectStageChanged_Telegram { get; set; }

    //  اعلان تایید پروژه توسط کارفرما
    public bool ProjectConfirmed_Email { get; set; }
    public bool ProjectConfirmed_Sms { get; set; }
    public bool ProjectConfirmed_InSite { get; set; }
    public bool ProjectConfirmed_Telegram { get; set; }

    //  اعلان لغو پروژه در حال انجام
    public bool ProjectCanceledInProgress_Email { get; set; }
    public bool ProjectCanceledInProgress_Sms { get; set; }
    public bool ProjectCanceledInProgress_InSite { get; set; }
    public bool ProjectCanceledInProgress_Telegram { get; set; }

    //  اعلان پاسخ تیکت توسط پشتیبانی یا فریلنسر
    public bool TicketReplied_Email { get; set; }
    public bool TicketReplied_Sms { get; set; }
    public bool TicketReplied_InSite { get; set; }
    public bool TicketReplied_Telegram { get; set; }

    //  اعلان پیام‌هایی که هنوز خوانده نشده‌اند
    public bool MessageNotRead_Email { get; set; }
    public bool MessageNotRead_Sms { get; set; }
    public bool MessageNotRead_InSite { get; set; }
    public bool MessageNotRead_Telegram { get; set; }

    //  اعلان ثبت درخواست واریز وجه
    public bool WithdrawRequest_Email { get; set; }
    public bool WithdrawRequest_Sms { get; set; }
    public bool WithdrawRequest_InSite { get; set; }
    public bool WithdrawRequest_Telegram { get; set; }
}


}
