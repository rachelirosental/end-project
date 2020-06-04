using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DTO;
namespace DTO.NewFolder1
{ 
   public class Profession
    {
        public int ProfId { get; set; }
        public string ProfName { get; set; }
        public int Type { get; set; }
        public int Kupa { get; set; }
        public string Tel { get; set; }
        public string AddTel { get; set; }
        public string Email { get; set; }
        public string PrivateAddres { get; set; }
        public string ClinicAddres { get; set; }
        public   int Subdomain { get; set; }
        public string PrivateOpinion { get; set; }
        public DTO.NewFolder1.typeProfession TypeProfessions { get; set; }
        public static Profession GetProfession1(DAL.Professions p)
        {
            Profession dto = new Profession()
            {
               ProfId=p.ProfId,
                ProfName = p.ProfName,
                Type = p.Type,
                Kupa = p.Kupa,
                Tel = p.Tel,
                AddTel = p.AddTel,
                Email = p.Email,
                PrivateAddres = p.PrivateAddres,
                ClinicAddres = p.ClinicAddres,
                Subdomain=p.Subdomain.Value,
                PrivateOpinion=p.PrivateOpinion,
                TypeProfessions= NewFolder1.typeProfession.GetTypeProfession(p.typeProfessions)

            };
            return dto;
        }
        public  static DAL.Professions GetProfession1(DTO.NewFolder1.Profession Professiondto)
        {
          DAL.Professions profession = new DAL.Professions()
            {
               ProfId = Professiondto.ProfId,
                ProfName = Professiondto.ProfName,
                Type = Professiondto.Type,
                Kupa = Professiondto.Kupa,
                Tel = Professiondto.Tel,
                AddTel = Professiondto.AddTel,
                Email = Professiondto.Email,
                PrivateAddres = Professiondto.PrivateAddres,
                ClinicAddres = Professiondto.ClinicAddres,
                Subdomain=Professiondto.Subdomain,
                PrivateOpinion=Professiondto.PrivateOpinion,
            };
            return profession;
        }
        public static List<Profession> GetListProfessinDTO(List<DAL.Professions> Lprofession)
        {
            List<Profession> l = new List<Profession>();
            Lprofession.ForEach(p => l.Add(GetProfession1(p)));
            return l;

        }
        public static List<DAL.Professions> GetListProfessinDAL(List<Profession> Lprofession)
        {
            List<DAL.Professions> l = new List<DAL.Professions>();
            Lprofession.ForEach(p => l.Add(GetProfession1(p)));
            return l;

        }

    }
}
