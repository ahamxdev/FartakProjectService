using Microsoft.AspNetCore.Http;

namespace Common.FileOperation.UploadFile
{
    public class UploadFile
    {

        public UploadFile() { }

        public bool IsUploadedFile(IFormFile file, string? uploadsRootFolder, string fileName)
        {
            if (file != null)
            {

                //     string folder = $@"upload\Logos\";


                if (!Directory.Exists(uploadsRootFolder) && uploadsRootFolder != null)
                {
                    Directory.CreateDirectory(uploadsRootFolder);
                }


                if (file == null || file.Length == 0)
                {
                    return false;
                }

                if (uploadsRootFolder != null)
                {
                    var filePath = Path.Combine(uploadsRootFolder, fileName);
                    using (var fileStream = new FileStream(filePath, FileMode.Create))
                    {
                        file.CopyTo(fileStream);
                    }
                }


                return true;
            }
            else return false;
        }
    }


}
