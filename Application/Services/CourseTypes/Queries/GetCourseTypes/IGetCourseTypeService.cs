namespace Application.Services.CourseTypes.Queries.GetCourseTypes
{
    public interface IGetCourseTypeService
    {
        ResultGetCourseTypeDto GetById(RequestGetCourseTypeByIdDto request);
        ResultGetCourseTypeDto GetAll();
    }
}
