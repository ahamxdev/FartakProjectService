using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Persistance.Migrations
{
    /// <inheritdoc />
    public partial class initDB : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "BlogContents",
                columns: table => new
                {
                    BlogContentId = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    BlogId = table.Column<long>(type: "bigint", nullable: false),
                    Title = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CreatedDate = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CreatedTime = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UpdateDate = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UpdateTime = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Image = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BlogContents", x => x.BlogContentId);
                });

            migrationBuilder.CreateTable(
                name: "Blogs",
                columns: table => new
                {
                    BlogId = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Title = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CreatedDate = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CreatedTime = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UpdateDate = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UpdateTime = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Image = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Blogs", x => x.BlogId);
                });

            migrationBuilder.CreateTable(
                name: "Comments",
                columns: table => new
                {
                    CommentId = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<long>(type: "bigint", nullable: false),
                    Message = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CreateDate = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UpdateDate = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Read = table.Column<int>(type: "int", nullable: false),
                    ForId = table.Column<int>(type: "int", nullable: false),
                    Action = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Comments", x => x.CommentId);
                });

            migrationBuilder.CreateTable(
                name: "Courses",
                columns: table => new
                {
                    CourseId = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CourseTypeId = table.Column<long>(type: "bigint", nullable: false),
                    TeacherId = table.Column<long>(type: "bigint", nullable: false),
                    Title = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Price = table.Column<long>(type: "bigint", nullable: false),
                    Status = table.Column<int>(type: "int", nullable: false),
                    VideoName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Duration = table.Column<long>(type: "bigint", nullable: false),
                    PercentOff = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Courses", x => x.CourseId);
                });

            migrationBuilder.CreateTable(
                name: "CourseTypes",
                columns: table => new
                {
                    CourseTypeId = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CourseTypes", x => x.CourseTypeId);
                });

            migrationBuilder.CreateTable(
                name: "CourseUsers",
                columns: table => new
                {
                    CourseUserId = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CouserId = table.Column<long>(type: "bigint", nullable: false),
                    UserId = table.Column<long>(type: "bigint", nullable: false),
                    CourseScore = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CourseUsers", x => x.CourseUserId);
                });

            migrationBuilder.CreateTable(
                name: "InboxUsers",
                columns: table => new
                {
                    InboxUserId = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<long>(type: "bigint", nullable: false),
                    Read = table.Column<int>(type: "int", nullable: false),
                    Message = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_InboxUsers", x => x.InboxUserId);
                });

            migrationBuilder.CreateTable(
                name: "MessageSettings",
                columns: table => new
                {
                    MessageSettingId = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    SMSApiKey = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SignupTemplateId = table.Column<int>(type: "int", nullable: false),
                    ForgetPasswordTemplateId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MessageSettings", x => x.MessageSettingId);
                });

            migrationBuilder.CreateTable(
                name: "Payments",
                columns: table => new
                {
                    PaymentId = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<long>(type: "bigint", nullable: false),
                    PurchaseDate = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PurchaseTime = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ConfirmDate = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ConfirmTime = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Price = table.Column<long>(type: "bigint", nullable: false),
                    ZarinpalAuthority = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    OrderId = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PurchaseState = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Payments", x => x.PaymentId);
                });

            migrationBuilder.CreateTable(
                name: "PaymentUses",
                columns: table => new
                {
                    PaymentUseId = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PaymentId = table.Column<long>(type: "bigint", nullable: false),
                    UserId = table.Column<long>(type: "bigint", nullable: false),
                    CourseId = table.Column<long>(type: "bigint", nullable: false),
                    ProjectPhaseId = table.Column<long>(type: "bigint", nullable: false),
                    PaymentUseDate = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PaymentUseTime = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Price = table.Column<long>(type: "bigint", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PaymentUses", x => x.PaymentUseId);
                });

            migrationBuilder.CreateTable(
                name: "ProjectFiles",
                columns: table => new
                {
                    ProjectFileId = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ProjectId = table.Column<long>(type: "bigint", nullable: false),
                    FileAddress = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    OwnerAtach = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProjectFiles", x => x.ProjectFileId);
                });

            migrationBuilder.CreateTable(
                name: "ProjectLikes",
                columns: table => new
                {
                    ProjectLikeId = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ProjectId = table.Column<long>(type: "bigint", nullable: false),
                    UserId = table.Column<long>(type: "bigint", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProjectLikes", x => x.ProjectLikeId);
                });

            migrationBuilder.CreateTable(
                name: "ProjectPhases",
                columns: table => new
                {
                    ProjectPhaseId = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ProjectId = table.Column<long>(type: "bigint", nullable: false),
                    ProjectTeamId = table.Column<long>(type: "bigint", nullable: false),
                    Duration = table.Column<long>(type: "bigint", nullable: false),
                    Price = table.Column<long>(type: "bigint", nullable: false),
                    CreateDate = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DeadLine = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Status = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProjectPhases", x => x.ProjectPhaseId);
                });

            migrationBuilder.CreateTable(
                name: "Projects",
                columns: table => new
                {
                    ProjectId = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ProjectTypeId = table.Column<long>(type: "bigint", nullable: false),
                    Duration = table.Column<long>(type: "bigint", nullable: false),
                    Title = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    OwnerId = table.Column<long>(type: "bigint", nullable: false),
                    FinishPrice = table.Column<long>(type: "bigint", nullable: false),
                    StartPrice = table.Column<long>(type: "bigint", nullable: false),
                    EndPrice = table.Column<long>(type: "bigint", nullable: false),
                    CreateDate = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DeadLine = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Status = table.Column<int>(type: "int", nullable: false),
                    Image = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Projects", x => x.ProjectId);
                });

            migrationBuilder.CreateTable(
                name: "ProjectSeens",
                columns: table => new
                {
                    ProjectSeenId = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ProjectId = table.Column<long>(type: "bigint", nullable: false),
                    UserId = table.Column<long>(type: "bigint", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProjectSeens", x => x.ProjectSeenId);
                });

            migrationBuilder.CreateTable(
                name: "ProjectTeamMembers",
                columns: table => new
                {
                    ProjectTeamMemberId = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ProjectTeamId = table.Column<long>(type: "bigint", nullable: false),
                    MemberId = table.Column<long>(type: "bigint", nullable: false),
                    IsHead = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProjectTeamMembers", x => x.ProjectTeamMemberId);
                });

            migrationBuilder.CreateTable(
                name: "ProjectTeams",
                columns: table => new
                {
                    ProjectTeamId = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TeamName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TeamDescription = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ProjectTypeId = table.Column<long>(type: "bigint", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProjectTeams", x => x.ProjectTeamId);
                });

            migrationBuilder.CreateTable(
                name: "ProjectTypes",
                columns: table => new
                {
                    ProjectTypeId = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Title = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProjectTypes", x => x.ProjectTypeId);
                });

            migrationBuilder.CreateTable(
                name: "ProjectUsers",
                columns: table => new
                {
                    ProjectUserId = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<long>(type: "bigint", nullable: false),
                    ProjectId = table.Column<long>(type: "bigint", nullable: false),
                    Status = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProjectUsers", x => x.ProjectUserId);
                });

            migrationBuilder.CreateTable(
                name: "RequestProjectTeams",
                columns: table => new
                {
                    RequestProjectTeamId = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ProjectTeamId = table.Column<long>(type: "bigint", nullable: false),
                    ProjectId = table.Column<long>(type: "bigint", nullable: false),
                    Price = table.Column<long>(type: "bigint", nullable: false),
                    Days = table.Column<long>(type: "bigint", nullable: false),
                    Status = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RequestProjectTeams", x => x.RequestProjectTeamId);
                });

            migrationBuilder.CreateTable(
                name: "TeacherTypes",
                columns: table => new
                {
                    TeacherTypeId = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TeacherTypeParentId = table.Column<long>(type: "bigint", nullable: false),
                    Title = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TeacherTypes", x => x.TeacherTypeId);
                });

            migrationBuilder.CreateTable(
                name: "TeacherUserResumes",
                columns: table => new
                {
                    TeacherUserResumeId = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TeacherUserId = table.Column<long>(type: "bigint", nullable: false),
                    ResumeText = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TeacherUserResumes", x => x.TeacherUserResumeId);
                });

            migrationBuilder.CreateTable(
                name: "TeacherUsers",
                columns: table => new
                {
                    TeacherUserId = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<long>(type: "bigint", nullable: false),
                    TeacherTypeId = table.Column<long>(type: "bigint", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    VideoName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ImageName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Gender = table.Column<int>(type: "int", nullable: false),
                    City = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TypeTeaching = table.Column<int>(type: "int", nullable: false),
                    OnlinePrice = table.Column<long>(type: "bigint", nullable: false),
                    InPersonPrice = table.Column<long>(type: "bigint", nullable: false),
                    LanguageTeach = table.Column<int>(type: "int", nullable: false),
                    Place = table.Column<int>(type: "int", nullable: false),
                    PercentOff = table.Column<int>(type: "int", nullable: false),
                    AllowUploadCourse = table.Column<int>(type: "int", nullable: false),
                    Duration = table.Column<long>(type: "bigint", nullable: false),
                    OurSelect = table.Column<int>(type: "int", nullable: false),
                    MaxUser = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TeacherUsers", x => x.TeacherUserId);
                });

            migrationBuilder.CreateTable(
                name: "TeacherUserSelects",
                columns: table => new
                {
                    TeacherUserSelectId = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TeacherId = table.Column<long>(type: "bigint", nullable: false),
                    StudentId = table.Column<long>(type: "bigint", nullable: false),
                    Score = table.Column<int>(type: "int", nullable: false),
                    Status = table.Column<int>(type: "int", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    LastName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    MemberCount = table.Column<int>(type: "int", nullable: false),
                    MemberWho = table.Column<int>(type: "int", nullable: false),
                    Level = table.Column<int>(type: "int", nullable: false),
                    Goal = table.Column<int>(type: "int", nullable: false),
                    UntilDate = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CountDay = table.Column<int>(type: "int", nullable: false),
                    ClassDate = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    OrderCode = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TeacherUserSelects", x => x.TeacherUserSelectId);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    UserId = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PassWord = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Lastname = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Salt = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Mobile = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Verify = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Status = table.Column<int>(type: "int", nullable: false),
                    Kind = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.UserId);
                });

            migrationBuilder.CreateTable(
                name: "UserTokens",
                columns: table => new
                {
                    UserTokenId = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<long>(type: "bigint", nullable: false),
                    Token = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ExpireDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserTokens", x => x.UserTokenId);
                });

            migrationBuilder.CreateTable(
                name: "ZarinpalSettings",
                columns: table => new
                {
                    ZarinpalSettingId = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CallbackUrl = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TerminalId = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Username = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ComissionPercent = table.Column<long>(type: "bigint", nullable: false),
                    TaxPercent = table.Column<long>(type: "bigint", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ZarinpalSettings", x => x.ZarinpalSettingId);
                });

            migrationBuilder.CreateIndex(
                name: "IX_BlogContents_BlogContentId",
                table: "BlogContents",
                column: "BlogContentId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Blogs_BlogId",
                table: "Blogs",
                column: "BlogId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Comments_CommentId",
                table: "Comments",
                column: "CommentId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Courses_CourseId",
                table: "Courses",
                column: "CourseId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_CourseTypes_CourseTypeId",
                table: "CourseTypes",
                column: "CourseTypeId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_CourseUsers_CourseUserId",
                table: "CourseUsers",
                column: "CourseUserId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_InboxUsers_InboxUserId",
                table: "InboxUsers",
                column: "InboxUserId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_MessageSettings_MessageSettingId",
                table: "MessageSettings",
                column: "MessageSettingId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Payments_PaymentId",
                table: "Payments",
                column: "PaymentId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_PaymentUses_PaymentUseId",
                table: "PaymentUses",
                column: "PaymentUseId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_ProjectFiles_ProjectFileId",
                table: "ProjectFiles",
                column: "ProjectFileId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_ProjectLikes_ProjectLikeId",
                table: "ProjectLikes",
                column: "ProjectLikeId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_ProjectPhases_ProjectPhaseId",
                table: "ProjectPhases",
                column: "ProjectPhaseId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Projects_ProjectId",
                table: "Projects",
                column: "ProjectId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_ProjectSeens_ProjectSeenId",
                table: "ProjectSeens",
                column: "ProjectSeenId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_ProjectTeamMembers_ProjectTeamMemberId",
                table: "ProjectTeamMembers",
                column: "ProjectTeamMemberId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_ProjectTeams_ProjectTeamId",
                table: "ProjectTeams",
                column: "ProjectTeamId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_ProjectTypes_ProjectTypeId",
                table: "ProjectTypes",
                column: "ProjectTypeId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_ProjectUsers_ProjectUserId",
                table: "ProjectUsers",
                column: "ProjectUserId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_RequestProjectTeams_RequestProjectTeamId",
                table: "RequestProjectTeams",
                column: "RequestProjectTeamId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_TeacherTypes_TeacherTypeId",
                table: "TeacherTypes",
                column: "TeacherTypeId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_TeacherUserResumes_TeacherUserResumeId",
                table: "TeacherUserResumes",
                column: "TeacherUserResumeId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_TeacherUsers_TeacherUserId",
                table: "TeacherUsers",
                column: "TeacherUserId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_TeacherUserSelects_TeacherUserSelectId",
                table: "TeacherUserSelects",
                column: "TeacherUserSelectId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Users_UserId",
                table: "Users",
                column: "UserId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_UserTokens_UserTokenId",
                table: "UserTokens",
                column: "UserTokenId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_ZarinpalSettings_ZarinpalSettingId",
                table: "ZarinpalSettings",
                column: "ZarinpalSettingId",
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BlogContents");

            migrationBuilder.DropTable(
                name: "Blogs");

            migrationBuilder.DropTable(
                name: "Comments");

            migrationBuilder.DropTable(
                name: "Courses");

            migrationBuilder.DropTable(
                name: "CourseTypes");

            migrationBuilder.DropTable(
                name: "CourseUsers");

            migrationBuilder.DropTable(
                name: "InboxUsers");

            migrationBuilder.DropTable(
                name: "MessageSettings");

            migrationBuilder.DropTable(
                name: "Payments");

            migrationBuilder.DropTable(
                name: "PaymentUses");

            migrationBuilder.DropTable(
                name: "ProjectFiles");

            migrationBuilder.DropTable(
                name: "ProjectLikes");

            migrationBuilder.DropTable(
                name: "ProjectPhases");

            migrationBuilder.DropTable(
                name: "Projects");

            migrationBuilder.DropTable(
                name: "ProjectSeens");

            migrationBuilder.DropTable(
                name: "ProjectTeamMembers");

            migrationBuilder.DropTable(
                name: "ProjectTeams");

            migrationBuilder.DropTable(
                name: "ProjectTypes");

            migrationBuilder.DropTable(
                name: "ProjectUsers");

            migrationBuilder.DropTable(
                name: "RequestProjectTeams");

            migrationBuilder.DropTable(
                name: "TeacherTypes");

            migrationBuilder.DropTable(
                name: "TeacherUserResumes");

            migrationBuilder.DropTable(
                name: "TeacherUsers");

            migrationBuilder.DropTable(
                name: "TeacherUserSelects");

            migrationBuilder.DropTable(
                name: "Users");

            migrationBuilder.DropTable(
                name: "UserTokens");

            migrationBuilder.DropTable(
                name: "ZarinpalSettings");
        }
    }
}
