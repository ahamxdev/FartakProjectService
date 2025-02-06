namespace Application.Services.Blogs.Queries.GetBlog
{
    public class RequestGetBlogByIdDto
    {
        public long BlogId { get; set; }

    }

    public class RequestGetBlogByIdListDto
    {
        public required List<long> BlogIdList { get; set; }
    }

    public class RequestGetBlogByEnglishTitleDto
    {
        public required string EnglishTitle { get; set; }
    }


    public class RequestGetBlogByBlogCategoryIdDto
    {
        public long BlogCategoryId { get; set; }

    }
    public class RequestGetBlogCategoryPage
    {
        public long BlogCategoryId { get; set; }
        public int Page { get; set; }

    }
    public class RequestGetBlogByWriterIdDto
    {
        public long WriterId { get; set; }
    }


    public class RequestGetBlogByBlogCategoryIdListDto
    {
        public required List<long> BlogCategoryIdList { get; set; }

    }


    public class RequestGetBlogByFilterAllDto
    {
        public List<long>? BlogWriterIdList { get; set; }
        public List<long>? BlogUsageTagIdList { get; set; }
        public List<long>? BlogSourceTagIdList { get; set; }
        public List<long>? BlogSubjectTagIdList { get; set; }
        public List<long>? BlogCategoryIdList { get; set; }
        public List<long>? BlogIdList { get; set; }

    }

}
