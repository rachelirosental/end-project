using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTO.NewFolder1;
namespace BL
{
 public  class RoomLogic
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
            var q1 = db.Rooms.FirstOrDefault(r => r.RoomId == id);
            return Room.GetRoom(q1);

        }
        public static List<Room> AllRooms()
        {
            return Room.GetListReferenceDTO(db.Rooms.ToList());

        }
        public static void UpdateRoom(Room room)
        {
            try
            {
                var RoomDb = db.Rooms.FirstOrDefault(r => r.RoomId == room.RoomId);
                RoomDb.RoomName = room.RoomName;
                RoomDb.Dairy = room.Dairy as ICollection<DAL.Dairy>;
                db.SaveChanges();

            }
            catch (Exception)
            {


            }

        }

    }
}
