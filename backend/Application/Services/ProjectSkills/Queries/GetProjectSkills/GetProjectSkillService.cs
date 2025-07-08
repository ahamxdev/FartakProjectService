using Application.Interfaces.Contexts;
using Application.Services.ProjectSkills.Queries.GetProjectSkills;

namespace Application.Services.ProjectSkills.Commands.AddProjectSkills
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
            var ProjectSkill = _context.ProjectSkills.Where(x => x.ProjectSkillId == request.ProjectSkillId);
            var ProjectSkillList = ProjectSkill.Select(p => new GetProjectSkillDto
            {
                Title = p.Title,
                ProjectSkillId = p.ProjectSkillId,

            }).OrderBy(x => x.ProjectSkillId).ToList();
            return new ResultGetProjectSkillDto
            {
                ProjectSkills = ProjectSkillList,
                Rows = ProjectSkillList.Count,
            };
        }





        public ResultGetProjectSkillDto GetAll()
        {
            var ProjectSkill = _context.ProjectSkills;
            var ProjectSkillList = ProjectSkill.Select(p => new GetProjectSkillDto
            {
                Title = p.Title,
                ProjectSkillId = p.ProjectSkillId,

            }).OrderBy(x => x.ProjectSkillId).ToList();
            return new ResultGetProjectSkillDto
            {
                ProjectSkills = ProjectSkillList,
                Rows = ProjectSkillList.Count,
            };
        }
    }
}
