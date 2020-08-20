using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTO.NewFolder1;
namespace BL
{
 public   class RoomLogic
    {
        public static DAL.EzerMitzionEntities db = new DAL.EzerMitzionEntities();

        public static bool AddRoom(Room room)
        {
            try
            {
                db.Rooms.Add(DTO.NewFolder1.Room.GetRoom(room));
                db.SaveChanges();
                return true;
            }
            catch (Exception)
            {

                return false;
            }

        }

        public static int DeleteRoom(int id)
        {
            var q1 = db.Rooms.FirstOrDefault(r => r.RoomId == id);
            if (q1 == null)
                return 0;
            else
            {
                db.Rooms.Remove(q1);
                db.SaveChanges();
                return 1;
            }
        }
        public static Room GetRoom(int id)
        {
            try
            {
                var q1 = db.Rooms.FirstOrDefault(r => r.RoomId == id);
                return Room.GetRoom(q1);
            }
            catch
            {
                return null;
            }

        }
        public static List<Room> AllRooms()
        {
            try
            {
                return Room.GetListRoomDTO(db.Rooms.ToList());
            }
            catch
            {
                return null;
            }

        }
        public static bool UpdateRoom(Room room)
        {

            try
            {
                var RoomDb = db.Rooms.FirstOrDefault(r => r.RoomId == room.RoomId);
                RoomDb.RoomName = room.RoomName;
                RoomDb.Dairy= room.Dairy as ICollection<DAL.Dairy>;
                db.SaveChanges();
                return true;

            }
            catch (Exception)
            {

                return false;
            }

        }
       public static bool isnotoverloap(DAL.Rooms room, DateTime start, DateTime end)
        {
            var list = room.Dairy.FirstOrDefault(e => (e.start < end && start < e.end));
            if (list == null)
                return true;
            return false;

        }

        public static List<Room> GetListRoom(DateTime start,DateTime end)
        {
            
            
            try
            {
                List<DAL.Rooms> r = new List<DAL.Rooms>();
                foreach (var room in db.Rooms)
                {
                    if (isnotoverloap(room, start, end) == true)
                        r.Add(room);

                }
              
                if (r == null)
                    return null;
                return Room.GetListRoomDTO(r);
              
            }
            catch
            {
                return null;
            }

        }



    }
}
