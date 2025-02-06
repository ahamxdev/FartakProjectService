namespace Application.Services.TeacherUsers.Queries.GetTeacherUsers
{
    public interface IGetTeacherUserService
    {
        ResultGetTeacherUserDto GetAll();
        ResultGetTeacherUserDto GetByTeacherId(RequestGetTeacherUserByTeacherIdDto request);
        ResultGetTeacherUserDto GetByTeacherUserId(RequestGetTeacherUserByIdDto request);
        ResultGetTeacherUserDto GetByTeacherTypeId(RequestGetTeacherUserByTeacherTypeIdDto request);
    }
}
