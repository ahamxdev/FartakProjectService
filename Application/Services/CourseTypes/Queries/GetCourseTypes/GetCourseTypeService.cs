using Application.Interfaces.Contexts;
using Application.Services.CourseTypes.Queries.GetCourseTypes;

namespace Application.Services.CourseTypes.Commands.AddCourseTypes
{
    public class GetCourseTypeService : IGetCourseTypeService
    {
        private readonly IDatabaseContext _context;
        public GetCourseTypeService(IDatabaseContext context)
        {
            _context = context;
        }

        public ResultGetCourseTypeDto GetById(RequestGetCourseTypeByIdDto request)
        {
            var CourseType = _context.CourseTypes.Where(x => x.CourseTypeId == request.CourseTypeId);
            var CourseTypeList = CourseType.Select(p => new GetCourseTypeDto
            {
                Name = p.Name,
                CourseTypeId = p.CourseTypeId,

            }).OrderBy(x => x.CourseTypeId).ToList();
            return new ResultGetCourseTypeDto
            {
                CourseTypes = CourseTypeList,
                Rows = CourseTypeList.Count,
            };
        }

        public ResultGetCourseTypeDto GetAll()
        {
            var CourseType = _context.CourseTypes;
            var CourseTypeList = CourseType.Select(p => new GetCourseTypeDto
            {
                Name = p.Name,
                CourseTypeId = p.CourseTypeId,

            }).OrderBy(x => x.CourseTypeId).ToList();
            return new ResultGetCourseTypeDto
            {
                CourseTypes = CourseTypeList,
                Rows = CourseTypeList.Count,
            };
        }
    }
}
