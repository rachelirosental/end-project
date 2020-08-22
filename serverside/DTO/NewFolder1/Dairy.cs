using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTO;
using DAL;
namespace DTO.NewFolder1
{
    public  class Dairy
    {
        public int DairyId { get; set; }
        public System.DateTime start { get; set; }
        public System.DateTime end { get; set; }
        public int RoomId { get; set; }
        public string Description { get; set; }
        public int TypeMeeting { get; set; }
        public int UserId { get; set; }
 
      public DairyColor color { get; set; }
        public string title { get; set; }
        public NewFolder1.Room  Rooms { get; set; }
        public NewFolder1.TypeMeeting TypeMeeting1 { get; set; }
        public NewFolder1.user  users { get; set; }

        public static Dairy GetDairy(DAL.Dairy d)
        {
            if (d == null)
                return null;
            Dairy dto = new Dairy()
            {
                DairyId = d.DairyId,
                start = d.start.Value,
               end = d.end.Value,
                RoomId = d.RoomId.Value,
                Description = d.Description,
                TypeMeeting = Convert.ToInt32(d.TypeMeeting),
                UserId = d.UserId,
                title=d.title,
                //color=d.color,
                Rooms=NewFolder1.Room.GetRoom(d.Rooms),
                TypeMeeting1=NewFolder1.TypeMeeting.GetTypeMeeting(d.TypeMeeting1),
                users=NewFolder1.user.GetUser(d.users) 
            };
            return dto;
        }
        public static DAL.Dairy GetDairy(DTO.NewFolder1.Dairy Dairydto)
        {
            if (Dairydto == null)
                return null;
            DAL.Dairy dairy = new DAL.Dairy()
            {
                DairyId = Dairydto.DairyId,
               start = Dairydto.start,
                end = Dairydto.end,
                RoomId = Dairydto.RoomId,
                Description = Dairydto.Description,
                TypeMeeting = Dairydto.TypeMeeting,
                UserId = Dairydto.UserId,
                title=Dairydto.title,
                //color=Dairydto.color,
                Rooms= NewFolder1.Room.GetRoom(Dairydto.Rooms),
                TypeMeeting1 = NewFolder1.TypeMeeting.GetTypeMeeting(Dairydto.TypeMeeting1),
                users = NewFolder1.user.GetUser(Dairydto.users),
            };
            return dairy;
        }
        public static List<Dairy> GetListDairyDTO(List<DAL.Dairy> LDairy)
        {
            if (LDairy == null)
                return null;
            List<Dairy> l = new List<Dairy>();
            LDairy.ForEach(d => l.Add(GetDairy(d)));
            return l;

        }
        public static List<DAL.Dairy> GetListDairyDAL(List<Dairy> LDairy)
        {
            if (LDairy == null)
                return null;
            List<DAL.Dairy> l = new List<DAL.Dairy>();
            LDairy.ForEach(d => l.Add(GetDairy(d)));
            return l;

        }

    }
    
}


