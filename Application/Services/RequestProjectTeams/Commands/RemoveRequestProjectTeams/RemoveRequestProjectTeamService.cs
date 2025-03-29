using Application.Interfaces.Contexts;
using Application.Services.RequestProjectTeams.Commands.RemoveRequestProjectTeam;
using Common.Dto;


namespace Application.Services.RequestProjectTeams.Commands.RemoveRequestProjectTeams
{
    public class RemoveRequestProjectTeamService : IRemoveRequestProjectTeamService
    {

        private readonly IDatabaseContext _context;


        public RemoveRequestProjectTeamService(IDatabaseContext context)
        {
            _context = context;
        }

        public ResultDto Execute(RequestRemoveRequestProjectTeamDto request)
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

            _context.RequestProjectTeams.Remove(RequestProjectTeam);
            _context.SaveChanges();
            return new ResultDto()
            {
                IsSuccess = true,
                Message = "با موفقیت حذف شد"
            };
        }
    }
}
