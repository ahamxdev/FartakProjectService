using System.Reflection;
using Application.Interfaces.Contexts;
using Application.Services.BlogContents.Commands.AddBlogContent;
using Application.Services.BlogContents.Commands.EditBlogContent;
using Application.Services.BlogContents.Commands.RemoveBlogContent;
using Application.Services.BlogContents.Queries.GetBlogContent;
using Application.Services.Blogs.Commands.AddBlog;
using Application.Services.Blogs.Commands.EditBlog;
using Application.Services.Blogs.Commands.RemoveBlog;
using Application.Services.Blogs.Queries.GetBlog;
using Application.Services.Commants.Commands.AddComments;
using Application.Services.Commants.Commands.EditComments;
using Application.Services.Commants.Commands.RemoveComments;
using Application.Services.Commants.Queries.GetComments;
using Application.Services.Courses.Commands.AddCourses;
using Application.Services.Courses.Commands.EditCourses;
using Application.Services.Courses.Commands.RemoveCourses;
using Application.Services.Courses.Queries.GetCourses;
using Application.Services.CourseTypes.Commands.AddCourseTypes;
using Application.Services.CourseTypes.Commands.EditCourseTypes;
using Application.Services.CourseTypes.Commands.RemoveCourseTypes;
using Application.Services.CourseTypes.Queries.GetCourseTypes;
using Application.Services.CourseUsers.Commands.AddCourseUsers;
using Application.Services.InboxUsers.Commands.AddInboxUser;
using Application.Services.InboxUsers.Commands.EditInboxUser;
using Application.Services.InboxUsers.Commands.RemoveInboxUser;
using Application.Services.InboxUsers.Queries.GetInboxUser;
using Application.Services.MessageSetting.Commands.EditMessageSetting;
using Application.Services.MessageSetting.Queries.GetMessageSetting;
using Application.Services.Payments.Commands.AddPayments;
using Application.Services.Payments.Commands.EditPayments;
using Application.Services.Payments.Commands.RemovePayments;
using Application.Services.Payments.Queries.GetPayments;
using Application.Services.PaymentUses.Commands.AddPaymentUses;
using Application.Services.PaymentUses.Queries.GetPaymentUses;
using Application.Services.ProjectFiles.Commands.AddProjectFiles;
using Application.Services.ProjectFiles.Commands.RemoveProjectFiles;
using Application.Services.ProjectFiles.Queries.GetProjectFiles;
using Application.Services.ProjectLikes.Commands.AddProjectLikes;
using Application.Services.ProjectLikes.Commands.RemoveProjectLikes;
using Application.Services.ProjectLikes.Queries.GetProjectLikes;
using Application.Services.ProjectPhases.Commands.AddProjectPhase;
using Application.Services.ProjectPhases.Commands.EditProjectPhase;
using Application.Services.ProjectPhases.Commands.RemoveProjectPhase;
using Application.Services.ProjectPhases.Commands.RemoveProjectPhases;
using Application.Services.ProjectPhases.Queries.GetProjectPhase;
using Application.Services.Projects.Commands.AddProjects;
using Application.Services.Projects.Commands.EditProjects;
using Application.Services.Projects.Commands.RemoveProjects;
using Application.Services.Projects.Queries.GetProjects;
using Application.Services.ProjectSeens.Commands.AddProjectSeens;
using Application.Services.ProjectSeens.Commands.RemoveProjectSeens;
using Application.Services.ProjectSeens.Queries.GetProjectSeens;
using Application.Services.ProjectTeamMembers.Commands.AddProjectTeamMembers;
using Application.Services.ProjectTeamMembers.Commands.EditProjectTeamMembers;
using Application.Services.ProjectTeamMembers.Commands.RemoveProjectTeamMembers;
using Application.Services.ProjectTeamMembers.Queries.GetProjectTeamMembers;
using Application.Services.ProjectTeams.Commands.AddProjectTeams;
using Application.Services.ProjectTeams.Commands.EditProjectTeams;
using Application.Services.ProjectTeams.Commands.RemoveProjectTeams;
using Application.Services.ProjectTeams.Queries.GetProjectTeams;
using Application.Services.ProjectTypes.Commands.AddProjectTypes;
using Application.Services.ProjectTypes.Commands.EditProjectTypes;
using Application.Services.ProjectTypes.Commands.RemoveProjectTypes;
using Application.Services.ProjectTypes.Queries.GetProjectTypes;
using Application.Services.ProjectUsers.Commands.AddProjectUsers;
using Application.Services.ProjectUsers.Commands.RemoveProjectUsers;
using Application.Services.ProjectUsers.Queries.GetProjectUsers;
using Application.Services.RequestProjectTeams.Commands.AddRequestProjectTeams;
using Application.Services.RequestProjectTeams.Commands.EditRequestProjectTeams;
using Application.Services.RequestProjectTeams.Commands.RemoveRequestProjectTeams;
using Application.Services.RequestProjectTeams.Queries.GetRequestProjectTeams;
using Application.Services.SMS;
using Application.Services.TeacherTypes.Commands.AddTeacherTypes;
using Application.Services.TeacherTypes.Commands.EditTeacherTypes;
using Application.Services.TeacherTypes.Commands.RemoveTeacherTypes;
using Application.Services.TeacherTypes.Queries.GetTeacherTypes;
using Application.Services.TeacherUserResumes.Commands.AddTeacherUserResumes;
using Application.Services.TeacherUserResumes.Commands.EditTeacherUserResumes;
using Application.Services.TeacherUserResumes.Commands.RemoveTeacherUserResumes;
using Application.Services.TeacherUserResumes.Queries.GetTeacherUserResumes;
using Application.Services.TeacherUsers.Commands.AddTeacherUsers;
using Application.Services.TeacherUsers.Commands.EditTeacherUsers;
using Application.Services.TeacherUsers.Commands.RemoveTeacherUsers;
using Application.Services.TeacherUsers.Queries.GetTeacherUsers;
using Application.Services.TeacherUserSelects.Commands.AddTeacherUserSelects;
using Application.Services.TeacherUserSelects.Commands.EditTeacherUserSelects;
using Application.Services.TeacherUserSelects.Commands.RemoveTeacherUserSelects;
using Application.Services.TeacherUserSelects.Queries.GetTeacherUserSelects;
using Application.Services.Users.Commands.AddUsers;
using Application.Services.Users.Commands.EditUsers;
using Application.Services.Users.Commands.RemoveUsers;
using Application.Services.Users.Queries.GetUsers;
using Application.Services.UserToken.Commands.AddUserToken;
using Application.Services.UserToken.Commands.EditUserToken;
using Application.Services.UserToken.Commands.RemoveUserToken;
using Application.Services.UserToken.Queries.GetUserToken;
using Application.Services.ZarinpalSettings.Commands.AddZarinpalSettings;
using Application.Services.ZarinpalSettings.Commands.EditZarinpalSettings;
using Application.Services.ZarinpalSettings.Commands.RemoveZarinpalSettings;
using Application.Services.ZarinpalSettings.Queries.GetZarinpalSettings;
using Microsoft.EntityFrameworkCore;
using Persistence.Contexts;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
ConfigurationManager configuration = builder.Configuration;
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
string connectionString = configuration.GetConnectionString("SqlConnection");
builder.Services.AddSwaggerGen(c =>
{
    var xmlFile = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
    var xmlPath = Path.Combine(AppContext.BaseDirectory, xmlFile);
    c.IncludeXmlComments(xmlPath);
});
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddEntityFrameworkSqlServer().
    AddDbContext<DatabaseContext>
    (option => option.UseSqlServer(connectionString));


builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", builder =>
    {
        builder.AllowAnyOrigin()
               .AllowAnyMethod()
               .AllowAnyHeader();
    });
});


//User

builder.Services.AddScoped<IAddUserService, AddUserService>();
builder.Services.AddScoped<IEditUserService, EditUserService>();
builder.Services.AddScoped<IRemoveUserService, RemoveUserService>();
builder.Services.AddScoped<IGetUserService, GetUserService>();



//InboxUser

builder.Services.AddScoped<IAddInboxUserService, AddInboxUserService>();
builder.Services.AddScoped<IEditInboxUserService, EditInboxUserService>();
builder.Services.AddScoped<IRemoveInboxUserService, RemoveInboxUserService>();
builder.Services.AddScoped<IGetInboxUserService, GetInboxUserService>();


//TeacherTypes

builder.Services.AddScoped<IAddTeacherTypeService, AddTeacherTypeService>();
builder.Services.AddScoped<IEditTeacherTypeService, EditTeacherTypeService>();
builder.Services.AddScoped<IRemoveTeacherTypeService, RemoveTeacherTypeService>();
builder.Services.AddScoped<IGetTeacherTypeService, GetTeacherTypeService>();



//ProjectTeamMembers

builder.Services.AddScoped<IAddProjectTeamMemberService, AddProjectTeamMemberService>();
builder.Services.AddScoped<IEditProjectTeamMemberService, EditProjectTeamMemberService>();
builder.Services.AddScoped<IRemoveProjectTeamMemberService, RemoveProjectTeamMemberService>();
builder.Services.AddScoped<IGetProjectTeamMemberService, GetProjectTeamMemberService>();


