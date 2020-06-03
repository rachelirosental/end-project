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
        public static TypeReference GetTypeReference(DAL.TypeReference t)
        {
            TypeReference dto = new TypeReference()
            {
                RefId = t.RefId,
                refname = t.refname,

            };
            return dto;
        }
        public static TypeReference GetTypeMeeting(DTO.NewFolder1.TypeReference typereferencedto)
        {
            TypeReference type = new TypeReference()
            {
                RefId = typereferencedto.RefId,
                refname = typereferencedto.refname,
            };
            return type;
        }
    }
}
