

namespace Application.Services.Courses.Queries.GetCourses
{
    public interface IGetCourseService
    {
        ResultGetCourseDto GetAll();
        ResultGetCourseDto GetByTeacherId(RequestGetCourseByTeacherIdDto request);
        ResultGetCourseDto GetByUserId(RequestGetCourseByIdListDto request);
        ResultGetCourseDto GetById(RequestGetCourseByIdDto request);
        ResultGetCourseDto GetAllAccept();
        ResultGetCourseDto GetAllReject();
        ResultGetCourseDto GetAllWaiting();
        ResultGetCourseDto GetByCourseTypeId(RequestGetCourseByCourseTypeIdDto request);
    }
}
