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
            return Profession.GetListProfessinDTO(db.Professions.ToList());
        }

        public static Profession GetProfessionbyId(int id)
        {
            var profession = db.Professions.FirstOrDefault(p => p.ProfId == id);
            return Profession.GetProfession1(profession);

        }
        public static void CreateProfession(Profession profession)
        {
            db.Professions.Add(Profession.GetProfession1(profession));
            db.SaveChanges();
        }
        public static void DeleateProfession(int id)
        {
            var profession = db.Professions.FirstOrDefault(p => p.ProfId==id);
            db.Professions.Remove(profession);
            db.SaveChanges();

        }
        public static void UpdateProfession(Profession profession)
        {
           
            var p = db.Professions.FirstOrDefault(pr => pr.ProfId==Profession.GetProfession1(profession).ProfId);

            if(p!= null)
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


        }

        public static List<typeProfession> GetProfTypeList()
        {
            return typeProfession.GetListTypeProfDTO(db.typeProfessions.ToList());
        }



    }
}
