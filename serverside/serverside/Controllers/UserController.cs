using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DTO.NewFolder1;

namespace API.Controllers
{
    [RoutePrefix("api/User")]
    public class UserController : ApiController
    {
        // GET: api/User
        [Route("login/{password}/{username}")]
        public user Get(string password,string username)
        {
            return BL.UserLogic.Login(password, username);
        }
        [Route("getusers")]
        public List<user> Get()
        {
            return BL.UserLogic.Allusers();

        }


        [Route("gettypeuser")]
        public List<TypeUser> gettypeuser()
        {
            return BL.UserLogic.GetTypeUser();

        }



        // GET: api/User/5
        [Route("getuserByid/{id}")]
        public user Get(int id)
        {
            return BL.UserLogic.User(id);
        }

        [Route("create")]
        // POST: api/User
        public bool PostUser([FromBody]user user)
        {
          return BL.UserLogic.AddUser(user);
        }

        [Route("update")]
        // PUT: api/User/5
        public void UpdateUser(user user)
        {
            BL.UserLogic.UpdateUser(user);
        }
        

        [Route("delete/{id}")]
        // DELETE: api/User/5
        public static int Delete(int id)
        {
           return BL.UserLogic.DeleteUser(id);
        }
    }
}
