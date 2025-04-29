using Application.Interfaces.Contexts;
using Common.Dto;
using Domain.Entities.Projects;
using Microsoft.Extensions.Configuration;

namespace Application.Services.ProjectPhases.Commands.AddProjectPhase
{
    public class AddProjectPhaseService : IAddProjectPhaseService
    {
        private readonly IDatabaseContext _context;
        private readonly IConfiguration _configuration;
        public AddProjectPhaseService(IDatabaseContext context,
                              IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }
        public ResultDto<ResultAddProjectPhaseDto> Execute(RequestAddProjectPhaseDto request)
        {


            try
            {
                ProjectPhase ProjectPhase = new ProjectPhase
                {
                    ProjectTeamId=request.ProjectTeamId,
                    ProjectId=request.ProjectId,
                    Price = request.Price,
                    CreateDate = request.CreateDate,
                    DeadLine = request.DeadLine,
                    Status = request.Status,
                    Duration = request.Duration

                };
                _context.ProjectPhases.Add(ProjectPhase);
                _context.SaveChanges();
                return new ResultDto<ResultAddProjectPhaseDto>
                {
                    Data = new ResultAddProjectPhaseDto
                    {
                        ProjectPhaseId = ProjectPhase.ProjectPhaseId
                    },
                    IsSuccess = true,
                    Message = "با موفقیت ثبت شد."
                };
            }
            catch
            {
                return new ResultDto<ResultAddProjectPhaseDto>
                {
                    Data = new ResultAddProjectPhaseDto { ProjectPhaseId = 0 },
                    IsSuccess = false,
                    Message = "ثبت با خطا مواجه شد."
                };

            }
        }

    }
}
