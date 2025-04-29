using Application.Interfaces.Contexts;
using Common.Dto;


namespace Application.Services.ProjectTeamMembers.Commands.RemoveProjectTeamMembers
{
    public class RemoveProjectTeamMemberService : IRemoveProjectTeamMemberService
    {

        private readonly IDatabaseContext _context;


        public RemoveProjectTeamMemberService(IDatabaseContext context)
        {
            _context = context;
        }

        public ResultDto Execute(RequestRemoveProjectTeamMemberDto request)
        {
            var ProjectTeamMember = _context.ProjectTeamMembers.Find(request.ProjectTeamMemberId);
            if (ProjectTeamMember == null)
            {
                return new ResultDto
                {
                    IsSuccess = false,
                    Message = "یافت نشد"
                };
            }

            _context.ProjectTeamMembers.Remove(ProjectTeamMember);
            _context.SaveChanges();
            return new ResultDto()
            {
                IsSuccess = true,
                Message = "با موفقیت حذف شد"
            };
        }
    }
}
