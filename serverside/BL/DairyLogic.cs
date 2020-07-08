using DTO.NewFolder1;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
 public  class DairyLogic
    {
        public static DAL.EzerMitzionEntities db = new DAL.EzerMitzionEntities();
        public static List<Dairy> AllDaries()
        {
            try
            {
                return Dairy.GetListDairyDTO(db.Dairy.ToList());
            }
            catch
            {
                return null;
            }

        }
    }
}
