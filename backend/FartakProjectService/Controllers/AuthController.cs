using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Application.Services.Users.Commands.AddUsers;
using Application.Services.Users.Queries.GetUsers;
using Domain.Entities.Users;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace FartakProjectService.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly IAddUserService _addUserService;
    private readonly IGetUserService _getUserService;
    private readonly IConfiguration _configuration;

    public AuthController(IAddUserService addUserService, IGetUserService getUserService, IConfiguration configuration)
    {
        _addUserService = addUserService;
        _getUserService = getUserService;
        _configuration = configuration;
    }

    /// <summary>
    /// ورود کاربر با استفاده از تلفن همراه و رمز
    /// </summary>
    /// <returns></returns>
    [HttpPost("login")]
    public async Task<ActionResult> Login([FromBody] RequestGetUserByMobilePasswordDto userByMobilePasswordDto)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest("اطلاعات وارد شده صحیح نمی باشند");
        }

        try
        {
            var res = _getUserService.GetByMobilePassword(userByMobilePasswordDto);
            if (res.IsSuccess == true)
            {
                // jwt auth
                var authClaims = new List<Claim>
                {
                    new Claim(ClaimTypes.Name, res.Data.Name),
                    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                    new Claim(ClaimTypes.Role, res.Data.Kind.ToString())
                };
                var authSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JWT:Secret"]));

                var token = new JwtSecurityToken(
                    issuer: _configuration["JWT:ValidIssuer"],
                    audience: _configuration["JWT:ValidAudience"],
                    expires: DateTime.Now.AddHours(3),
                    claims: authClaims,
                    signingCredentials: new SigningCredentials(authSigningKey, SecurityAlgorithms.HmacSha256)
                );
                var role = (UserRoles)Enum.Parse(typeof(UserRoles), res.Data.Kind.ToString());
                return Ok(new
                {
                    role = role.ToString(),
                    token = new JwtSecurityTokenHandler().WriteToken(token),
                    expiration = token.ValidTo,
                    message = res.Message
                });
                // end jwt auth
            }
            else
            {
                return Unauthorized(new
                {
                    data = res.Data,
                    message = res.Message,
                });
            }
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            return Unauthorized("خطا در ورود - اطلاعات را بررسی کنید");
        }
    }

    /// <summary>
    /// ثبت نام کاربر
    /// </summary>
    /// <returns></returns>
    [HttpPost("register")]
    public async Task<ActionResult> Register([FromBody] RequestRegisterUserDto userDto)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest("اطلاعات نادرست می باشد");
        }

        try
        {
            var userRole = (int)(UserRoles)Enum.Parse(typeof(UserRoles), userDto.Kind.ToString());
            var newUser = new RequestAddUserDto()
            {
                Name = userDto.Name,
                Lastname = userDto.Lastname,
                PassWord = userDto.PassWord,
                Salt = userDto.Salt,
                Mobile = userDto.Mobile,
                Email = userDto.Email,
                Verify = userDto.Verify,
                Status = userDto.Status,
                Kind = userRole
            };
            var res = _addUserService.Execute(newUser);

            if (res.IsSuccess == true)
            {
                return Ok(new
                {
                    data = res.Data,
                    message = res.Message
                });
            }
            else
            {
                return BadRequest(new
                {
                    data = res.Data,
                    message = res.Message
                });
            }
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            return BadRequest("خطا در ثبت نام کاربر");
        }
    }
}