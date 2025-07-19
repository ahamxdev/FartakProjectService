using Application.Interfaces.Contexts;
using Application.Services.ProjectPhaseTasks.Commands.EditProjectPhaseTask;
using Common.Dto;
using Microsoft.Extensions.Configuration;

namespace Application.Services.ProjectPhaseTasks.Commands.EditProjectPhaseTask
{
    public class EditProjectPhaseTaskService : IEditProjectPhaseTaskService
    {
        private readonly IDatabaseContext _context;
        private readonly IConfiguration _configuration;

        public EditProjectPhaseTaskService(IDatabaseContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }
        public ResultDto Execute(RequestEditProjectPhaseTaskDto request)
        {

            var ProjectPhaseTask = _context.ProjectPhaseTasks.Find(request.ProjectPhaseId);
            if (ProjectPhaseTask == null)
            {
                return new ResultDto
                {
                    IsSuccess = false,
                    Message = "یافت نشد"
                };
            }


            try
            {

                ProjectPhaseTask.Duration = request.Duration;
                ProjectPhaseTask.Price = request.Price;
                ProjectPhaseTask.Title = request.Title;
                ProjectPhaseTask.Status = request.Status;
                ProjectPhaseTask.Description = request.Description;
                ProjectPhaseTask.Participation = request.Participation;
                ProjectPhaseTask.DeadLine = request.DeadLine;


                _context.SaveChanges();

                return new ResultDto()
                {
                    IsSuccess = true,
                    Message = "ویرایش انجام شد"
                };
            }
            catch
            {
                return new ResultDto()
                {
                    IsSuccess = false,
                    Message = "ویرایش با خطا مواجه شد"
                };
            }

        }


    }
}
