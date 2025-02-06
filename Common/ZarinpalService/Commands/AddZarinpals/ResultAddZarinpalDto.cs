namespace Common.Services.ZarinpalService.Commands.AddZarinpals
{


    public class ResultDataDto
    {
        public long code { get; set; }
        public required string message { get; set; }
        public required string authority { get; set; }
        public required string fee_type { get; set; }
        public long fee { get; set; }
    }

    public class ResultErrorDto
    {

        public int code { get; set; }
        public required string message { get; set; }

    }

    public class ResultVerifyDataResponseDto
    {
        public required string ref_id { get; set; }
    }

    public class ResultVerifyDataDto
    {
        public long code { get; set; }
        public required string message { get; set; }
        public required string card_hash { get; set; }
        public required string card_pan { get; set; }
        public required string ref_id { get; set; }
        public required string fee_type { get; set; }
        public required string fee { get; set; }
    }
    public class ResultRequestZarinpalSuccessDto
    {
        public ResultDataDto? Data { get; set; }
        public ResultErrorDto[]? Errors { get; set; }
    }
    public class ResultRequestZarinpalDto
    {
        public ResultDataDto? Data { get; set; }
        public ResultErrorDto? Errors { get; set; }
    }
    public class ResultRequestZarinpalErrorDto
    {
        public ResultDataDto[]? Data { get; set; }
        public ResultErrorDto? Errors { get; set; }
    }
    public class ResultVerifyZarinpalDto
    {
        public required ResultVerifyDataDto Data { get; set; }
    }
}
