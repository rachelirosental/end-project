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
        public static Kupot GetKupot(DAL.Kupot1 k)
        {
            Kupot dto = new Kupot()
            {
                KupaId = k.KupaId,
                KupaName = k.KupaName,


            };
            return dto;
        }
        public static Kupot1 GetKupot1(DTO.NewFolder1.Kupot Kupotdto)
        {
            Kupot1 kupot = new Kupot1()
            {
                KupaId = Kupotdto.KupaId,
                KupaName = Kupotdto.KupaName,

            };
            return kupot;
        }


    }
}
