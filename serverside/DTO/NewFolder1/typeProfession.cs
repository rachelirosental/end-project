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
            typeProfession dto = new typeProfession()
            {
                ProfessionId = p.ProfessionId,
                Nameprofession = p.Nameprofession,
                Professions = NewFolder1.Profession.GetListProfessinDTO(k.Professions as List<DAL.Professions>)

            };
            return dto;
        }
        public static DAL.typeProfessions GetTypeProfession(DTO.NewFolder1.typeProfession typeprofessiondto)
        {
          DAL.typeProfessions type =new DAL.typeProfessions()
            {
                ProfessionId = typeprofessiondto.ProfessionId,
                Nameprofession = typeprofessiondto.Nameprofession,
            };
            return type;
        }
    }
}
