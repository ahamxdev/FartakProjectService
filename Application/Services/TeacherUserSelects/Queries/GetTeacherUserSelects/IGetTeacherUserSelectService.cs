namespace Application.Services.TeacherUserSelects.Queries.GetTeacherUserSelects
{
    public interface IGetTeacherUserSelectService
    {
        ResultGetTeacherUserSelectDto GetById(RequestGetTeacherUserSelectByIdDto request);
        ResultGetTeacherUserSelectDto GetByTeacherId(RequestGetTeacherUserSelectByTeacherIdDto request);
        ResultGetTeacherUserSelectDto GetByStudentId(RequestGetTeacherUserSelectByStudentIdDto request);
        ResultGetTeacherUserSelectDto GetAll();
    }
}
