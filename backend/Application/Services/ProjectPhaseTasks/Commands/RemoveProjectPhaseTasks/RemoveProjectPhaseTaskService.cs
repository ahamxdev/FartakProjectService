using Application.Interfaces.Contexts;
using Application.Services.ProjectPhaseTasks.Commands.RemoveProjectPhaseTask;
using Common.Dto;


namespace Application.Services.ProjectPhaseTasks.Commands.RemoveProjectPhaseTasks
{
    public class RemoveProjectPhaseTaskService : IRemoveProjectPhaseTaskService
    {

        private readonly IDatabaseContext _context;


        public RemoveProjectPhaseTaskService(IDatabaseContext context)
        {
            _context = context;
        }

        public ResultDto Execute(RequestRemoveProjectPhaseTaskDto request)
        {
            var ProjectPhaseTask = _context.ProjectPhaseTasks.Find(request.ProjectPhaseTaskId);
            if (ProjectPhaseTask == null)
            {
                return new ResultDto
                {
                    IsSuccess = false,
                    Message = "یافت نشد"
                };
            }

            _context.ProjectPhaseTasks.Remove(ProjectPhaseTask);
            _context.SaveChanges();
            return new ResultDto()
            {
                IsSuccess = true,
                Message = "با موفقیت حذف شد"
            };
        }
    }
}
