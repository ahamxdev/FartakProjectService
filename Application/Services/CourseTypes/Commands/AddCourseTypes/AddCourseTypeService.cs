using Application.Interfaces.Contexts;
using Common.Dto;
using Domain.Entities;
using Microsoft.Extensions.Configuration;

namespace Application.Services.CourseTypes.Commands.AddCourseTypes
{
    public class AddCourseTypeService : IAddCourseTypeService
    {
        private readonly IDatabaseContext _context;
        private readonly IConfiguration _configuration;
        public AddCourseTypeService(IDatabaseContext context,
                              IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }
        public ResultDto<ResultAddCourseTypeDto> Execute(RequestAddCourseTypeDto request)
        {


            try
            {
                CourseType CourseType = new CourseType
                {
                    Name = request.Name,
                };
                _context.CourseTypes.Add(CourseType);
                _context.SaveChanges();
                return new ResultDto<ResultAddCourseTypeDto>
                {
                    Data = new ResultAddCourseTypeDto
                    {
                        CourseTypeId = CourseType.CourseTypeId,
                    },
                    IsSuccess = true,
                    Message = "با موفقیت ثبت شد."
                };
            }
            catch
            {
                return new ResultDto<ResultAddCourseTypeDto>
                {
                    Data = new ResultAddCourseTypeDto { CourseTypeId = 0 },
                    IsSuccess = false,
                    Message = "ثبت با خطا مواجه شد."
                };

            }
        }

    }
}
