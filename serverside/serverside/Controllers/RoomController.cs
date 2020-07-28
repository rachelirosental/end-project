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
            try
            {
                return BL.RoomLogic.AllRooms();
            }
            catch
            {
                return null;
            }

        }



        // GET: api/User/5
        [Route("getRoomByid/{id}")]
        public Room GetRoom(int id)
        {
            try
            {
                return BL.RoomLogic.GetRoom(id);
            }
            catch
            {
                return null;
            }
        }

        [Route("create")]
        // POST: api/User
        public bool CreateRoom([FromBody]Dairy room)
        {
            try
            {
                return true;
                    //BL.RoomLogic.AddRoom(room);
            }
            catch
            {
                return false;
            }
        }

        [Route("update")]
        // PUT: api/User/5
        public bool UpdateRoom(Room room)
        {
            try
            {
                BL.RoomLogic.UpdateRoom(room);
                return true;
            }
            catch
            {
                return false;
            }
        }


        [Route("delete/{id}")]
        // DELETE: api/User/5
        public static int DeleteRoom(int id)
        {
            try
            {
                return BL.RoomLogic.DeleteRoom(id);
            }
            catch
            {
                return 0;
            }
        }

        [Route("getlistrooms")]
        [HttpPost]
        public  List<Room> GetListRoom([FromBody]Dairy dairy)
        {
           
            try
            {
                return BL.RoomLogic.GetListRoom(dairy.start,dairy.end);
            }
            catch
            {
                return null;
            }
        }
    }
}

