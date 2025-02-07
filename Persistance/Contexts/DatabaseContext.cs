using Application.Interfaces.Contexts;
using Domain.Entities;
using Domain.Entities.Blogs;
using Domain.Entities.MessageSetting;
using Domain.Entities.Payments;
using Domain.Entities.Projects;
using Domain.Entities.TeacherUser;
using Domain.Entities.Users;
using Domain.Entities.ZarinpalSettings;
using Microsoft.EntityFrameworkCore;

namespace Persistence.Contexts
{
    public class DatabaseContext : DbContext, IDatabaseContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<UserToken> UserTokens { get; set; }
        public DbSet<Course> Courses { get; set; }
        public DbSet<CourseUser> CourseUsers { get; set; }
        public DbSet<CourseType> CourseTypes { get; set; }
        public DbSet<TeacherUser> TeacherUsers { get; set; }
        public DbSet<TeacherUserResume> TeacherUserResumes { get; set; }
        public DbSet<TeacherUserSelect> TeacherUserSelects { get; set; }
        public DbSet<Payment> Payments { get; set; }
        public DbSet<ZarinpalSetting> ZarinpalSettings { get; set; }

        public DbSet<Project> Projects { get; set; }
        public DbSet<ProjectLike> ProjectLikes { get; set; }
        public DbSet<ProjectSeen> ProjectSeens { get; set; }
        public DbSet<ProjectType> ProjectTypes { get; set; }
        public DbSet<ProjectUser> ProjectUsers { get; set; }
        public DbSet<Blog> Blogs { get; set; }
        public DbSet<BlogContent> BlogContents { get; set; }
        public DbSet<MessageSetting> MessageSettings { get; set; }
        public DbSet<TeacherType> TeacherTypes { get; set; }
        public DbSet<PaymentUse> PaymentUses { get; set; }

        public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options)
        {
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().HasIndex(u => u.UserId).IsUnique();
            modelBuilder.Entity<UserToken>().HasIndex(u => u.UserTokenId).IsUnique();
            modelBuilder.Entity<Course>().HasIndex(u => u.CourseId).IsUnique();
            modelBuilder.Entity<CourseUser>().HasIndex(u => u.CourseUserId).IsUnique();
            modelBuilder.Entity<CourseType>().HasIndex(u => u.CourseTypeId).IsUnique();
            modelBuilder.Entity<TeacherUser>().HasIndex(u => u.TeacherUserId).IsUnique();
            modelBuilder.Entity<TeacherUserResume>().HasIndex(u => u.TeacherUserResumeId).IsUnique();
            modelBuilder.Entity<TeacherUserSelect>().HasIndex(u => u.TeacherUserSelectId).IsUnique();
            modelBuilder.Entity<Project>().HasIndex(u => u.ProjectId).IsUnique();
            modelBuilder.Entity<ProjectLike>().HasIndex(u => u.ProjectLikeId).IsUnique();
            modelBuilder.Entity<ProjectSeen>().HasIndex(u => u.ProjectSeenId).IsUnique();
            modelBuilder.Entity<ProjectType>().HasIndex(u => u.ProjectTypeId).IsUnique();
            modelBuilder.Entity<ProjectUser>().HasIndex(u => u.ProjectUserId).IsUnique();
            modelBuilder.Entity<Blog>().HasIndex(u => u.BlogId).IsUnique();
            modelBuilder.Entity<BlogContent>().HasIndex(u => u.BlogContentId).IsUnique();
            modelBuilder.Entity<MessageSetting>().HasIndex(u => u.MessageSettingId).IsUnique();
            modelBuilder.Entity<Payment>().HasIndex(u => u.PaymentId).IsUnique();
            modelBuilder.Entity<ZarinpalSetting>().HasIndex(u => u.ZarinpalSettingId).IsUnique();
            modelBuilder.Entity<TeacherType>().HasIndex(u => u.TeacherTypeId).IsUnique();
            modelBuilder.Entity<PaymentUse>().HasIndex(u => u.PaymentUseId).IsUnique();
        }
    }

}
