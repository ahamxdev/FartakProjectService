

namespace Application.Services.Courses.Queries.GetCourses
{
    public interface IGetCourseService
    {
        ResultGetCourseDto GetAll();
        ResultGetCourseDto GetByTeacherId(RequestGetCourseByTeacherIdDto request);
        ResultGetCourseDto GetByUserId(RequestGetCourseByIdListDto request);
        ResultGetCourseDto GetById(RequestGetCourseByIdDto request);
        public ResultGetCourseDto GetAllAccept();
        public ResultGetCourseDto GetAllReject();
        public ResultGetCourseDto GetAllWaiting();
    }
}
