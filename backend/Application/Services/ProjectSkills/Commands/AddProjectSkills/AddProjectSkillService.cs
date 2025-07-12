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
        public ResultDto<ResultAddProjectSkillDto> ExecuteParent(RequestAddProjectSkillsParentDto request)
        {


            try
            {
                ProjectSkill ProjectSkills = new ProjectSkill
                {
                    Image = request.Image,
                    Title = request.Title,
                    Description = request.Description,
                    ProjectSkillParentId = 0

                };
                _context.ProjectSkills.Add(ProjectSkills);
                _context.SaveChanges();
                return new ResultDto<ResultAddProjectSkillDto>
                {
                    Data = new ResultAddProjectSkillDto
                    {
                        ProjectSkillId = ProjectSkills.ProjectSkillId
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


        public ResultDto<ResultAddProjectSkillDto> ExecuteChild(RequestAddProjectSkillsChildDto request)
        {


            try
            {
                ProjectSkill ProjectSkills = new ProjectSkill
                {
                    Image = request.Image,
                    Title = request.Title,
                    Description = request.Description,
                    ProjectSkillParentId = request.ProjectSkillParentId,

                };
                _context.ProjectSkills.Add(ProjectSkills);
                _context.SaveChanges();
                return new ResultDto<ResultAddProjectSkillDto>
                {
                    Data = new ResultAddProjectSkillDto
                    {
                        ProjectSkillId = ProjectSkills.ProjectSkillId
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
