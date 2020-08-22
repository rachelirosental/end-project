using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTO.NewFolder1;
namespace BL
{
public    class ChartLogic
    {
        public static DAL.EzerMitzionEntities db = new DAL.EzerMitzionEntities();
       public static List<ChartData> CounttypeRef()
        {
            int count = 0;
            List<ChartData> typerefCount = new List<ChartData>();
            foreach(var type in db.TypeReference)
            { count = db.Reference.Count(r => r.TypeRef == type.RefId);
                ChartData chart = new ChartData();
                chart.label = type.refname;
                chart.value = Convert.ToString(count);
                typerefCount.Add(chart);


            }
            return typerefCount;
        }

    }
}
