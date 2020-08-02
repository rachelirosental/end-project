using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DTO;
namespace DTO.NewFolder1
{
   public class typeProfession
    {
        public int ProfessionId { get; set; }
        public string Nameprofession { get; set; }
        public ICollection<NewFolder1.Profession> Professions { get; set; }
        public static typeProfession GetTypeProfession(DAL.typeProfessions p)
        {
            if (p == null)
                return null;
            typeProfession dto = new typeProfession()
            {
                ProfessionId = p.ProfessionId,
                Nameprofession = p.Nameprofession,
                //Professions = Profession.GetListProfessinDTO(p.Professions as List<DAL.Professions>)

            };
            return dto;
        }
        public static DAL.typeProfessions GetTypeProfession(DTO.NewFolder1.typeProfession typeprofessiondto)
        {
            if (typeprofessiondto == null)
                return null;
            DAL.typeProfessions type =new DAL.typeProfessions()
            {
                ProfessionId = typeprofessiondto.ProfessionId,
                Nameprofession = typeprofessiondto.Nameprofession,
              Professions = NewFolder1.Profession.GetListProfessinDAL(typeprofessiondto.Professions as List<Profession>)
          };
            return type;
        }
        public static List<typeProfession> GetListTypeProfDTO(List<DAL.typeProfessions> LtypeProf)
        {
            if (LtypeProf == null)
                return null;
            List<typeProfession> l = new List<typeProfession>();

            LtypeProf.ForEach(t => l.Add(GetTypeProfession(t)));
            return l;

        }
        public static List<DAL.typeProfessions> GetListTypeProfDAL(List<typeProfession> LtypeProf)
        {
            if (LtypeProf == null)
                return null;
            List<DAL.typeProfessions> l = new List<DAL.typeProfessions>();
            LtypeProf.ForEach(t => l.Add(GetTypeProfession(t)));
            return l;

        }
    }
}
