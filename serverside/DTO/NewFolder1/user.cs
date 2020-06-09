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
        public string UserFname { get; set; }
        public string UserLname { get; set; }
        public string Tel { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public int TypeUser { get; set; }
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
                UserFname = u.UserFname,
                UserLname = u.UserLname,
                Tel = u.Tel,
                Email = u.Email,
                Password = u.Password,
                TypeUser = u.TypeUser,
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
                UserFname = userdto.UserFname,
                UserLname = userdto.UserLname,
                Tel = userdto.Tel,
                Email = userdto.Email,
                Password = userdto.Password,
                TypeUser = userdto.TypeUser,
                TypeUser1 = DTO.NewFolder1.TypeUser.GetUser(userdto.TypeUser1),
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