//ProjectTeams

builder.Services.AddScoped<IAddProjectTeamService, AddProjectTeamService>();
builder.Services.AddScoped<IEditProjectTeamService, EditProjectTeamService>();
builder.Services.AddScoped<IRemoveProjectTeamService, RemoveProjectTeamService>();
builder.Services.AddScoped<IGetProjectTeamService, GetProjectTeamService>();



//RequestProjectTeams

builder.Services.AddScoped<IAddRequestProjectTeamService, AddRequestProjectTeamService>();
builder.Services.AddScoped<IEditRequestProjectTeamService, EditRequestProjectTeamService>();
builder.Services.AddScoped<IRemoveRequestProjectTeamService, RemoveRequestProjectTeamService>();
builder.Services.AddScoped<IGetRequestProjectTeamService, GetRequestProjectTeamService>();



// UserToken

builder.Services.AddScoped<IAddUserTokenService, AddUserTokenService>();
builder.Services.AddScoped<IEditUserTokenService, EditUserTokenService>();
builder.Services.AddScoped<IRemoveUserTokenService, RemoveUserTokenService>();
builder.Services.AddScoped<IGetUserTokenService, GetUserTokenService>();

//Payment
builder.Services.AddScoped<IAddPaymentService, AddPaymentService>();
builder.Services.AddScoped<IEditPaymentService, EditPaymentService>();
builder.Services.AddScoped<IRemovePaymentService, RemovePaymentService>();
builder.Services.AddScoped<IGetPaymentService, GetPaymentService>();

//ZarinpalSetting
builder.Services.AddScoped<IAddZarinpalSettingService, AddZarinpalSettingService>();
builder.Services.AddScoped<IEditZarinpalSettingService, EditZarinpalSettingService>();
builder.Services.AddScoped<IRemoveZarinpalSettingService, RemoveZarinpalSettingService>();
builder.Services.AddScoped<IGetZarinpalSettingService, GetZarinpalSettingService>();


// Message
builder.Services.AddScoped<IGetMessageSettingService, GetMessageSettingService>();
builder.Services.AddScoped<IEditMessageSettingService, EditMessageSettingService>();
builder.Services.AddScoped<ISmsIR_SendMessageService, SmsIR_SendMessageService>();


// Project

builder.Services.AddScoped<IAddProjectService, AddProjectService>();
builder.Services.AddScoped<IEditProjectService, EditProjectService>();
builder.Services.AddScoped<IRemoveProjectService, RemoveProjectService>();
builder.Services.AddScoped<IGetProjectService, GetProjectService>();




// ProjectPhase

builder.Services.AddScoped<IAddProjectPhaseService, AddProjectPhaseService>();
builder.Services.AddScoped<IEditProjectPhaseService, EditProjectPhaseService>();
builder.Services.AddScoped<IRemoveProjectPhaseService, RemoveProjectPhaseService>();
builder.Services.AddScoped<IGetProjectPhaseService, GetProjectPhaseService>();



//Blog
builder.Services.AddScoped<IAddBlogService, AddBlogService>();
builder.Services.AddScoped<IEditBlogService, EditBlogService>();
builder.Services.AddScoped<IRemoveBlogService, RemoveBlogService>();
builder.Services.AddScoped<IGetBlogService, GetBlogService>();



//BlogContent
builder.Services.AddScoped<IAddBlogContentService, AddBlogContentService>();
builder.Services.AddScoped<IEditBlogContentService, EditBlogContentService>();
builder.Services.AddScoped<IRemoveBlogContentService, RemoveBlogContentService>();
builder.Services.AddScoped<IGetBlogContentService, GetBlogContentService>();



//Comment
builder.Services.AddScoped<IAddCommentService, AddCommentService>();
builder.Services.AddScoped<IEditCommentService, EditCommentService>();
builder.Services.AddScoped<IRemoveCommentService, RemoveCommentService>();
builder.Services.AddScoped<IGetCommentService, GetCommentService>();


// ProjectLike

builder.Services.AddScoped<IAddProjectLikeService, AddProjectLikeService>();
builder.Services.AddScoped<IRemoveProjectLikeService, RemoveProjectLikeService>();
builder.Services.AddScoped<IGetProjectLikeService, GetProjectLikeService>();




