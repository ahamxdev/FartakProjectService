using Application.Services.ProjectTypes.Queries.GetProjectTypes;

namespace Application.Services.TeacherTypes.Queries.GetTeacherTypes
{
    public interface IGetTeacherTypeService
    {
        ResultGetTeacherTypesDto GetById(RequestGetTeacherTypesByIdDto request);
        ResultGetTeacherTypesDto GetAll();
    }
}
