﻿using System;
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
        public ICollection<NewFolder1.Dairy> Dairy { get; set; }
        public static TypeMeeting GetTypeMeeting(DAL.TypeMeeting t)
        {
            if (t == null)
                return null;
            TypeMeeting dto = new TypeMeeting()
            {
                MeetingId = t.MeetingId,
                description = t.description,
                Dairy = NewFolder1.Dairy.GetListDairyDTO(t.Dairy as List<DAL.Dairy>)

            };
            return dto;
        }
        public static DAL.TypeMeeting GetTypeMeeting(DTO.NewFolder1.TypeMeeting typemeetingdto)
        {
            if (typemeetingdto == null)
                return null;
            DAL.TypeMeeting type = new DAL.TypeMeeting()
            {
                MeetingId = typemeetingdto.MeetingId,
                description = typemeetingdto.description,
                Dairy = NewFolder1.Dairy.GetListDairyDAL(typemeetingdto.Dairy as List<Dairy>)
            };
            return type;
        }
        public static List<TypeMeeting> GetListTypeMeetingDTO(List<DAL.TypeMeeting> LtypeMeeting)
        {
            if (LtypeMeeting == null)
                return null;
            List<TypeMeeting> l = new List<TypeMeeting>();

            LtypeMeeting.ForEach(t => l.Add(GetTypeMeeting(t)));
            return l;

        }

    }
}
