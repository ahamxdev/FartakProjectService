using Application.Interfaces.Contexts;
using Application.Services.TeacherTypes.Commands.AddTeacherTypes;
using Common.Dto;
using Domain.Entities.TeacherUser;
using Microsoft.Extensions.Configuration;

namespace Application.Services.TeacherTypes.Commands.AddTeacherTypes
{
    public class AddTeacherTypeService : IAddTeacherTypeService
    {
        private readonly IDatabaseContext _context;
        private readonly IConfiguration _configuration;
        public AddTeacherTypeService(IDatabaseContext context,
                              IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }
        public ResultDto<ResultAddTeacherTypesDto> Execute(RequestAddTeacherTypesDto request)
        {


            try
            {
                TeacherType TeacherTypes = new TeacherType
                {
                    Title = request.Title,

                };
                _context.TeacherTypes.Add(TeacherTypes);
                _context.SaveChanges();
                return new ResultDto<ResultAddTeacherTypesDto>
                {
                    Data = new ResultAddTeacherTypesDto
                    {
                        TeacherTypeId = TeacherTypes.TeacherTypeId
                    },
                    IsSuccess = true,
                    Message = "با موفقیت ثبت شد."
                };
            }
            catch
            {
                return new ResultDto<ResultAddTeacherTypesDto>
                {
                    Data = new ResultAddTeacherTypesDto { TeacherTypeId = 0 },
                    IsSuccess = false,
                    Message = "ثبت با خطا مواجه شد."
                };

            }
        }

    }
}
