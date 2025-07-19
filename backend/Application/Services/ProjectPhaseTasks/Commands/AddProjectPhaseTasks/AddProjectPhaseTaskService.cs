using Application.Interfaces.Contexts;
using Common.Dto;
using Domain.Entities.Projects;
using Microsoft.Extensions.Configuration;

namespace Application.Services.ProjectPhaseTasks.Commands.AddProjectPhaseTask
{
    public class AddProjectPhaseTaskService : IAddProjectPhaseTaskService
    {
        private readonly IDatabaseContext _context;
        private readonly IConfiguration _configuration;
        public AddProjectPhaseTaskService(IDatabaseContext context,
                              IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }
        public ResultDto<ResultAddProjectPhaseTaskDto> Execute(RequestAddProjectPhaseTaskDto request)
        {


            try
            {
                ProjectPhaseTask ProjectPhaseTask = new ProjectPhaseTask
                {
                    ProjectPhaseId = request.ProjectPhaseId,
                    Price = request.Price,
                    CreateDate = request.CreateDate,
                    DeadLine = request.DeadLine,
                    Title = request.Title,
                    Status = request.Status,
                    Description = request.Description,
                    Participation = request.Participation,
                    Duration = request.Duration

                };
                _context.ProjectPhaseTasks.Add(ProjectPhaseTask);
                _context.SaveChanges();
                return new ResultDto<ResultAddProjectPhaseTaskDto>
                {
                    Data = new ResultAddProjectPhaseTaskDto
                    {
                        ProjectPhaseTaskId = ProjectPhaseTask.ProjectPhaseTaskId
                    },
                    IsSuccess = true,
                    Message = "با موفقیت ثبت شد."
                };
            }
            catch
            {
                return new ResultDto<ResultAddProjectPhaseTaskDto>
                {
                    Data = new ResultAddProjectPhaseTaskDto { ProjectPhaseTaskId = 0 },
                    IsSuccess = false,
                    Message = "ثبت با خطا مواجه شد."
                };

            }
        }

    }
}
