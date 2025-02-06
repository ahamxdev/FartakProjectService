namespace Common.Dto
{
    public class ResultDto
    {
        public bool IsSuccess { get; set; }
        public required string Message { get; set; }
    }
    public class ResultDto<T>
    {
        public bool IsSuccess { get; set; }
        public required string Message { get; set; }
        public required T Data { set; get; }
    }
    public class APIResultDto
    {
        public bool IsSuccess { get; set; }
        public required string Message { get; set; }
        public required ResultDto Value { get; set; }
        public int ResponseCode { get; set; }
    }
    public class APIResultDto<T>
    {
        public bool IsSuccess { get; set; }
        public required string Message { get; set; }
        public required T Data { set; get; }
        public required ResultDto<T> Value { get; set; }
        public int ResponseCode { get; set; }
    }
    public class ErrorDto
    {
        public bool IsSuccess { get; set; }
        public required string Message { get; set; }
        public required string Service { get; set; }
        public int ResponseCode { get; set; }
    }
}
