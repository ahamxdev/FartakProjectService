namespace Domain.Users
{
    public class InboxUser
    {
        public long InboxUserId { get; set; }
        public long UserId { get; set; }
        public long? SenderId { get; set; }
        public string Title { get; set; }      // عنوان پیام
        public DateTime CreatedAt { get; set; }  // زمان ارسال نوتیفیکیشن
        public int Read { get; set; } // 0 Not 1 Yes
        public required string Message { get; set; }
    }
}
