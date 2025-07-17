using Domain.Entities;
using Domain.Entities.Blogs;
using Domain.Entities.MessageSetting;
using Domain.Entities.NotificationSettings;
using Domain.Entities.Payments;
using Domain.Entities.Projects;
using Domain.Entities.TeacherUser;
using Domain.Entities.Users;
using Domain.Entities.ZarinpalSettings;
using Domain.Users;
using Microsoft.EntityFrameworkCore;

namespace Application.Interfaces.Contexts
{
    public interface IDatabaseContext
    {
        DbSet<User> Users { get; set; }
        DbSet<UserToken> UserTokens { get; set; }
        DbSet<InboxUser> InboxUsers { get; set; }
        DbSet<Course> Courses { get; set; }
        DbSet<CourseUser> CourseUsers { get; set; }
        DbSet<CourseType> CourseTypes { get; set; }
        DbSet<NotificationSetting> NotificationSettings { get; set; }
        DbSet<ProjectCategory> ProjectCategories { get; set; }
        DbSet<TeacherUser> TeacherUsers { get; set; }
        DbSet<TeacherUserResume> TeacherUserResumes { get; set; }
        DbSet<TeacherUserSelect> TeacherUserSelects { get; set; }
        DbSet<Project> Projects { get; set; }
        DbSet<ProjectTeam> ProjectTeams { get; set; }
        DbSet<ProjectTeamMember> ProjectTeamMembers { get; set; }
        DbSet<ProjectLike> ProjectLikes { get; set; }
        DbSet<ProjectSeen> ProjectSeens { get; set; }
        DbSet<ProjectType> ProjectTypes { get; set; }
        DbSet<ProjectSkill> ProjectSkills { get; set; }
        DbSet<ProjectUser> ProjectUsers { get; set; }
        DbSet<RequestProjectTeam> RequestProjectTeams { get; set; }
        DbSet<MessageSetting> MessageSettings { get; set; }
        DbSet<Blog> Blogs { get; set; }
        DbSet<BlogContent> BlogContents { get; set; }
        DbSet<Payment> Payments { get; set; }
        DbSet<ZarinpalSetting> ZarinpalSettings { get; set; }
        DbSet<TeacherType> TeacherTypes { get; set; }
        DbSet<ProjectHashtag> ProjectHashtags { get; set; }
        DbSet<PaymentUse> PaymentUses { get; set; }
        DbSet<ProjectFile> ProjectFiles { get; set; }
        DbSet<ProjectPhase> ProjectPhases { get; set; }
        DbSet<Comment> Comments { get; set; }

        int SaveChanges(bool accceptAllChangesOnSuccess);
        int SaveChanges();
        Task<int> SaveChangesAsync(bool acceptAllChangesOnSuccess,
            CancellationToken cancelationToken =
            new CancellationToken());
        Task<int> SaveChangesAsync(CancellationToken cancelationToken =
            new CancellationToken());
    }
}
