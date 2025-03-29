using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities.Projects
{
    public class ProjectFile
    {
        public long ProjectFileId {  get; set; }
        public long ProjectId { get; set; }
        public required string FileAddress { get; set; }
        public int OwnerAtach {  get; set; } // 0 FreeLancer 1 Owner
    }
}
