using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DTO;
namespace DTO.NewFolder1
{
   public class Kupot
    {
        public int KupaId { get; set; }
        public string KupaName { get; set; }
        public  ICollection<NewFolder1.Profession> Professions { get; set; }
        public static Kupot GetKupot(DAL.Kupot1 k)
        {
            Kupot dto = new Kupot()
            {
                KupaId = k.KupaId,
                KupaName = k.KupaName,
                Professions=NewFolder1.Profession.GetListProfessinDTO(k.Professions as List<DAL.Professions>)

            };
            return dto;
        }
        public static DAL.Kupot1 GetKupot(DTO.NewFolder1.Kupot Kupotdto)
        {
            Kupot1 kupot = new Kupot1()
            {
                KupaId = Kupotdto.KupaId,
                KupaName = Kupotdto.KupaName,
                Professions= NewFolder1.Profession.GetListProfessinDAL(Kupotdto.Professions as List<Profession>)

            };
            return kupot;
        }
        public static ICollection<Kupot> GetListKupaDTO(ICollection<DAL.Kupot1> Lkupot)
        {
            List<Kupot> l = new List<Kupot>();

            (Lkupot as List<DAL.Kupot1>).ForEach(k => l.Add(GetKupot(k)));
            return l;

        }
        public static ICollection<DAL.Kupot1> GetListReferenceDAL(ICollection<Kupot> Lkupot)
        {
            List<DAL.Kupot1> l = new List<DAL.Kupot1>();
            (Lkupot as List<Kupot>).ForEach(k => l.Add(GetKupot(k)));
            return l;

        }



    }
}
