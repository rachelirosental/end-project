using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DTO.NewFolder1;
using BL;
namespace serverside.Controllers
{
    
        [RoutePrefix("api/Room")]
        public class RoomController : ApiController
        {
            // GET: api/Reference

            [Route("getrooms")]
            public List<Room> GetRooms()
            {
                return BL.RoomLogic.AllRooms();

            }



            // GET: api/User/5
            [Route("getRoomByid/{id}")]
            public Room GetRoom(int id)
            {
                return BL.RoomLogic.GetRoom(id);
            }

            [Route("create")]
            // POST: api/User
            public bool CreateRoom([FromBody]Room room)
            {
                return BL.RoomLogic.AddRoom(room);
            }

            [Route("update")]
            // PUT: api/User/5
            public void UpdateRoom(Room room)
            {
                BL.RoomLogic.UpdateRoom(room);
            }


            [Route("delete/{id}")]
            // DELETE: api/User/5
            public static int DeleteRoom(int id)
            {
                return BL.RoomLogic.DeleteRoom(id);
            }
        }
    }

