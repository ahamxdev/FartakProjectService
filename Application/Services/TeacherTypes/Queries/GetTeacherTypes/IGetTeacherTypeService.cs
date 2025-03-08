namespace Application.Services.TeacherTypes.Queries.GetTeacherTypes
{
    public interface IGetTeacherTypeService
    {
        ResultGetTeacherTypesDto GetById(RequestGetTeacherTypesByIdDto request);
        ResultGetTeacherTypesDto GetAll();
        ResultGetTeacherTypesDto GetAllParent();
        ResultGetTeacherTypesDto GetChildrenById(RequestGetTeacherTypesByIdDto request);
    }
}
