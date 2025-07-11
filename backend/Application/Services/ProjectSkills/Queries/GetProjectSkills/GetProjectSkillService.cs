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

        public ResultGetProjectSkillDto GetById(RequestGetProjectSkillByIdDto request)
        {
            var ProjectSkills = _context.ProjectSkills.Where(x => x.ProjectSkillId == request.ProjectSkillId);
            var ProjectSkillList = ProjectSkills.Select(p => new GetProjectSkillDto
            {
                Image = p.Image,
                Title = p.Title,
                Description = p.Description,
                ProjectSkillId = p.ProjectSkillId,
                ProjectSkillParentId = p.ProjectSkillParentId,

            }).OrderBy(x => x.ProjectSkillId).ToList();
            return new ResultGetProjectSkillDto
            {
                ProjectSkills = ProjectSkillList,
                Rows = ProjectSkillList.Count,
            };
        }


        public ResultGetProjectSkillDto GetChildrenById(RequestGetProjectSkillByIdDto request)
        {
            var ProjectSkills = _context.ProjectSkills.Where(x => x.ProjectSkillParentId == request.ProjectSkillId);
            var ProjectSkillList = ProjectSkills.Select(p => new GetProjectSkillDto
            {
                Image = p.Image,
                Title = p.Title,
                Description = p.Description,
                ProjectSkillId = p.ProjectSkillId,
                ProjectSkillParentId = p.ProjectSkillParentId,

            }).OrderBy(x => x.ProjectSkillId).ToList();
            return new ResultGetProjectSkillDto
            {
                ProjectSkills = ProjectSkillList,
                Rows = ProjectSkillList.Count,
            };
        }


        public ResultGetProjectSkillDto GetAll()
        {
            var ProjectSkills = _context.ProjectSkills;
            var ProjectSkillList = ProjectSkills.Select(p => new GetProjectSkillDto
            {
                Image = p.Image,
                Title = p.Title,
                Description = p.Description,
                ProjectSkillId = p.ProjectSkillId,
                ProjectSkillParentId = p.ProjectSkillParentId,

            }).OrderBy(x => x.ProjectSkillId).ToList();
            return new ResultGetProjectSkillDto
            {
                ProjectSkills = ProjectSkillList,
                Rows = ProjectSkillList.Count,
            };
        }


        public ResultGetProjectSkillDto GetAllParent()
        {
            var ProjectSkills = _context.ProjectSkills.Where(t => t.ProjectSkillParentId == 0).ToList();
            var ProjectSkillList = ProjectSkills.Select(p => new GetProjectSkillDto
            {
                Image = p.Image,
                Title = p.Title,
                Description = p.Description,
                ProjectSkillId = p.ProjectSkillId,
                ProjectSkillParentId = p.ProjectSkillParentId,

            }).OrderBy(x => x.ProjectSkillId).ToList();
            return new ResultGetProjectSkillDto
            {
                ProjectSkills = ProjectSkillList,
                Rows = ProjectSkillList.Count,
            };
        }
    }
}
