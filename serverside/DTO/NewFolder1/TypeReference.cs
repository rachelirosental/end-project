using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
namespace DTO.NewFolder1
{
   public class TypeReference
    {
        public int RefId { get; set; }
        public string refname { get; set; }
        public ICollection<DTO.NewFolder1.Reference> Reference { get; set; }
        public static TypeReference GetTypeReference(DAL.TypeReference t)
        {
            if (t == null)
                return null;
            TypeReference dto = new TypeReference()
            {
                RefId = t.RefId,
                refname = t.refname,
                Reference = NewFolder1.Reference.GetListReferenceDTO(t.Reference as List<DAL.Reference>),

            };
            return dto;
        }
        public static DAL.TypeReference GetTypeReference(DTO.NewFolder1.TypeReference typereferencedto)
        {
            if (typereferencedto == null)
                return null;
            DAL.TypeReference type = new DAL.TypeReference()
            {
                RefId = typereferencedto.RefId,
                refname = typereferencedto.refname,
                
                Reference = NewFolder1.Reference.GetListReferenceDAL(typereferencedto.Reference as List<Reference>),
            };
            return type;
        }
        public static List<TypeReference> GetListTypeRefDTO(List<DAL.TypeReference> TRef)
        {
            if (TRef == null)
                return null;
            List<TypeReference> l = new List<TypeReference>();

            TRef.ForEach(k => l.Add(GetTypeReference(k)));
            return l;

        }
    }
}
