using Application.Interfaces.Contexts;
using Common.Dto;
using Domain.Entities;
using Domain.Entities.Projects;
using Microsoft.Extensions.Configuration;

namespace Application.Services.RequestProjectTeams.Commands.AddRequestProjectTeams
{
    public class AddRequestProjectTeamService : IAddRequestProjectTeamService
    {
        private readonly IDatabaseContext _context;
        private readonly IConfiguration _configuration;
        public AddRequestProjectTeamService(IDatabaseContext context,
                              IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }
        public ResultDto<ResultAddRequestProjectTeamDto> Execute(RequestAddRequestProjectTeamDto request)
        {


            try
            {
                RequestProjectTeam RequestProjectTeam = new RequestProjectTeam
                {
                    ProjectId = request.ProjectId,
                    ProjectTeamId=request.ProjectTeamId,
                    Status= request.Status,
                    Days= request.Days,
                    Price= request.Price,
                };
                _context.RequestProjectTeams.Add(RequestProjectTeam);
                _context.SaveChanges();
                return new ResultDto<ResultAddRequestProjectTeamDto>
                {
                    Data = new ResultAddRequestProjectTeamDto
                    {
                        RequestProjectTeamId = RequestProjectTeam.RequestProjectTeamId,
                    },
                    IsSuccess = true,
                    Message = "با موفقیت ثبت شد."
                };
            }
            catch
            {
                return new ResultDto<ResultAddRequestProjectTeamDto>
                {
                    Data = new ResultAddRequestProjectTeamDto { RequestProjectTeamId = 0 },
                    IsSuccess = false,
                    Message = "ثبت با خطا مواجه شد."
                };

            }
        }

    }
}
