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
        public  ICollection<NewFolder1.Dairy> Dairy { get; set; }
    
        public static Room GetRoom(DAL.Rooms r)
        {
            Room dto = new Room()
            {
                RoomId = r.RoomId,
                RoomName = r.RoomName,
                Dairy=NewFolder1.Dairy.GetListDairyDTO(r.Dairy as List<DAL.Dairy>)
            };
            return dto;
        }
        public static DAL.Rooms GetRoom(DTO.NewFolder1.Room roomdto)
        {
            DAL.Rooms room = new DAL.Rooms()
            {
                RoomId = roomdto.RoomId,
                RoomName = roomdto.RoomName,
                Dairy = NewFolder1.Dairy.GetListDairyDAL(roomdto.Dairy as List<Dairy>)

            };
            return room;
        }

    }
}
