using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
namespace DTO.NewFolder1
{
   public class TypeMeeting
    {
        public int MeetingId { get; set; }
        public string description { get; set; }
        public static TypeMeeting GetTypeMeeting(DAL.TypeMeeting t)
        {
            TypeMeeting dto = new TypeMeeting()
            {
                MeetingId = t.MeetingId,
                description = t.description,

            };
            return dto;
        }
        public static TypeMeeting GetTypeMeeting(DTO.NewFolder1.TypeMeeting typemeetingdto)
        {
            TypeMeeting type = new TypeMeeting()
            {
                MeetingId = typemeetingdto.MeetingId,
                description = typemeetingdto.description,
            };
            return type;
        }

    }
}
