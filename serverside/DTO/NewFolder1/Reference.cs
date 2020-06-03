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



            };
            return dto;
        }
        public static Reference GetReference(DTO.NewFolder1.Reference referencedto)
        {
            Reference reference = new Reference()
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
            };
            return reference;
        }

    }
}
