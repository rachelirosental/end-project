using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
namespace DTO.NewFolder1
{
   public class Room
    {
        public int RoomId { get; set; }
        public string RoomName { get; set; }
        public static Room GetRoom(DAL.Rooms r)
        {
            Room dto = new Room()
            {
                RoomId = r.RoomId,
                RoomName = r.RoomName,

            };
            return dto;
        }
        public static Room GetRoom(DTO.NewFolder1.Room roomdto)
        {
            Room room = new Room()
            {
                RoomId = roomdto.RoomId,
                RoomName = roomdto.RoomName,

            };
            return room;
        }

    }
}
