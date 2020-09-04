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
            //לולאה שעוברת על כל סוגי הפניות
            foreach(var type in db.TypeReference)
            {    
              //מונה את כמות הפניות לכל סוג
             count = db.Reference.Count(r => r.TypeRef == type.RefId);
                ChartData chart = new ChartData();
                chart.label = type.refname;
                chart.value = Convert.ToString(count);
                typerefCount.Add(chart);


            }
            return typerefCount;
        }


        public static List<ChartData> CountopenRef()
        {
            int count = 0;
            List<ChartData> OpenrefCount = new List<ChartData>();
            foreach (var user in db.users)
            {
                count = db.Reference.Count(r => r.UserName ==user.UserId&&r.IsCare==true);
                ChartData chart = new ChartData();
                chart.label = user.UserName;
                chart.value = Convert.ToString(count);
                OpenrefCount.Add(chart);


            }
            return OpenrefCount;
        }

    }
}
