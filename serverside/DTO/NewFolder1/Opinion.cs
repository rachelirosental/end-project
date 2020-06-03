using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DTO;
namespace DTO.NewFolder1
{
   public class Opinion
    {
        public int OpinionId { get; set; }
        public int ProfPersonid { get; set; }
        public string description { get; set; }
        public System.DateTime Date { get; set; }
        public int Mark { get; set; }
        public static Opinion GetOpinion(DAL.Opinion o)
        {
            Opinion dto = new Opinion()
            {
                OpinionId = o.OpinionId,
                ProfPersonid = o.ProfPersonid.Value,
                description = o.description,
                Date = o.Date.Value,
                Mark = Convert.ToInt32(o.Mark),



            };
            return dto;
        }
        public static Opinion GetOpinion(DTO.NewFolder1.Opinion Opiniondto)
        {
            Opinion opinion = new Opinion()
            {
                OpinionId = Opiniondto.OpinionId,
                ProfPersonid = Opiniondto.ProfPersonid,
                description = Opiniondto.description,
                Date = Opiniondto.Date,
                Mark = Opiniondto.Mark,
            };
            return opinion;
        }

    }
}
