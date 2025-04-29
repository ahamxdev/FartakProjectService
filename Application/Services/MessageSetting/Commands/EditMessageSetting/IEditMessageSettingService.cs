using Common.Dto;

namespace Application.Services.MessageSetting.Commands.EditMessageSetting
{
    public interface IEditMessageSettingService
    {
        ResultDto GetAll(RequestEditMessageSettingDto request);
    }
}