// ProjectFile

builder.Services.AddScoped<IAddProjectFileService, AddProjectFileService>();
builder.Services.AddScoped<IRemoveProjectFileService, RemoveProjectFileService>();
builder.Services.AddScoped<IGetProjectFileService, GetProjectFileService>();



// ProjectUser

builder.Services.AddScoped<IAddProjectUserService, AddProjectUserService>();
builder.Services.AddScoped<IRemoveProjectUserService, RemoveProjectUserService>();
builder.Services.AddScoped<IGetProjectUserService, GetProjectUserService>();



// ProjectType

builder.Services.AddScoped<IAddProjectTypeService, AddProjectTypeService>();
builder.Services.AddScoped<IEditProjectTypeService, EditProjectTypeService>();
builder.Services.AddScoped<IRemoveProjectTypeService, RemoveProjectTypeService>();
builder.Services.AddScoped<IGetProjectTypeService, GetProjectTypeService>();



//ProjectSeen

builder.Services.AddScoped<IAddProjectSeenService, AddProjectSeenService>();
builder.Services.AddScoped<IRemoveProjectSeenService, RemoveProjectSeenService>();
builder.Services.AddScoped<IGetProjectSeenService, GetProjectSeenService>();


//Course
builder.Services.AddScoped<IAddCourseService, AddCourseService>();
builder.Services.AddScoped<IEditCourseService, EditCourseService>();
builder.Services.AddScoped<IRemoveCourseService, RemoveCourseService>();
builder.Services.AddScoped<IGetCourseService, GetCourseService>();


//PaymantUse
builder.Services.AddScoped<IAddPaymentUseService, AddPaymantUseService>();
builder.Services.AddScoped<IGetPaymentUseService, GetPaymentUseService>();


//CourseType

builder.Services.AddScoped<IAddCourseTypeService, AddCourseTypeService>();
builder.Services.AddScoped<IEditCourseTypeService, EditCourseTypeService>();
builder.Services.AddScoped<IRemoveCourseTypeService, RemoveCourseTypeService>();
builder.Services.AddScoped<IGetCourseTypeService, GetCourseTypeService>();


//TeacherUserSelect

builder.Services.AddScoped<IAddTeacherUserSelectService, AddTeacherUserSelectService>();
builder.Services.AddScoped<IEditTeacherUserSelectService, EditTeacherUserSelectService>();
builder.Services.AddScoped<IRemoveTeacherUserSelectService, RemoveTeacherUserSelectService>();
builder.Services.AddScoped<IGetTeacherUserSelectService, GetTeacherUserSelectService>();


//TeacherUserResume

builder.Services.AddScoped<IAddTeacherUserResumeService, AddTeacherUserResumeService>();
builder.Services.AddScoped<IEditTeacherUserResumeService, EditTeacherUserResumeService>();
builder.Services.AddScoped<IRemoveTeacherUserResumeService, RemoveTeacherUserResumeService>();
builder.Services.AddScoped<IGetTeacherUserResumeService, GetTeacherUserResumeService>();


//TeacherUser

builder.Services.AddScoped<IAddTeacherUserService, AddTeacherUserService>();
builder.Services.AddScoped<IEditTeacherUserService, EditTeacherUserService>();
builder.Services.AddScoped<IRemoveTeacherUserService, RemoveTeacherUserService>();
builder.Services.AddScoped<IGetTeacherUserService, GetTeacherUserService>();


//CourseUser

builder.Services.AddScoped<IAddCourseUserService, AddCourseUserService>();
builder.Services.AddScoped<IRemoveCourseUserService, RemoveCourseUserService>();
builder.Services.AddScoped<IGetCourseUserService, GetCourseUserService>();


//External Api
builder.Services.AddScoped<IDatabaseContext, DatabaseContext>();
builder.Services.AddSignalR();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy.AllowAnyHeader()
              .AllowAnyMethod()
              .AllowCredentials()
              .SetIsOriginAllowed(origin => true); // برای اجازه دادن به همه Origin ها
    });
});



builder.Services.AddSignalR();

var app = builder.Build();

app.UseCors("AllowAll");


app.MapHub<ChatHub>("/chathub");



// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("AllowAll");


app.UseHttpsRedirection();

app.UseAuthorization();

app.UseDefaultFiles();
app.UseStaticFiles();

app.UseRouting();


app.MapControllers();

app.Run();