using Application.Services.Users.Queries.GetUser;
using Common.Dto;

namespace Application.Services.Users.Queries.GetUsers
{
    public interface IGetUserService
    {
        ResultGetUserDto GetAll();
        ResultGetUserDto GetById(RequestGetUserByIdDto request);
        ResultGetUserDto GetByFullNameTeacher(RequestGetUserByNameDto request);
        ResultGetUserDto GetByMobile(RequestGetUserByMobileDto request);
        ResultDto<GetUserDto> GetByMobilePassword(RequestGetUserByMobilePasswordDto request);
        ResultDto<GetUserDto> GetByMobilePasswordAdmin(RequestGetUserByMobilePasswordDto request);
        ResultGetUserDto GetByKind(RequestGetUserByKindDto request);
    }
}
