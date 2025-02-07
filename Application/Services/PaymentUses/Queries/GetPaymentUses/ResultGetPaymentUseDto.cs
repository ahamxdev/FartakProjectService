using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Application.Services.TeacherUserSelects.Queries.GetTeacherUserSelects;

namespace Application.Services.PaymentUses.Queries.GetPaymentUses
{
    public class ResultGetPaymentUseDto
    {
        public required List<GetPaymentUseDto> PaymentUses { get; set; }
        public long Rows { get; set; }
    }
}
