USE [FartakDB]
GO

/****** Object:  Table [dbo].[Projects]    Script Date: 7/19/2025 10:25:08 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Projects](
	[ProjectId] [bigint] IDENTITY(1,1) NOT NULL,
	[ProjectCategoryId] [bigint] NOT NULL,
	[Duration] [bigint] NULL,
	[Title] [nvarchar](max) NOT NULL,
	[Description] [nvarchar](max) NOT NULL,
	[OwnerId] [bigint] NOT NULL,
	[FinishPrice] [bigint] NULL,
	[StartPrice] [bigint] NULL,
	[EndPrice] [bigint] NULL,
	[CreateDate] [nvarchar](max) NOT NULL,
	[DeadLine] [nvarchar](max) NOT NULL,
	[Status] [int] NULL,
	[StarRating] [int] NULL,
	[Priority] [int] NULL,
	[PriceType] [int] NULL,
	[Image] [nvarchar](max) NULL,
	[PortfolioImage] [nvarchar](max) NULL,
	[PortfolioDescription] [nvarchar](max) NULL,
	[ProjectSkillJson] [nvarchar](max) NULL,
	[ProjectHashtagJson] [nvarchar](max) NULL,
 CONSTRAINT [PK_Projects] PRIMARY KEY CLUSTERED 
(
	[ProjectId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO


USE [FartakDB]
GO

/****** Object:  Table [dbo].[ProjectPhases]    Script Date: 7/19/2025 10:36:12 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO
drop TABLE [dbo].[ProjectPhases]
go
CREATE TABLE [dbo].[ProjectPhases](
	[ProjectPhaseId] [bigint] IDENTITY(1,1) NOT NULL,
	[ProjectId] [bigint] NOT NULL,
	[ProjectTeamId] [bigint] NOT NULL,
	[Duration] [bigint] NOT NULL,
	[Price] [bigint] NOT NULL,
	[CreateDate] [nvarchar](max) NOT NULL,
	[DeadLine] [nvarchar](max) NOT NULL,
	[Status] [int] NOT NULL,
 CONSTRAINT [PK_ProjectPhases] PRIMARY KEY CLUSTERED 
(
	[ProjectPhaseId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

ALTER TABLE [dbo].[ProjectPhases]  WITH CHECK ADD  CONSTRAINT [FK_ProjectPhases_Projects_ProjectId] FOREIGN KEY([ProjectId])
REFERENCES [dbo].[Projects] ([ProjectId])
ON DELETE CASCADE
GO

ALTER TABLE [dbo].[ProjectPhases] CHECK CONSTRAINT [FK_ProjectPhases_Projects_ProjectId]
GO


USE [FartakDB]
GO

/****** Object:  Table [dbo].[ProjectPhaseTasks]    Script Date: 7/19/2025 10:34:43 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[ProjectPhaseTasks](
	[ProjectPhaseTaskId] [bigint] IDENTITY(1,1) NOT NULL,
	[ProjectPhaseId] [bigint] NOT NULL,
	[Title] [nvarchar](max) NOT NULL,
	[Description] [nvarchar](max) NOT NULL,
	[CreateDate] [nvarchar](max) NOT NULL,
	[DeadLine] [nvarchar](max) NOT NULL,
	[Price] [bigint] NULL,
	[Duration] [bigint] NOT NULL,
	[Participation] [int]   NULL,
	[Status] [int]   NULL,
 CONSTRAINT [PK_ProjectPhaseTasks] PRIMARY KEY CLUSTERED 
(
	[ProjectPhaseTaskId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

ALTER TABLE [dbo].[ProjectPhaseTasks]  WITH CHECK ADD  CONSTRAINT [FK_ProjectPhaseTasks_ProjectPhases_ProjectPhaseId] FOREIGN KEY([ProjectPhaseId])
REFERENCES [dbo].[ProjectPhases] ([ProjectPhaseId])
ON DELETE CASCADE
GO

ALTER TABLE [dbo].[ProjectPhaseTasks] CHECK CONSTRAINT [FK_ProjectPhaseTasks_ProjectPhases_ProjectPhaseId]
GO


