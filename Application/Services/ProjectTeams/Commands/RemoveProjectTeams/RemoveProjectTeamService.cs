using Application.Interfaces.Contexts;
using Common.Dto;


namespace Application.Services.ProjectTeams.Commands.RemoveProjectTeams
{
    public class RemoveProjectTeamService : IRemoveProjectTeamService
    {

        private readonly IDatabaseContext _context;


        public RemoveProjectTeamService(IDatabaseContext context)
        {
            _context = context;
        }

        public ResultDto Execute(RequestRemoveProjectTeamDto request)
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

            _context.ProjectTeams.Remove(ProjectTeam);
            _context.SaveChanges();
            return new ResultDto()
            {
                IsSuccess = true,
                Message = "با موفقیت حذف شد"
            };
        }
    }
}
