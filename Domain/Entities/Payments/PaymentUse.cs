using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities.Payments
{
    public class PaymentUse
    {
        public long PaymentUseId { get; set; }
        public long PaymentId { get; set; }
        public long UserId { get; set; }
        public long CourseId { get; set; }
        public required string PaymentUseDate { get; set; }
        public required string PaymentUseTime { get; set; }
        public long Price { get; set; }
    }
}
