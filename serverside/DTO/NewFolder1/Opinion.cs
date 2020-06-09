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
        public NewFolder1.Profession  Profession { get; set; }
        public static Opinion GetOpinion(DAL.Opinion o)
        {
            if (o == null)
                return null;
            Opinion dto = new Opinion()
            {
                OpinionId = o.OpinionId,
                ProfPersonid = o.ProfPersonid.Value,
                description = o.description,
                Date = o.Date.Value,
                Mark = Convert.ToInt32(o.Mark),
                Profession=NewFolder1.Profession.GetProfession1(o.Profession)



            };
            return dto;
        }
        public static DAL.Opinion GetOpinion(DTO.NewFolder1.Opinion Opiniondto)
        {
            if (Opiniondto == null)
                return null;
            DAL.Opinion opinion = new DAL.Opinion()
            {
                OpinionId = Opiniondto.OpinionId,
                ProfPersonid = Opiniondto.ProfPersonid,
                description = Opiniondto.description,
                Date = Opiniondto.Date,
                Mark = Opiniondto.Mark,
                Profession = NewFolder1.Profession.GetProfession1(Opiniondto.Profession)
            };
            return opinion;
        }
        public static ICollection<Opinion> GetListOpinionDTO(ICollection<DAL.Opinion> Lopinion)
        {
            if (Lopinion == null)
                return null;
            List<Opinion> l = new List<Opinion>();

            (Lopinion as List<DAL.Opinion>).ForEach(o => l.Add(GetOpinion(o)));
            return l;

        }
        public static ICollection<DAL.Opinion> GetListOpinionDAL(ICollection<Opinion> Lopinion)
        {
            if (Lopinion == null)
                return null;
            List<DAL.Opinion> l = new List<DAL.Opinion>();
            (Lopinion as List<Opinion>).ForEach(o => l.Add(GetOpinion(o)));
            return l;

        }


    }
}
