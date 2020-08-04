using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
public    class ChartLogic
    {
        public static DAL.EzerMitzionEntities db = new DAL.EzerMitzionEntities();
       public static Dictionary<string, string> CounttypeRef()
        {
            int count = 0;
            Dictionary<string, string> typerefCount = new Dictionary<string, string>();
            foreach(var type in db.TypeReference)
            { count = db.Reference.Count(r => r.TypeRef == type.RefId);
                typerefCount.Add(type.refname,Convert.ToString( count));


            }
            return typerefCount;
        }

    }
}
