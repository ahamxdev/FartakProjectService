namespace Application.Services.MessageSetting.Queries.GetMessageSetting
{
    public class ResultGetMessageSettingDto
    {
        public required List<GetMessageSettingDto> MessageSetting { get; set; }
        public long Rows { get; set; }
    }
}
