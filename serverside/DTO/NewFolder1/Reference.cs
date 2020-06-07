using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
namespace DTO.NewFolder1
{
   public class Reference
    {
        public int RefId { get; set; }
        public System.DateTime Date { get; set; }
        public string Description { get; set; }
        public System.DateTime BornDate { get; set; }
        public bool IsCare { get; set; }
        public int UserName { get; set; }
        public int AttendantId { get; set; }
        public int ProfId { get; set; }
        public int TypeRef { get; set; }
        public string recommendation { get; set; }
        public NewFolder1.Profession  Professions { get; set; }
        public  NewFolder1.user users { get; set; }
        public NewFolder1.TypeReference TypeReference  { get; set; }
        public static Reference GetReference(DAL.Reference r)
        {
            Reference dto = new Reference()
            {
                RefId = r.RefId,
                Date = r.Date.Value,
                Description = r.Description,
                BornDate = r.BornDate.Value,
                IsCare = r.IsCare.Value,
                UserName = r.UserName.Value,
                AttendantId = r.AttendantId.Value,
                ProfId = r.ProfId.Value,
                TypeRef = r.TypeRef.Value,
                recommendation=r.recommendation,
                Professions= NewFolder1.Profession.GetProfession1(r.Professions),
                users = NewFolder1.user.GetUser(r.users),
                TypeReference=NewFolder1.TypeReference.GetTypeReference(r.TypeReference) 

            };
            return dto;
        }
        public static DAL.Reference GetReference(DTO.NewFolder1.Reference referencedto)
        {
            DAL.Reference reference = new DAL.Reference()
            {
                RefId = referencedto.RefId,
                Date = referencedto.Date,
                Description = referencedto.Description,
                BornDate = referencedto.BornDate,
                IsCare = referencedto.IsCare,
                UserName = referencedto.UserName,
                AttendantId = referencedto.AttendantId,
                ProfId = referencedto.ProfId,
                TypeRef = referencedto.TypeRef,
                recommendation=referencedto.recommendation,
                Professions = NewFolder1.Profession.GetProfession1(referencedto.Professions),
                users = NewFolder1.user.GetUser(referencedto.users),
                TypeReference = NewFolder1.TypeReference.GetTypeReference(referencedto.TypeReference)
            };
            return reference;
        }

        public static ICollection<Reference> GetListReferenceDTO(ICollection<DAL.Reference> Lreference)
        {
            List<Reference> l = new List<Reference>();
            
            (Lreference as List<DAL.Reference>).ForEach(r => l.Add(GetReference(r)));
            return l;

        }
        public static ICollection<DAL.Reference> GetListReferenceDAL(ICollection<Reference> Lreference)
        {
            List<DAL.Reference> l = new List<DAL.Reference>();
            (Lreference as List<Reference>).ForEach(r => l.Add(GetReference(r)));
            return l;

        }

    }
}
