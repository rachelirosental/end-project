﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTO.NewFolder1;
using DAL;

namespace BL
{
    public class UserLogic
    {
        public static DAL.EzerMitzionEntities db = new DAL.EzerMitzionEntities();
        public static user Login(string password, string username)
        {
            var user = db.users.FirstOrDefault(p => p.Password == password && p.UserFname == username);
            if (user == null)
                return null;
            return DTO.NewFolder1.user.GetUser1(user);

        }

        public static bool AddUser(user user)
        {
            try
            {
                db.users.Add(DTO.NewFolder1.user.GetUser(user));
                db.SaveChanges();
                return true;
            }
            catch (Exception)
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
                db.users.Remove(q1);
                db.SaveChanges();
                return 1;
            }
        }
        public static user User(int id)
        {
            var q1 = db.users.FirstOrDefault(w => w.UserId == id);
            return user.GetUser1(q1);

        }
        public static List<user> Allusers()
        {
            return user.GetListUserDTO(db.users.ToList());

        }
        public static void UpdateUser(user user)
        {
            try
            {
                var userDb = db.users.FirstOrDefault(p => p.UserId == user.UserId);
                userDb.UserFname = user.UserFname;
                userDb.UserLname = user.UserLname;
                userDb.Tel = user.Tel;
                userDb.Email = user.Email;
                userDb.TypeUser = user.TypeUser;
                db.SaveChanges();
               
            }
            catch (Exception)
            {

                
            }

        }

    }
}