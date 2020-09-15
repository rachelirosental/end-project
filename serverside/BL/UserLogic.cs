using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTO.NewFolder1;
using DAL;
using System.Net.Mail;
using System.Net;

namespace BL
{
    public class UserLogic
    {
        public static DAL.EzerMitzionEntities db = new DAL.EzerMitzionEntities();
        public static  user Login(string password, string email)
        {
            var user = db.users.FirstOrDefault(p => p.Password == password && p.UserName == email);
            if (user == null)
                return null;
            return DTO.NewFolder1.user.GetUser(user);

        }

        public static bool AddUser(user user)
        {
            try
            {
                var r = DTO.NewFolder1.user.GetUser(user);
                r.TypeUser1 = db.TypeUser.FirstOrDefault(p => p.TypeId == r.TypeUser);
                
                db.users.Add(r);
                db.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {

                return false;
            }

        }

        public static int DeleteUser(int id)
        {
            var q1 = db.users.FirstOrDefault(w => w.UserId == id);
            if (q1 == null)
                return 0;
            else
            {
                q1.IsDeleted = true;
                db.SaveChanges();
                return 1;
            }
        }
        public static user User(int id)
        {
            var q1 = db.users.FirstOrDefault(w => w.UserId == id);
            return user.GetUser(q1);

        }
        public static List<user> Allusers()
        {
            var list = db.users.Where(u => u.IsDeleted == false);
            return user.GetListUserDTO(list.ToList());

        }
        public static void UpdateUser(user user)
        {
            try
            {
                var userDb = db.users.FirstOrDefault(p => p.UserId == user.UserId);
                userDb.UserName = user.UserName;
                userDb.Tel = user.Tel;
                userDb.Email = user.Email;
                userDb.TypeUser = user.TypeUser;
                userDb.IsDeleted = user.IsDeleted;
                db.SaveChanges();
               
            }
            catch (Exception)
            {

                
            }

        }
        public static List<DTO.NewFolder1.TypeUser> GetTypeUser()
        {
            return DTO.NewFolder1.TypeUser.GetListTypeUseDTO(db.TypeUser.ToList());

        }
        //public static List<DTO.NewFolder1.TypeUser> getTypeUserList1()
        //{
        //    try
        //    {
        //        return DTO.NewFolder1.TypeUser.GetListTypeUseDTO(db.TypeUser.ToList());
        //    }
        //    catch
        //    {
        //        return null;
        //    }
        //}
        
        public static int SendMail(ChartData user)
        {
            try
            {

                var userDb = db.users.FirstOrDefault(p => p.UserName == user.label);
                var fromAddress = new MailAddress("keshev.ezer@gmail.com", "ezer mitzion");
                var toAddress = new MailAddress(userDb.Email, userDb.UserName);
                const string fromPassword = "keshev12";
                const string subject = "עובד מצטיין";
                const string body = "את העובדת המצטיינת כל הכבוד!!";

                var smtp = new SmtpClient
                {
                    Host = "smtp.gmail.com",
                    Port = 587,
                    EnableSsl = true,
                    DeliveryMethod = SmtpDeliveryMethod.Network,
                    Credentials = new NetworkCredential(fromAddress.Address, fromPassword),
                    Timeout = 20000
                };
                using (var message = new MailMessage(fromAddress, toAddress)
                {
                    Subject = subject,
                    Body = body
                })
                {
                    smtp.Send(message);
                }
                return 1;

            }
            catch
            {

                return 0;
            }
        }
    }
}