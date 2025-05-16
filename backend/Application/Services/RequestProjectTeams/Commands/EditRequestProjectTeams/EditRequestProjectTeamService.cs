using Application.Interfaces.Contexts;
using Common.Dto;
using Microsoft.Extensions.Configuration;

namespace Application.Services.RequestProjectTeams.Commands.EditRequestProjectTeams
{
    public class EditRequestProjectTeamService : IEditRequestProjectTeamService
    {
        private readonly IDatabaseContext _context;
        private readonly IConfiguration _configuration;

        public EditRequestProjectTeamService(IDatabaseContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }
        public ResultDto Execute(RequestEditRequestProjectTeamDto request)
        {

            var RequestProjectTeam = _context.RequestProjectTeams.Find(request.RequestProjectTeamId);
            if (RequestProjectTeam == null)
            {
                return new ResultDto
                {
                    IsSuccess = false,
                    Message = "یافت نشد"
                };
            }


            try
            {

                RequestProjectTeam.Status = request.Status;
                RequestProjectTeam.ProjectId = request.ProjectId;
                RequestProjectTeam.ProjectTeamId = request.ProjectTeamId;
                RequestProjectTeam.Days = request.Days;
                RequestProjectTeam.Price = request.Price;



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
