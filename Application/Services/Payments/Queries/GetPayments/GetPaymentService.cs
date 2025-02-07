using Application.Interfaces.Contexts;

namespace Application.Services.Payments.Queries.GetPayments
{
    public class GetPaymentService : IGetPaymentService
    {
        private readonly IDatabaseContext _context;
        public GetPaymentService(IDatabaseContext context)
        {
            _context = context;
        }
        public ResultGetPaymentDto GetByZarinpalAuthority(RequestGetPaymentByZarinpalAuthorityDto request)
        {
            var payments = _context.Payments.Where(p => p.ZarinpalAuthority.Equals(request.ZarinpalAuthority));
            var paymentList = payments.Select(p => new GetPaymentDto
            {
                PaymentId = p.PaymentId,
                ConfirmDate = p.ConfirmDate,
                ConfirmTime = p.ConfirmTime,
                OrderId = p.OrderId,
                PurchaseDate = p.PurchaseDate,
                PurchaseTime = p.PurchaseTime,
                PurchaseState = p.PurchaseState,
                Description = p.Description,
                Price = p.Price,
                UserId = p.UserId

            }).OrderBy(x => x.PaymentId).ToList();
            return new ResultGetPaymentDto
            {
                Payments = paymentList,
                Rows = paymentList.Count,
            };
        }

        public ResultGetPaymentDto GetById(RequestGetPaymentByIdDto request)
        {
            var payments = _context.Payments.Where(p => p.PaymentId == request.PaymentId);
            var paymentList = payments.Select(p => new GetPaymentDto
            {
                PaymentId = p.PaymentId,
                ConfirmDate = p.ConfirmDate,
                ConfirmTime = p.ConfirmTime,
                OrderId = p.OrderId,
                PurchaseDate = p.PurchaseDate,
                PurchaseTime = p.PurchaseTime,
                PurchaseState = p.PurchaseState,
                Description = p.Description,
                Price = p.Price,
                UserId = p.UserId

            }).OrderBy(x => x.PaymentId).ToList();
            return new ResultGetPaymentDto
            {
                Payments = paymentList,
                Rows = paymentList.Count,
            };
        }
        public ResultGetPaymentDto GetAll()
        {
            var payments = _context.Payments;
            var paymentList = payments.Select(p => new GetPaymentDto
            {
                PaymentId = p.PaymentId,
                ConfirmDate = p.ConfirmDate,
                ConfirmTime = p.ConfirmTime,
                OrderId = p.OrderId,
                PurchaseDate = p.PurchaseDate,
                PurchaseTime = p.PurchaseTime,
                PurchaseState = p.PurchaseState,
                Description = p.Description,
                Price = p.Price,
                UserId = p.UserId

            }).OrderByDescending(x => x.PaymentId).ToList();
            return new ResultGetPaymentDto
            {
                Payments = paymentList,
                Rows = paymentList.Count,
            };
        }
        public ResultGetPaymentDto GetByUserId(RequestGetPaymentByUserIdDto request)
        {
            var payments = _context.Payments.Where(p => p.UserId == request.UserId);
            var paymentList = payments.Select(p => new GetPaymentDto
            {
                PaymentId = p.PaymentId,
                ConfirmDate = p.ConfirmDate,
                ConfirmTime = p.ConfirmTime,
                OrderId = p.OrderId,
                PurchaseDate = p.PurchaseDate,
                PurchaseTime = p.PurchaseTime,
                PurchaseState = p.PurchaseState,
                Description = p.Description,
                Price = p.Price,
                UserId = p.UserId

            }).OrderByDescending(x => x.PaymentId).ToList();
            return new ResultGetPaymentDto
            {
                Payments = paymentList,
                Rows = paymentList.Count,
            };
        }


        public ResultGetPaymentDto GetByOrderId(RequestGetPaymentByOrderIdDto request)
        {
            var payments = _context.Payments.Where(p => p.OrderId == request.OrderId);
            var paymentList = payments.Select(p => new GetPaymentDto
            {
                PaymentId = p.PaymentId,
                ConfirmDate = p.ConfirmDate,
                ConfirmTime = p.ConfirmTime,
                OrderId = p.OrderId,
                PurchaseDate = p.PurchaseDate,
                PurchaseTime = p.PurchaseTime,
                PurchaseState = p.PurchaseState,
                Description = p.Description,
                Price = p.Price,
                UserId = p.UserId

            }).OrderBy(x => x.PaymentId).ToList();
            return new ResultGetPaymentDto
            {
                Payments = paymentList,
                Rows = paymentList.Count,
            };
        }

    }
}
