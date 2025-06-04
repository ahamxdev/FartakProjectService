using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Application.Services.Users.Commands.AddUsers;
using Application.Services.Users.Queries.GetUsers;
using Application.Services.UserToken.Commands.AddUserToken;
using Application.Services.UserToken.Queries.GetUserToken;
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
    private readonly IGetUserTokenService _getUserTokenService;
    private readonly IAddUserTokenService _addUserTokenService;

    public AuthController(IAddUserService addUserService,
        IGetUserService getUserService,
        IConfiguration configuration,
        IGetUserTokenService getUserTokenService,
        IAddUserTokenService addUserTokenService
    )
    {
        _addUserService = addUserService;
        _getUserService = getUserService;
        _configuration = configuration;
        _addUserTokenService = addUserTokenService;
        _getUserTokenService = getUserTokenService;
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
            #region validation with token and userId

            var tokenDto = new RequestCheckTokenDto { Token = "", SelfUserId = 0 };
            if (Request.Headers["token"].Count() > 0)
            {
                tokenDto.Token = Request.Headers["token"];
            }

            if (Request.Headers["userId"].Count() > 0)
            {
                tokenDto.SelfUserId = long.Parse(Request.Headers["userId"]);
            }

            if (tokenDto.Token == null || tokenDto.SelfUserId == 0)
            {
                return Ok(new
                {
                    IsSuccess = false,
                    ResponseCode = 409,
                    Message = "مقادیر توکن نامعتبر میباشد",
                    Service = "User",
                });
            }

            if (_getUserTokenService.GetToken(tokenDto) == false)
            {
                return Ok(new
                {
                    IsSuccess = false,
                    Message = "توکن نامعتبر است",
                    ResponseCode = 403,
                    Service = "User"
                });
            }

            #endregion


            var user = _getUserService.GetByMobilePassword(userByMobilePasswordDto);

            if (user.IsSuccess == true)
            {
                // jwt auth
                var authClaims = new List<Claim>
                {
                    new Claim(ClaimTypes.Name, user.Data.Name),
                    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                    new Claim(ClaimTypes.Role, user.Data.Kind.ToString())
                };
                var authSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JWT:Secret"]));

                var token = new JwtSecurityToken(
                    issuer: _configuration["JWT:ValidIssuer"],
                    audience: _configuration["JWT:ValidAudience"],
                    expires: DateTime.Now.AddHours(3),
                    claims: authClaims,
                    signingCredentials: new SigningCredentials(authSigningKey, SecurityAlgorithms.HmacSha256)
                );

                var role = (UserRoles)Enum.Parse(typeof(UserRoles), user.Data.Kind.ToString());
                return Ok(new
                {
                    mobile = user.Data.Mobile,
                    role = role.ToString(),
                    expiration = token.ValidTo,
                    message = user.Message,
                    jwt = new JwtSecurityTokenHandler().WriteToken(token),
                    token = tokenDto.Token,
                    userId = tokenDto.SelfUserId
                });
                // end jwt auth
            }
            else
            {
                return Unauthorized(new
                {
                    data = user.Data,
                    message = user.Message,
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
            var user = _addUserService.Execute(newUser);
            Int32 minutes = Convert.ToInt32(_configuration["AppSettings:TokenMinutes"]);

            var res = _addUserTokenService.Execute(new RequestAddUserTokenDto
            {
                UserId = user.Data.UserId,
                ExpireDate = DateTime.Now.AddMinutes(minutes),
            });

            var outputResult = new
            {
                IsSuccess = user.IsSuccess,
                Message = user.Message,
                UserId = user.Data.UserId,
                Token = res.Data.Token,
            };
            if (res.IsSuccess == true)
            {
                return Ok(outputResult);
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