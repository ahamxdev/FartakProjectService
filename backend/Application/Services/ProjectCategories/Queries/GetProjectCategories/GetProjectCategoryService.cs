using Application.Interfaces.Contexts;


namespace Application.Services.ProjectCategories.Queries.GetProjectCategories
{
    public class GetProjectCategoryService : IGetProjectCategoryService
    {
        private readonly IDatabaseContext _context;
        public GetProjectCategoryService(IDatabaseContext context)
        {
            _context = context;
        }

        public ResultGetProjectCategoriesDto GetById(RequestGetProjectCategoriesByIdDto request)
        {
            var ProjectCategories = _context.ProjectCategories.Where(x => x.ProjectCategoryId == request.ProjectCategoryId);
            var ProjectCategoriesList = ProjectCategories.Select(p => new GetProjectCategoriesDto
            {
                Title = p.Title,
                ProjectCategoryId = p.ProjectCategoryId,
                ProjectCategoryParentId = p.ProjectCategoryParentId,

            }).OrderBy(x => x.ProjectCategoryId).ToList();
            return new ResultGetProjectCategoriesDto
            {
                ProjectCategories = ProjectCategoriesList,
                Rows = ProjectCategoriesList.Count,
            };
        }


        public ResultGetProjectCategoriesDto GetChildrenById(RequestGetProjectCategoriesByIdDto request)
        {
            var ProjectCategories = _context.ProjectCategories.Where(x => x.ProjectCategoryParentId == request.ProjectCategoryId);
            var ProjectCategoriesList = ProjectCategories.Select(p => new GetProjectCategoriesDto
            {
                Title = p.Title,
                ProjectCategoryId = p.ProjectCategoryId,
                ProjectCategoryParentId = p.ProjectCategoryParentId,

            }).OrderBy(x => x.ProjectCategoryId).ToList();
            return new ResultGetProjectCategoriesDto
            {
                ProjectCategories = ProjectCategoriesList,
                Rows = ProjectCategoriesList.Count,
            };
        }


        public ResultGetProjectCategoriesDto GetAll()
        {
            var ProjectCategories = _context.ProjectCategories;
            var ProjectCategoriesList = ProjectCategories.Select(p => new GetProjectCategoriesDto
            {
                Title = p.Title,
                ProjectCategoryId = p.ProjectCategoryId,
                ProjectCategoryParentId = p.ProjectCategoryParentId,

            }).OrderBy(x => x.ProjectCategoryId).ToList();
            return new ResultGetProjectCategoriesDto
            {
                ProjectCategories = ProjectCategoriesList,
                Rows = ProjectCategoriesList.Count,
            };
        }


        public ResultGetProjectCategoriesDto GetAllParent()
        {
            var ProjectCategories = _context.ProjectCategories.Where(t => t.ProjectCategoryParentId == 0).ToList();
            var ProjectCategoriesList = ProjectCategories.Select(p => new GetProjectCategoriesDto
            {
                Title = p.Title,
                ProjectCategoryId = p.ProjectCategoryId,
                ProjectCategoryParentId = p.ProjectCategoryParentId,

            }).OrderBy(x => x.ProjectCategoryId).ToList();
            return new ResultGetProjectCategoriesDto
            {
                ProjectCategories = ProjectCategoriesList,
                Rows = ProjectCategoriesList.Count,
            };
        }
    }
}
