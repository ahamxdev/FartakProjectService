using Application.Interfaces.Contexts;

namespace Application.Services.PaymentUses.Queries.GetPaymentUses
{
    public class GetPaymentUseService : IGetPaymentUseService
    {
        private readonly IDatabaseContext _context;
        public GetPaymentUseService(IDatabaseContext context)
        {
            _context = context;
        }

        public ResultGetPaymentUseDto GetByUserId(RequestGetPaymentUseGetByUserIdDto request)
        {
            var PaymentUse = _context.PaymentUses.Where(x => x.UserId == request.UserId);
            var PaymentUseList = PaymentUse.Select(p => new GetPaymentUseDto
            {
                PaymentUseId = p.PaymentUseId,
                UserId = p.UserId,
                PaymentUseDate = p.PaymentUseDate,
                PaymentUseTime = p.PaymentUseTime,
                PaymentId = p.PaymentId,
                ProjectPhaseId=p.ProjectPhaseId,
                CourseId = p.CourseId,
                Price = p.Price

            }).OrderBy(x => x.PaymentUseId).ToList();
            return new ResultGetPaymentUseDto
            {
                PaymentUses = PaymentUseList,
                Rows = PaymentUseList.Count,
            };
        }


        public ResultGetPaymentUseDto GetById(RequestGetPaymentUseGetByIdDto request)
        {
            var PaymentUse = _context.PaymentUses.Where(x => x.PaymentUseId == request.PaymentUseId);
            var PaymentUseList = PaymentUse.Select(p => new GetPaymentUseDto
            {
                PaymentUseId = p.PaymentUseId,
                UserId = p.UserId,
                PaymentUseDate = p.PaymentUseDate,
                PaymentUseTime = p.PaymentUseTime,
                PaymentId = p.PaymentId,
                CourseId = p.CourseId,
                Price = p.Price,
                ProjectPhaseId = p.ProjectPhaseId,

            }).OrderBy(x => x.PaymentUseId).ToList();
            return new ResultGetPaymentUseDto
            {
                PaymentUses = PaymentUseList,
                Rows = PaymentUseList.Count,
            };
        }


        public ResultGetPaymentUseDto GetByPaymentId(RequestGetPaymentUseGetByPaymentIdDto request)
        {
            var PaymentUse = _context.PaymentUses.Where(x => x.PaymentId == request.PaymentId);
            var PaymentUseList = PaymentUse.Select(p => new GetPaymentUseDto
            {
                PaymentUseId = p.PaymentUseId,
                UserId = p.UserId,
                PaymentUseDate = p.PaymentUseDate,
                PaymentUseTime = p.PaymentUseTime,
                PaymentId = p.PaymentId,
                CourseId = p.CourseId,
                ProjectPhaseId = p.ProjectPhaseId,
                Price = p.Price

            }).OrderBy(x => x.PaymentUseId).ToList();
            return new ResultGetPaymentUseDto
            {
                PaymentUses = PaymentUseList,
                Rows = PaymentUseList.Count,
            };
        }


        public ResultGetPaymentUseDto GetByCourseId(RequestGetPaymentUseGetByCourseIdDto request)
        {
            var PaymentUse = _context.PaymentUses.Where(x => x.CourseId == request.CourseId);
            var PaymentUseList = PaymentUse.Select(p => new GetPaymentUseDto
            {
                PaymentUseId = p.PaymentUseId,
                UserId = p.UserId,
                PaymentUseDate = p.PaymentUseDate,
                PaymentUseTime = p.PaymentUseTime,
                PaymentId = p.PaymentId,
                CourseId = p.CourseId,
                ProjectPhaseId = p.ProjectPhaseId,
                Price = p.Price

            }).OrderBy(x => x.PaymentUseId).ToList();
            return new ResultGetPaymentUseDto
            {
                PaymentUses = PaymentUseList,
                Rows = PaymentUseList.Count,
            };
        }



        public ResultGetPaymentUseDto GetByProjectPhaseId(RequestGetPaymentUseGetByProjectPhaseIdDto request)
        {
            var PaymentUse = _context.PaymentUses.Where(x => x.ProjectPhaseId == request.ProjectPhaseId);
            var PaymentUseList = PaymentUse.Select(p => new GetPaymentUseDto
            {
                PaymentUseId = p.PaymentUseId,
                UserId = p.UserId,
                PaymentUseDate = p.PaymentUseDate,
                PaymentUseTime = p.PaymentUseTime,
                PaymentId = p.PaymentId,
                CourseId = p.CourseId,
                ProjectPhaseId = p.ProjectPhaseId,
                Price = p.Price

            }).OrderBy(x => x.PaymentUseId).ToList();
            return new ResultGetPaymentUseDto
            {
                PaymentUses = PaymentUseList,
                Rows = PaymentUseList.Count,
            };
        }


        public ResultGetPaymentUseDto GetAll()
        {
            var PaymentUse = _context.PaymentUses;
            var PaymentUseList = PaymentUse.Select(p => new GetPaymentUseDto
            {
                PaymentUseId = p.PaymentUseId,
                UserId = p.UserId,
                PaymentUseDate = p.PaymentUseDate,
                PaymentUseTime = p.PaymentUseTime,
                PaymentId = p.PaymentId,
                ProjectPhaseId = p.ProjectPhaseId,
                CourseId = p.CourseId,
                Price = p.Price

            }).OrderBy(x => x.PaymentUseId).ToList();
            return new ResultGetPaymentUseDto
            {
                PaymentUses = PaymentUseList,
                Rows = PaymentUseList.Count,
            };
        }
    }
}
