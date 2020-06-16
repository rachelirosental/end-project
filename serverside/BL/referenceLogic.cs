using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTO;
using DTO.NewFolder1;

namespace BL
{
   public class referenceLogic
    {
        public static DAL.EzerMitzionEntities db = new DAL.EzerMitzionEntities();
       
        public static bool AddReference(Reference reference)
        {
            try
            {
                db.Reference.Add(DTO.NewFolder1.Reference.GetReference(reference));
                db.SaveChanges();
                return true;
            }
            catch (Exception)
            {

                return false;
            }

        }

        public static int DeleteReference(int id)
        {
            var q1 = db.Reference.FirstOrDefault(w => w.RefId == id);
            if (q1 == null)
                return 0;
            else
            {
                db.Reference.Remove(q1);
                db.SaveChanges();
                return 1;
            }
        }
        public static Reference GetReference(int id)
        {
            var q1 = db.Reference.FirstOrDefault(w => w.RefId == id);
            return Reference.GetReference(q1);

        }
        public static List<Reference> Allreference()
        {
            return Reference.GetListReferenceDTO(db.Reference.ToList());

        }
        public static void UpdateReference(Reference reference)
        {
            try
            {
                var ReferenceDb = db.Reference.FirstOrDefault(p => p.RefId == reference.RefId);
                ReferenceDb.Date = reference.Date;
                ReferenceDb.Description = reference.Description;
                ReferenceDb.BornDate = reference.BornDate;
                ReferenceDb.IsCare = reference.IsCare;
                ReferenceDb.UserName = reference.UserName;
                ReferenceDb.AttendantId = reference.AttendantId;
                ReferenceDb.ProfId = reference.ProfId;
                ReferenceDb.TypeRef = reference.TypeRef;
                ReferenceDb.recommendation = reference.recommendation;
                db.SaveChanges();

            }
            catch (Exception)
            {


            }

        }

    }
}
