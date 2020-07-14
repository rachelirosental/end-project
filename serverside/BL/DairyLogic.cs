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
        public static List<Dairy> AllDaries(int id)
        {
            try
            {
                
                //List<DAL.Dairy> l = new List<DAL.Dairy>();
                List<DAL.Dairy> l = db.Dairy.Where(d => d.UserId == id).ToList();
                return Dairy.GetListDairyDTO(l);
            }
            catch
            {
                return null;
            }

        }
    }
}
