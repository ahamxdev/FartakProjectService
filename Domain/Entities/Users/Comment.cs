using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities.Users
{
    public class Comment
    {
        public long CommentId {  get; set; }
        public long UserId { get; set; }
        public required string Message {  get; set; }
        public required string CreateDate {  get; set; }
        public required string UpdateDate { get; set;}
        public required int Read { get; set; } //0Not 1Yes
        public int ForId {  get; set; }
        public required string action {  get; set; }
    }
}
