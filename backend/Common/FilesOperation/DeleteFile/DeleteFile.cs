namespace Common.FileOperation.DeleteFile
{
    public class DeleteFile
    {
        public DeleteFile() { }

        public bool IsDeletedFile(string fileAddress)
        {
            if (File.Exists(fileAddress))
            {
                File.Delete(fileAddress);
            }

            return true;
        }
    }
}
