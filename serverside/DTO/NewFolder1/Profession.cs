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
        public DTO.NewFolder1.subDomain  Subdomain1 { get; set; }
        public  ICollection<DTO.NewFolder1.Reference> Reference { get; set; }
        public DTO.NewFolder1.Kupot Kupot { get; set; }
        public  ICollection<DTO.NewFolder1.Kupot> Kupot11 { get; set; }
        public  ICollection<DTO.NewFolder1.Opinion> Opinions { get; set; }
        public static Profession GetProfession1(DAL.Professions p)
        {
            if (p == null)
                return null; Profession dto = new Profession()
            {
                ProfId = p.ProfId,
                ProfName = p.ProfName,
                Type = p.Type,
                Kupa = p.Kupa,
                Tel = p.Tel,
                AddTel = p.AddTel,
                Email = p.Email,
                PrivateAddres = p.PrivateAddres,
                ClinicAddres = p.ClinicAddres,
                Subdomain = p.Subdomain.Value,
                PrivateOpinion = p.PrivateOpinion,
                TypeProfessions = NewFolder1.typeProfession.GetTypeProfession(p.typeProfessions),
                Subdomain1 = NewFolder1.subDomain.GetSubDomain(p.Subdomain1),
                Kupot=NewFolder1.Kupot.GetKupot(p.Kupot1),
                Reference=NewFolder1.Reference.GetListReferenceDTO(p.References as List<DAL.Reference>),
                Opinions=NewFolder1.Opinion.GetListOpinionDTO(p.Opinions as List<DAL.Opinion>)

            };
            return dto;
        }
        public  static DAL.Professions GetProfession1(DTO.NewFolder1.Profession Professiondto)
        {
            if (Professiondto == null)
                return null;
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
                typeProfessions = NewFolder1.typeProfession.GetTypeProfession(Professiondto.TypeProfessions),
                Subdomain1 = NewFolder1.subDomain.GetSubDomain(Professiondto.Subdomain1),
                Kupot1=NewFolder1.Kupot.GetKupot(Professiondto.Kupot),
                References=NewFolder1.Reference.GetListReferenceDAL(Professiondto.Reference as List<Reference>),
                Opinions = NewFolder1.Opinion.GetListOpinionDAL(Professiondto.Opinions as List<Opinion>)
          };
            return profession;
        }
        //public static ICollection<Profession> GetListProfessinDTO(ICollection<DAL.Professions> Lprofession)
        //{
        //    List<Profession> l = new List<Profession>();
        //    (Lprofession as List<DAL.Professions>).ForEach(p => l.Add(GetProfession1(p)));
        //    return l;

        //}
        public static List<Profession> GetListProfessinDTO(List<DAL.Professions> Lprofession)
        {
            if (Lprofession == null)
                return null;
            List<Profession> l = new List<Profession>();
            Lprofession .ForEach(p => l.Add(GetProfession1(p)));
            return l;

        }
        public static List<DAL.Professions> GetListProfessinDAL(List<Profession> Lprofession)
        {
            if (Lprofession == null)
                return null;
            List<DAL.Professions> l = new List<DAL.Professions>();
            Lprofession.ForEach(p => l.Add(GetProfession1(p)));
            return l;

        }

    }
}
