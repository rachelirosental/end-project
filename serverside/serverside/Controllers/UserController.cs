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
        // GET: api/User
        [Route("login/{password}/{username}")]
        public user Get(string password,string username)
        {
            try
            {
                return BL.UserLogic.Login(password, username);
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


        [Route("gettypeuser")]
        public List<TypeUser> gettypeuser()
        {
            try
            {
                return BL.UserLogic.GetTypeUser();
            }
            catch
            {
                return null;
            }
        }



        // GET: api/User/5
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
        // POST: api/User
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
        // PUT: api/User/5
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
        // DELETE: api/User/5
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
    }
}
