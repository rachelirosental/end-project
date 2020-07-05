using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTO;
using DTO.NewFolder1;

namespace BL
{
public    class DairyLogic
    {

        public static DAL.EzerMitzionEntities db = new DAL.EzerMitzionEntities();
        public static List<DTO.NewFolder1.Dairy> AllDaries()
        {
            return DTO.NewFolder1.Dairy.GetListDairyDTO(db.Dairy.ToList());

        }

    }
}
