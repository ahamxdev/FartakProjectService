using Application.Interfaces.Contexts;


namespace Application.Services.ProjectSkills.Queries.GetProjectSkills
{
    public class GetProjectSkillService : IGetProjectSkillService
    {
        private readonly IDatabaseContext _context;
        public GetProjectSkillService(IDatabaseContext context)
        {
            _context = context;
        }

        public ResultGetProjectSkillDto GetById(RequestGetProjectSkillsByIdDto request)
        {
            var ProjectSkills = _context.ProjectSkills.Where(x => x.ProjectSkillId == request.ProjectSkillId);
            var ProjectSkillsList = ProjectSkills.Select(p => new GetProjectSkillDto
            {
                Image = p.Image,
                Title = p.Title,
                Description = p.Description,
                ProjectSkillId = p.ProjectSkillId,
                ProjectSkillParentId = p.ProjectSkillParentId,

            }).OrderBy(x => x.ProjectSkillId).ToList();
            return new ResultGetProjectSkillDto
            {
                ProjectSkills = ProjectSkillsList,
                Rows = ProjectSkillsList.Count,
            };
        }


        public ResultGetProjectSkillDto GetChildrenById(RequestGetProjectSkillsByIdDto request)
        {
            var ProjectSkills = _context.ProjectSkills.Where(x => x.ProjectSkillParentId == request.ProjectSkillId);
            var ProjectSkillsList = ProjectSkills.Select(p => new GetProjectSkillDto
            {
                Image = p.Image,
                Title = p.Title,
                Description = p.Description,
                ProjectSkillId = p.ProjectSkillId,
                ProjectSkillParentId = p.ProjectSkillParentId,

            }).OrderBy(x => x.ProjectSkillId).ToList();
            return new ResultGetProjectSkillDto
            {
                ProjectSkills = ProjectSkillsList,
                Rows = ProjectSkillsList.Count,
            };
        }


        public ResultGetProjectSkillDto GetAll()
        {
            var ProjectSkills = _context.ProjectSkills;
            var ProjectSkillsList = ProjectSkills.Select(p => new GetProjectSkillDto
            {
                Image = p.Image,
                Title = p.Title,
                Description = p.Description,
                ProjectSkillId = p.ProjectSkillId,
                ProjectSkillParentId = p.ProjectSkillParentId,

            }).OrderBy(x => x.ProjectSkillId).ToList();
            return new ResultGetProjectSkillDto
            {
                ProjectSkills = ProjectSkillsList,
                Rows = ProjectSkillsList.Count,
            };
        }


        public ResultGetProjectSkillDto GetAllParent()
        {
            var ProjectSkills = _context.ProjectSkills.Where(t => t.ProjectSkillParentId == 0).ToList();
            var ProjectSkillsList = ProjectSkills.Select(p => new GetProjectSkillDto
            {
                Image = p.Image,
                Title = p.Title,
                Description = p.Description,
                ProjectSkillId = p.ProjectSkillId,
                ProjectSkillParentId = p.ProjectSkillParentId,

            }).OrderBy(x => x.ProjectSkillId).ToList();
            return new ResultGetProjectSkillDto
            {
                ProjectSkills = ProjectSkillsList,
                Rows = ProjectSkillsList.Count,
            };
        }
    }
}
