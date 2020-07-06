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
            if (r == null)
                return null;
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
            if (roomdto == null)
                return null;
            DAL.Rooms room = new DAL.Rooms()
            {
                RoomId = roomdto.RoomId,
                RoomName = roomdto.RoomName,
                Dairy = NewFolder1.Dairy.GetListDairyDAL(roomdto.Dairy as List<Dairy>)

            };
            return room;
        }
        public static List<Room> GetListReferenceDTO(List<DAL.Rooms> Lroom)
        {
            if (Lroom == null)
                return null;
            List<Room> l = new List<Room>();

            Lroom.ForEach(r => l.Add(GetRoom(r)));
            return l;

        }
        public static List<DAL.Rooms> GetListReferenceDAL(List<Room> Lroom)
        {
            if (Lroom == null)
                return null;
            List<DAL.Rooms> l = new List<DAL.Rooms>();
            Lroom.ForEach(r => l.Add(GetRoom(r)));
            return l;

        }

    }
}
