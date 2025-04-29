using Application.Interfaces.Contexts;
using Common.Dto;
using Microsoft.Extensions.Configuration;

namespace Application.Services.ProjectTeams.Commands.EditProjectTeams
{
    public class EditProjectTeamService : IEditProjectTeamService
    {
        private readonly IDatabaseContext _context;
        private readonly IConfiguration _configuration;

        public EditProjectTeamService(IDatabaseContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }
        public ResultDto Execute(RequestEditProjectTeamDto request)
        {

            var ProjectTeam = _context.ProjectTeams.Find(request.ProjectTeamId);
            if (ProjectTeam == null)
            {
                return new ResultDto
                {
                    IsSuccess = false,
                    Message = "یافت نشد"
                };
            }


            try
            {

                ProjectTeam.TeamName = request.TeamName;
                ProjectTeam.TeamDescription = request.TeamDescription;
                ProjectTeam.ProjectTypeId = request.ProjectTypeId;


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
