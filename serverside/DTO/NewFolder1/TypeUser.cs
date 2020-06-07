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
        public virtual ICollection<NewFolder1.user> users { get; set; }
        public static TypeUser GetTypeUser(DAL.TypeUser t)
        {
            TypeUser dto = new TypeUser()
            {
                TypeId = t.TypeId,
                TypeName = t.TypeName,
                users= NewFolder1.user.GetListUserDTO(t.users as List<DAL.users>)

            };
            return dto;
        }
        public static DAL.TypeUser GetUser(DTO.NewFolder1.TypeUser typeuserdto)
        {
            DAL.TypeUser type = new DAL.TypeUser()
            {
                TypeId = typeuserdto.TypeId,
                TypeName = typeuserdto.TypeName,
                users = NewFolder1.user.GetListUserDAL(typeuserdto.users as List<NewFolder1.user>)
            };
            return type;
        }
    }
}
