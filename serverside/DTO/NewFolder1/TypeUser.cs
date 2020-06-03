using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
namespace DTO.NewFolder1
{
   public class TypeUser
    {
        public int TypeId { get; set; }
        public string TypeName { get; set; }
        public static TypeUser GetUser(DAL.TypeUser t)
        {
            TypeUser dto = new TypeUser()
            {
                TypeId = t.TypeId,
                TypeName = t.TypeName,

            };
            return dto;
        }
        public static TypeUser GetTypeMeeting(DTO.NewFolder1.TypeUser typeuserdto)
        {
            TypeUser type = new TypeUser()
            {
                TypeId = typeuserdto.TypeId,
                TypeName = typeuserdto.TypeName,
            };
            return type;
        }
    }
}
