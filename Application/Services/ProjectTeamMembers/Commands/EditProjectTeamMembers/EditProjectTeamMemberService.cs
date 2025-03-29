using Application.Interfaces.Contexts;
using Common.Dto;
using Microsoft.Extensions.Configuration;

namespace Application.Services.ProjectTeamMembers.Commands.EditProjectTeamMembers
{
    public class EditProjectTeamMemberService : IEditProjectTeamMemberService
    {
        private readonly IDatabaseContext _context;
        private readonly IConfiguration _configuration;

        public EditProjectTeamMemberService(IDatabaseContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }
        public ResultDto Execute(RequestEditProjectTeamMemberDto request)
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


            try
            {

                ProjectTeamMember.MemberId = request.MemberId;
                ProjectTeamMember.IsHead = request.IsHead;


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
