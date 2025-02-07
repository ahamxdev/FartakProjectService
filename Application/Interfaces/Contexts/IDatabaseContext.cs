using Domain.Entities;
using Domain.Entities.Blogs;
using Domain.Entities.MessageSetting;
using Domain.Entities.Payments;
using Domain.Entities.Projects;
using Domain.Entities.TeacherUser;
using Domain.Entities.Users;
using Domain.Entities.ZarinpalSettings;
using Microsoft.EntityFrameworkCore;

namespace Application.Interfaces.Contexts
{
    public interface IDatabaseContext
    {
        DbSet<User> Users { get; set; }
        DbSet<UserToken> UserTokens { get; set; }
        DbSet<Course> Courses { get; set; }
        DbSet<CourseUser> CourseUsers { get; set; }
        DbSet<CourseType> CourseTypes { get; set; }
        DbSet<TeacherUser> TeacherUsers { get; set; }
        DbSet<TeacherUserResume> TeacherUserResumes { get; set; }
        DbSet<TeacherUserSelect> TeacherUserSelects { get; set; }
        DbSet<Project> Projects { get; set; }
        DbSet<ProjectLike> ProjectLikes { get; set; }
        DbSet<ProjectSeen> ProjectSeens { get; set; }
        DbSet<ProjectType> ProjectTypes { get; set; }
        DbSet<ProjectUser> ProjectUsers { get; set; }
        DbSet<MessageSetting> MessageSettings { get; set; }
        DbSet<Blog> Blogs { get; set; }
        DbSet<BlogContent> BlogContents { get; set; }
        DbSet<Payment> Payments { get; set; }
        DbSet<ZarinpalSetting> ZarinpalSettings { get; set; }
        DbSet<TeacherType> TeacherTypes { get; set; }
        DbSet<PaymentUse> PaymentUses { get; set; }

        int SaveChanges(bool accceptAllChangesOnSuccess);
        int SaveChanges();
        Task<int> SaveChangesAsync(bool acceptAllChangesOnSuccess,
            CancellationToken cancelationToken =
            new CancellationToken());
        Task<int> SaveChangesAsync(CancellationToken cancelationToken =
            new CancellationToken());
    }
}
