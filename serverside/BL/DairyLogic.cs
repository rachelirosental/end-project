using DTO.NewFolder1;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
 public  class DairyLogic
    {
        public static DAL.EzerMitzionEntities db = new DAL.EzerMitzionEntities();
        public static List<Dairy> AllDaries(int id)
        {
            try
            {
                
                //List<DAL.Dairy> l = new List<DAL.Dairy>();
                List<DAL.Dairy> l = db.Dairy.Where(d => d.UserId == id).ToList();
                return Dairy.GetListDairyDTO(l);
            }
            catch
            {
                return null;
            }

        }

        public static bool AddDairy(Dairy dairy)
        {
            try
            {
                var r = DTO.NewFolder1.Dairy.GetDairy(dairy);
            
                r.Rooms = db.Rooms.FirstOrDefault(p => p.RoomId == r.RoomId);
                db.Dairy.Add(r);
                db.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {

                return false;
            }


        }
        public static List<DTO.NewFolder1.TypeMeeting> GetTypeMeeting()
        {
            return DTO.NewFolder1.TypeMeeting.GetListTypeMeetingDTO(db.TypeMeeting.ToList());

        }
        
                public static List<DTO.NewFolder1.Dairy> getdairybyuserid(int id)
        {
            try
            {
                var dairy = db.users.FirstOrDefault(u => u.UserId == id).Dairy;
                if (dairy == null)
                    return null;
                return DTO.NewFolder1.Dairy.GetListDairyDTO(dairy.ToList());
            }
            catch
            {
                return null;
            }

        }
    }
}
