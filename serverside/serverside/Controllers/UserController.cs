using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DTO.NewFolder1;
using BL;

namespace API.Controllers
{
    [RoutePrefix("api/User")]
    public class UserController : ApiController
    {
        [Route("login/{password}/{email}")]
        public user Get(string password,string email)
        {
            try
            {
                return BL.UserLogic.Login(password, email);
            }
            catch
            {
                return null;
            }
      
        }
        [Route("getusers")]
        public List<user> Get()
        {
            try
            {
                return BL.UserLogic.Allusers();
            }
            catch
            {
                return null; 
            }

        }

        [Route("getuserByid/{id}")]
        public user Get(int id)
        {
            try
            {
                return BL.UserLogic.User(id);
            }
            catch
            {
                return null;
            }
        }

        [Route("create")]
        public bool PostUser([FromBody]user user)
        {
            try
            {
                return BL.UserLogic.AddUser(user);
            }
            catch
            {
                return false;
            }
        }

        [Route("update")]
        public bool UpdateUser(user user)
        {
            try
            {
                BL.UserLogic.UpdateUser(user);
                return true;
            }
            catch
            {
                return false;
            }
        }
        

        [Route("delete/{id}")]
        public  int Delete(int id)
        {
            try
            {
                return BL.UserLogic.DeleteUser(id);
            }
            catch
            {
                return 0;
            }
        }
        [Route("getTypeUserList")]
        public List<TypeUser> getTypeUserList()
        {
            try
            {
                return UserLogic.GetTypeUser();

            }
            catch
            {
                return null;
            }

        }

        [Route("sendMail")]
        public int SendMail([FromBody]ChartData chart)
        {
            try
            {
                return UserLogic.SendMail(chart);

            }
            catch
            {
                return 0;
            }

        }

    }
}
