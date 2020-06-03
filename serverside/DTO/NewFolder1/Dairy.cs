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
        public System.DateTime DateTime { get; set; }
        public System.TimeSpan DuringTime { get; set; }
        public int RoomId { get; set; }
        public string Description { get; set; }
        public int TypeMeeting { get; set; }
        public int UserId { get; set; }

        public static Dairy GetDairy(DAL.Dairy d)
        {
            Dairy dto = new Dairy()
            {
                DairyId = d.DairyId,
                DateTime = d.DateTime.Value,
                DuringTime = d.DuringTime.Value,
                RoomId = d.RoomId.Value,
                Description = d.Description,
                TypeMeeting = Convert.ToInt32(d.TypeMeeting),
                UserId = d.UserId,
            };
            return dto;
        }
        public static Dairy GetDairy(DTO.NewFolder1.Dairy Dairydto)
        {
            Dairy dairy = new Dairy()
            {
                DairyId = Dairydto.DairyId,
                DateTime = Dairydto.DateTime,
                DuringTime = Dairydto.DuringTime,
                RoomId = Dairydto.RoomId,
                Description = Dairydto.Description,
                TypeMeeting = Dairydto.TypeMeeting,
                UserId = Dairydto.UserId,
            };
            return dairy;
        }
            
    }
    
}


