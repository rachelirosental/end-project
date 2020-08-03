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
       public Dictionary<string, int> counttype()
        {
            int count = 0;
            Dictionary<string, int> typerefCount = new Dictionary<string, int>();
            foreach(var type in db.TypeReference)
            { count = db.Reference.Count(r => r.TypeRef == type.RefId);
                typerefCount.Add(type.refname, count);


            }
            return typerefCount;
        }

    }
}
