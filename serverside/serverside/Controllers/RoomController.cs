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
        public bool CreateRoom([FromBody]Room room)
        {
            try
            {
                
                    return BL.RoomLogic.AddRoom(room);
            }
            catch
            {
                return false;
            }
        }

        [Route("update")]
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
         public  int DeleteRoom(int id)
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
        public  List<Room> GetListRoom([FromBody]MyDate dairy)
        {
           
            try
            {
                return BL.RoomLogic.GetListRoom(dairy.Start,dairy.End);
            }
            catch
            {
                return new List<Room>();
            }
        }
    }
}

