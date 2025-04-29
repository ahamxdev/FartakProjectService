using Application.Interfaces.Contexts;
using Common.Dto;
using Domain.Entities;
using Domain.Entities.Projects;
using Microsoft.Extensions.Configuration;

namespace Application.Services.ProjectTeamMembers.Commands.AddProjectTeamMembers
{
    public class AddProjectTeamMemberService : IAddProjectTeamMemberService
    {
        private readonly IDatabaseContext _context;
        private readonly IConfiguration _configuration;
        public AddProjectTeamMemberService(IDatabaseContext context,
                              IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }
        public ResultDto<ResultAddProjectTeamMemberDto> Execute(RequestAddProjectTeamMemberDto request)
        {


            try
            {
                ProjectTeamMember ProjectTeamMember = new ProjectTeamMember
                {
                   IsHead=request.IsHead,
                   MemberId=request.MemberId,
                   ProjectTeamId=request.ProjectTeamId,
                };
                _context.ProjectTeamMembers.Add(ProjectTeamMember);
                _context.SaveChanges();
                return new ResultDto<ResultAddProjectTeamMemberDto>
                {
                    Data = new ResultAddProjectTeamMemberDto
                    {
                        ProjectTeamMemberId = ProjectTeamMember.ProjectTeamMemberId,
                    },
                    IsSuccess = true,
                    Message = "با موفقیت ثبت شد."
                };
            }
            catch
            {
                return new ResultDto<ResultAddProjectTeamMemberDto>
                {
                    Data = new ResultAddProjectTeamMemberDto { ProjectTeamMemberId = 0 },
                    IsSuccess = false,
                    Message = "ثبت با خطا مواجه شد."
                };

            }
        }

    }
}
