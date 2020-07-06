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
            if (t == null)
                return null;
            TypeUser dto = new TypeUser()
            {
                TypeId = t.TypeId,
                TypeName = t.TypeName,
                users= NewFolder1.user.GetListUserDTO(t.users as List<DAL.users>)

            };
            return dto;
        }
        public static DAL.TypeUser GetTypeUser(DTO.NewFolder1.TypeUser typeuserdto)
        {
            if (typeuserdto == null)
                return null;
            DAL.TypeUser type = new DAL.TypeUser()
            {
                TypeId = typeuserdto.TypeId,
                TypeName = typeuserdto.TypeName,
                users = NewFolder1.user.GetListUserDAL(typeuserdto.users as List<NewFolder1.user>)
            };
            return type;
        }
        public static List<TypeUser> GetListTypeUseDTO(List<DAL.TypeUser> LtypeUser)
        {
            if (LtypeUser == null)
                return null;
            List<TypeUser> l = new List<TypeUser>();

            LtypeUser.ForEach(t => l.Add(GetTypeUser(t)));
            return l;

        }
        public static List<DAL.TypeUser> GetListTypeUserfDAL(List<TypeUser> LtypeUser)
        {
            if (LtypeUser == null)
                return null;
            List<DAL.TypeUser> l = new List<DAL.TypeUser>();
            LtypeUser.ForEach(t => l.Add(GetTypeUser(t)));
            return l;

        }

    }
}
