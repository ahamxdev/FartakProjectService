using Application.Interfaces.Contexts;
using Common.Dto;
using Domain.Entities.Projects;
using Microsoft.Extensions.Configuration;

namespace Application.Services.ProjectSkills.Commands.AddProjectSkills
{
    public class AddProjectSkillService : IAddProjectSkillService
    {
        private readonly IDatabaseContext _context;
        private readonly IConfiguration _configuration;
        public AddProjectSkillService(IDatabaseContext context,
                              IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }
        public ResultDto<ResultAddProjectSkillDto> Execute(RequestAddProjectSkillDto request)
        {


            try
            {
                ProjectSkill ProjectSkill = new ProjectSkill
                {
                    Title = request.Title,

                };
                _context.ProjectSkills.Add(ProjectSkill);
                _context.SaveChanges();
                return new ResultDto<ResultAddProjectSkillDto>
                {
                    Data = new ResultAddProjectSkillDto
                    {
                        ProjectSkillId = ProjectSkill.ProjectSkillId
                    },
                    IsSuccess = true,
                    Message = "با موفقیت ثبت شد."
                };
            }
            catch
            {
                return new ResultDto<ResultAddProjectSkillDto>
                {
                    Data = new ResultAddProjectSkillDto { ProjectSkillId = 0 },
                    IsSuccess = false,
                    Message = "ثبت با خطا مواجه شد."
                };

            }
        }

    }
}
