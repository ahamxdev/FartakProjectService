using Application.Interfaces.Contexts;
using Application.Services.TeacherTypes.Queries.GetTeacherTypes;


namespace Application.Services.TeacherTypes.Queries.GetTeacherTypes
{
    public class GetTeacherTypeService : IGetTeacherTypeService
    {
        private readonly IDatabaseContext _context;
        public GetTeacherTypeService(IDatabaseContext context)
        {
            _context = context;
        }

        public ResultGetTeacherTypesDto GetById(RequestGetTeacherTypesByIdDto request)
        {
            var TeacherTypes = _context.TeacherTypes.Where(x => x.TeacherTypeId == request.TeacherTypeId);
            var TeacherTypesList = TeacherTypes.Select(p => new GetTeacherTypesDto
            {
                Title = p.Title,
                TeacherTypeId = p.TeacherTypeId,

            }).OrderBy(x => x.TeacherTypeId).ToList();
            return new ResultGetTeacherTypesDto
            {
                TeacherTypes = TeacherTypesList,
                Rows = TeacherTypesList.Count,
            };
        }





        public ResultGetTeacherTypesDto GetAll()
        {
            var TeacherTypes = _context.TeacherTypes;
            var TeacherTypesList = TeacherTypes.Select(p => new GetTeacherTypesDto
            {
                Title = p.Title,
                TeacherTypeId = p.TeacherTypeId,

            }).OrderBy(x => x.TeacherTypeId).ToList();
            return new ResultGetTeacherTypesDto
            {
                TeacherTypes = TeacherTypesList,
                Rows = TeacherTypesList.Count,
            };
        }
    }
}
