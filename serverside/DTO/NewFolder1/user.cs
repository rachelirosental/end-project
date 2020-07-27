using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
namespace DTO.NewFolder1
{
    public class user
    {
        public int UserId { get; set; }
        public string UserName { get; set; }
        public string Tel { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public int TypeUser { get; set; }
        public bool IsDeleted { get; set; }
        public DTO.NewFolder1.TypeUser TypeUser1 { get; set; }
        public virtual ICollection<NewFolder1.Dairy> Dairy { get; set; }
        public virtual ICollection<NewFolder1.Reference> Reference { get; set; }
        public static user GetUser(DAL.users u)
        {
            if (u == null)
                return null;
            user dto = new user()
            {
                UserId = u.UserId,
                UserName = u.UserName,
                Tel = u.Tel,
                Email = u.Email,
                Password = u.Password,
                TypeUser = u.TypeUser,
                //IsDeleted=u.IsDeleted,
                TypeUser1 = DTO.NewFolder1.TypeUser.GetTypeUser(u.TypeUser1),
                Dairy = NewFolder1.Dairy.GetListDairyDTO(u.Dairy as List<DAL.Dairy>),
                Reference = NewFolder1.Reference.GetListReferenceDTO(u.Reference as List<DAL.Reference>),

            };
            return dto;
        }
        public static DAL.users GetUser(user userdto)
        {
            if (userdto == null)
                return null;
            DAL.users user = new DAL.users()
            {
                UserId = userdto.UserId,
                UserName = userdto.UserName,
                Tel = userdto.Tel,
                Email = userdto.Email,
                Password = userdto.Password,
                TypeUser = userdto.TypeUser,
                IsDeleted=userdto.IsDeleted,
                TypeUser1 = DTO.NewFolder1.TypeUser.GetTypeUser(userdto.TypeUser1),
               Dairy = NewFolder1.Dairy.GetListDairyDAL(userdto.Dairy as List<Dairy>),
                Reference = NewFolder1.Reference.GetListReferenceDAL(userdto.Reference as List<Reference>),
            };
            return user;
        }
        public static List<DAL.users> GetListUserDAL(List<user> Luser)
        {
            if (Luser == null)
                return null;
            List<DAL.users> l = new List<DAL.users>();
            Luser.ForEach(p => l.Add(GetUser(p)));
            return l;

        }
        public static List<user> GetListUserDTO(List<DAL.users> Luser)
        {
            if (Luser == null)
                return null;
            List<user> l = new List<user>();
            Luser.ForEach(u => l.Add(GetUser(u)));
            return l;

        }


    }
}
