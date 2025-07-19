using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Services.ProjectPhaseTasks.Queries.GetProjectPhaseTask
{
    public interface IGetProjectPhaseTaskService
    {
        ResultGetProjectPhaseTaskDto GetById(RequestGetProjectPhaseTaskByIdDto request);
        ResultGetProjectPhaseTaskDto GetByProjectId(RequestGetProjectPhaseTaskByProjectIdDto request);
           ResultGetProjectPhaseTaskDto GetAll();
    }
}
