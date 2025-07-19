using Application.Interfaces.Contexts;
namespace Application.Services.ProjectPhaseTasks.Queries.GetProjectPhaseTask
{
    public class GetProjectPhaseTaskService : IGetProjectPhaseTaskService
    {
        private readonly IDatabaseContext _context;
        public GetProjectPhaseTaskService(IDatabaseContext context)
        {
            _context = context;
        }

        public ResultGetProjectPhaseTaskDto GetById(RequestGetProjectPhaseTaskByIdDto request)
        {
            var ProjectPhaseTask = _context.ProjectPhaseTasks.Where(x => x.ProjectPhaseTaskId == request.ProjectPhaseTaskId);
            var ProjectPhaseTaskList = ProjectPhaseTask.Select(p => new GetProjectPhaseTaskDto
            {
                Price = p.Price,
                Duration = p.Duration,
                ProjectPhaseId = p.ProjectPhaseId,
                 ProjectPhaseTaskId = p.ProjectPhaseTaskId,
                CreateDate = p.CreateDate,
                DeadLine = p.DeadLine,
                Status = p.Status,

            }).OrderBy(x => x.ProjectPhaseTaskId).ToList();
            return new ResultGetProjectPhaseTaskDto
            {
                ProjectPhaseTasks = ProjectPhaseTaskList,
                Rows = ProjectPhaseTaskList.Count,
            };
        }


        public ResultGetProjectPhaseTaskDto GetByProjectId(RequestGetProjectPhaseTaskByProjectIdDto request)
        {
            var ProjectPhaseTask = _context.ProjectPhaseTasks.Where(x => x.ProjectPhaseId == request.ProjectId);
            var ProjectPhaseTaskList = ProjectPhaseTask.Select(p => new GetProjectPhaseTaskDto
            {
                Price = p.Price,
                Duration = p.Duration,
                ProjectPhaseId = p.ProjectPhaseId,
                 CreateDate = p.CreateDate,
                DeadLine = p.DeadLine,
                Status = p.Status,
                ProjectPhaseTaskId = p.ProjectPhaseTaskId,

            }).OrderBy(x => x.ProjectPhaseTaskId).ToList();
            return new ResultGetProjectPhaseTaskDto
            {
                ProjectPhaseTasks = ProjectPhaseTaskList,
                Rows = ProjectPhaseTaskList.Count,
            };
        }
      

        public ResultGetProjectPhaseTaskDto GetAll()
        {
            var ProjectPhaseTask = _context.ProjectPhaseTasks;
            var ProjectPhaseTaskList = ProjectPhaseTask.Select(p => new GetProjectPhaseTaskDto
            {
                Price = p.Price  ,
                Duration = p.Duration,
                ProjectPhaseId = p.ProjectPhaseId,
                 ProjectPhaseTaskId = p.ProjectPhaseTaskId,
                CreateDate = p.CreateDate,
                DeadLine = p.DeadLine,
                

            }).OrderBy(x => x.ProjectPhaseTaskId).ToList();
            return new ResultGetProjectPhaseTaskDto
            {
                ProjectPhaseTasks = ProjectPhaseTaskList,
                Rows = ProjectPhaseTaskList.Count,
            };
        }
    }
}
