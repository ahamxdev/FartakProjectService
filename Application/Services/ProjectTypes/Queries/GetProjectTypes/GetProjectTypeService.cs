using Application.Interfaces.Contexts;
using Application.Services.ProjectTypes.Queries.GetProjectTypes;

namespace Application.Services.ProjectTypes.Commands.AddProjectTypes
{
    public class GetProjectTypeService : IGetProjectTypeService
    {
        private readonly IDatabaseContext _context;
        public GetProjectTypeService(IDatabaseContext context)
        {
            _context = context;
        }

        public ResultGetProjectTypeDto GetById(RequestGetProjectTypeByIdDto request)
        {
            var ProjectType = _context.ProjectTypes.Where(x => x.ProjectTypeId == request.ProjectTypeId);
            var ProjectTypeList = ProjectType.Select(p => new GetProjectTypeDto
            {
                Title = p.Title,
                ProjectTypeId = p.ProjectTypeId,

            }).OrderBy(x => x.ProjectTypeId).ToList();
            return new ResultGetProjectTypeDto
            {
                ProjectTypes = ProjectTypeList,
                Rows = ProjectTypeList.Count,
            };
        }





        public ResultGetProjectTypeDto GetAll()
        {
            var ProjectType = _context.ProjectTypes;
            var ProjectTypeList = ProjectType.Select(p => new GetProjectTypeDto
            {
                Title = p.Title,
                ProjectTypeId = p.ProjectTypeId,

            }).OrderBy(x => x.ProjectTypeId).ToList();
            return new ResultGetProjectTypeDto
            {
                ProjectTypes = ProjectTypeList,
                Rows = ProjectTypeList.Count,
            };
        }
    }
}
