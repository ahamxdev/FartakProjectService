using Application.Interfaces.Contexts;
using Application.Services.ProjectCategories.Queries.GetProjectCategories;

namespace Application.Services.ProjectCategories.Commands.AddProjectCategories
{
    public class GetProjectCategoryService : IGetProjectCategoryService
    {
        private readonly IDatabaseContext _context;
        public GetProjectCategoryService(IDatabaseContext context)
        {
            _context = context;
        }

        public ResultGetProjectCategoryDto GetById(RequestGetProjectCategoryByIdDto request)
        {
            var ProjectCategory = _context.ProjectCategories.Where(x => x.ProjectCategoryId == request.ProjectCategoryId);
            var ProjectCategoryList = ProjectCategory.Select(p => new GetProjectCategoryDto
            {
                Name = p.Name,
                ProjectCategoryId = p.ProjectCategoryId,

            }).OrderBy(x => x.ProjectCategoryId).ToList();
            return new ResultGetProjectCategoryDto
            {
                ProjectCategories = ProjectCategoryList,
                Rows = ProjectCategoryList.Count,
            };
        }

        public ResultGetProjectCategoryDto GetAll()
        {
            var ProjectCategory = _context.ProjectCategories;
            var ProjectCategoryList = ProjectCategory.Select(p => new GetProjectCategoryDto
            {
                Name = p.Name,
                ProjectCategoryId = p.ProjectCategoryId,

            }).OrderBy(x => x.ProjectCategoryId).ToList();
            return new ResultGetProjectCategoryDto
            {
                ProjectCategories = ProjectCategoryList,
                Rows = ProjectCategoryList.Count,
            };
        }
    }
}
