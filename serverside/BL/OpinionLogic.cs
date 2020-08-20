using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTO;
using DTO.NewFolder1;


namespace BL
{
   public class OpinionLogic
    {
        public static DAL.EzerMitzionEntities db = new DAL.EzerMitzionEntities();
        public static List<Opinion> GetOpinionList()
        {
            try
            {
                return Opinion.GetListOpinionDTO(db.Opinion.ToList());
            }
            catch
            {
                return null;
            }
        }



        public static List<DTO.NewFolder1.Opinion> getopinionbyprofid(int id)
        {
            try
            {
                var opinion = db.Professions.FirstOrDefault(p => p.ProfId == id).Opinion;
                if (opinion == null)
                    return null;
                return DTO.NewFolder1.Opinion.GetListOpinionDTO(opinion.ToList());
            }
            catch
            {
                return null;
            }

        }
        public static bool AddOpinion(Opinion opinion)
        {
            try
            {
                var o = DTO.NewFolder1.Opinion.GetOpinion(opinion);
                o.Professions = db.Professions.FirstOrDefault(p => p.ProfId == o.ProfPersonid);

                db.Opinion.Add(o);
                db.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {

                return false;
            }

        }

    }
}
