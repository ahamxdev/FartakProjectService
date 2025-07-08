using Application.Interfaces.Contexts;
using Application.Services.Users.Queries.GetUsers;

namespace Application.Services.Projects.Queries.GetProjects
{
    public class GetProjectService : IGetProjectService
    {
        private readonly IDatabaseContext _context;
        private readonly IGetUserService _getUserService;
        public GetProjectService(IDatabaseContext context, IGetUserService getUserService)
        {
            _context = context;
            _getUserService = getUserService;
        }
        public ResultGetProjectDto GetAll()
        {
            var Project = _context.Projects;
            var ProjectList = Project.Select(p => new GetProjectDto
            {
                Description = p.Description,
                Image = p.Image,
                Duration = p.Duration,
                Title = p.Title,
                EndPrice=p.EndPrice,
                FinishPrice=p.FinishPrice,
                StartPrice=p.StartPrice,
                ProjectId = p.ProjectId,
                OwnerId = p.OwnerId,
                CreateDate=p.CreateDate,
                DeadLine = p.DeadLine,
                Status=p.Status,
                Priority = p.Priority,
                PriceType = p.PriceType,
                ProjectTypeId = p.ProjectTypeId,
                ProjectSkillId = p.ProjectSkillId

            }).OrderBy(x => x.ProjectId).ToList();
            return new ResultGetProjectDto
            {
                Projects = ProjectList,
                Rows = ProjectList.Count,
            };

        }



        public ResultGetProjectDto GetById(RequestGetProjectByIdDto request)
        {
            var Project = _context.Projects.Where(x => x.ProjectId == request.ProjectId);
            var ProjectList = Project.Select(p => new GetProjectDto
            {
                Description = p.Description,
                Image = p.Image,
                Title = p.Title,
                EndPrice = p.EndPrice,
                FinishPrice = p.FinishPrice,
                StartPrice = p.StartPrice,
                Duration = p.Duration,
                ProjectId = p.ProjectId,
                CreateDate = p.CreateDate,
                DeadLine = p.DeadLine,
                Status = p.Status,
                Priority = p.Priority,
                PriceType = p.PriceType,
                OwnerId = p.OwnerId,
                ProjectTypeId = p.ProjectTypeId,
                ProjectSkillId = p.ProjectSkillId

            }).OrderBy(x => x.ProjectId).ToList();
            return new ResultGetProjectDto
            {
                Projects = ProjectList,
                Rows = ProjectList.Count,
            };

        }

        public ResultGetProjectDto GetByOwnerId(RequestGetProjectByOwnerIdDto request)
        {
            var Project = _context.Projects.Where(x => x.OwnerId == request.OwnerId);
            var ProjectList = Project.Select(p => new GetProjectDto
            {
                Description = p.Description,
                Image = p.Image,
                Title = p.Title,
                EndPrice = p.EndPrice,
                FinishPrice = p.FinishPrice,
                StartPrice = p.StartPrice,
                ProjectId = p.ProjectId,
                Duration = p.Duration,
                OwnerId = p.OwnerId,
                CreateDate = p.CreateDate,
                DeadLine = p.DeadLine,
                Status = p.Status,
                Priority = p.Priority,
                PriceType = p.PriceType,
                ProjectTypeId = p.ProjectTypeId,
                ProjectSkillId = p.ProjectSkillId

            }).OrderBy(x => x.ProjectId).ToList();
            return new ResultGetProjectDto
            {
                Projects = ProjectList,
                Rows = ProjectList.Count,
            };

        }


        public ResultGetProjectDto GetByProjectTypeId(RequestGetProjectByProjectTypeIdDto request)
        {
            var Project = _context.Projects.Where(x => x.ProjectTypeId == request.ProjectTypeId);
            var ProjectList = Project.Select(p => new GetProjectDto
            {
                Description = p.Description,
                Image = p.Image,
                Title = p.Title,
                EndPrice = p.EndPrice,
                FinishPrice = p.FinishPrice,
                StartPrice = p.StartPrice,
                ProjectId = p.ProjectId,
                OwnerId = p.OwnerId,
                CreateDate = p.CreateDate,
                DeadLine = p.DeadLine,
                Status = p.Status,
                Priority = p.Priority,
                PriceType = p.PriceType,
                Duration = p.Duration,
                ProjectTypeId = p.ProjectTypeId,
                ProjectSkillId = p.ProjectSkillId

            }).OrderBy(x => x.ProjectId).ToList();
            return new ResultGetProjectDto
            {
                Projects = ProjectList,
                Rows = ProjectList.Count,
            };

        }

    }

}
