namespace project.Application.Services.SMS
{
    public class SMSRequestDto
    {
        public required string ToSMS { get; set; }
        public required string Code { get; set; }
    }

}