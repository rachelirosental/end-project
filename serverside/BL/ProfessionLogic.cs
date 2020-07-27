using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTO;
using DTO.NewFolder1;

namespace BL
{
 public   class ProfessionLogic
    {
        public static DAL.EzerMitzionEntities db = new DAL.EzerMitzionEntities();
      
        public static List<Profession> GetProfList()
        {
            try
            {
                return Profession.GetListProfessinDTO(db.Professions.ToList());
            }
            catch
            {
                return null;
            }
        }

        public static Profession GetProfessionbyId(int id)
        {
            try
            {
                var profession = db.Professions.FirstOrDefault(p => p.ProfId == id);
                return Profession.GetProfession1(profession);
            }
            catch
            {
                return null;
            }

        }
        public static bool CreateProfession(Profession profession)
        {
            try
            {
                db.Professions.Add(Profession.GetProfession1(profession));
                db.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }
        public static int DeleateProfession(int id)
        {
            
                var profession = db.Professions.FirstOrDefault(p => p.ProfId == id);
            if (profession == null)
                return 0;
            else {
                db.Professions.Remove(profession);
                db.SaveChanges();
                return 1;
            }
           
        }
        public static bool UpdateProfession(Profession profession)
        {
            try
            {
                var p = db.Professions.FirstOrDefault(pr => pr.ProfId == Profession.GetProfession1(profession).ProfId);

                if (p != null)
                {
                    p.ProfId = profession.ProfId;
                    p.ProfName = profession.ProfName;
                    p.Type = profession.Type;
                    p.Kupa = profession.Kupa;
                    p.Tel = profession.Tel;
                    p.AddTel = profession.AddTel;
                    p.Email = profession.Email;
                    p.PrivateAddres = profession.PrivateAddres;
                    p.ClinicAddres = profession.ClinicAddres;
                    p.Subdomain = profession.Subdomain;
                    p.PrivateOpinion = profession.PrivateOpinion;
                    db.SaveChanges();

                }
                return true;
            }
            catch
            {
                return false;
            }

        }

        public static List<typeProfession> GetProfTypeList()
        {
            try
            {
                return typeProfession.GetListTypeProfDTO(db.typeProfessions.ToList());
            }
            catch
            {
                return null;
            }
        }
        public static List<Kupot> GetProfKupotList()
        {
            try
            {
                return Kupot.GetListKupaDTO(db.Kupot1.ToList());
            }
            catch
            {
                return null;
            }
        }



    }
}
