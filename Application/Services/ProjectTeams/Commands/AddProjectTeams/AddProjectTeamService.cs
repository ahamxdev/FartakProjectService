using Application.Interfaces.Contexts;
using Common.Dto;
using Domain.Entities;
using Domain.Entities.Projects;
using Microsoft.Extensions.Configuration;

namespace Application.Services.ProjectTeams.Commands.AddProjectTeams
{
    public class AddProjectTeamService : IAddProjectTeamService
    {
        private readonly IDatabaseContext _context;
        private readonly IConfiguration _configuration;
        public AddProjectTeamService(IDatabaseContext context,
                              IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }
        public ResultDto<ResultAddProjectTeamDto> Execute(RequestAddProjectTeamDto request)
        {


            try
            {
                ProjectTeam ProjectTeam = new ProjectTeam
                {
                    TeamName = request.TeamName,
                    ProjectTypeId= request.ProjectTypeId,
                    TeamDescription = request.TeamDescription,
                };
                _context.ProjectTeams.Add(ProjectTeam);
                _context.SaveChanges();
                return new ResultDto<ResultAddProjectTeamDto>
                {
                    Data = new ResultAddProjectTeamDto
                    {
                        ProjectTeamId = ProjectTeam.ProjectTeamId,
                    },
                    IsSuccess = true,
                    Message = "با موفقیت ثبت شد."
                };
            }
            catch
            {
                return new ResultDto<ResultAddProjectTeamDto>
                {
                    Data = new ResultAddProjectTeamDto { ProjectTeamId = 0 },
                    IsSuccess = false,
                    Message = "ثبت با خطا مواجه شد."
                };

            }
        }

    }
}
