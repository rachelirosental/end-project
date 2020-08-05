using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTO;
using DTO.NewFolder1;
using DAL;

namespace BL
{
   public class referenceLogic
    {
        public static DAL.EzerMitzionEntities db = new DAL.EzerMitzionEntities();
       
        public static bool AddReference(DTO.NewFolder1.Reference reference)
        {
            try
            {
                var r=DTO.NewFolder1.Reference.GetReference(reference);
                r.users = db.users.FirstOrDefault(x => x.UserId == r.UserName);
                r.Professions = db.Professions.FirstOrDefault(y=>y.ProfId==r.ProfId);
                r.TypeReference = db.TypeReference.FirstOrDefault(z => z.RefId == r.TypeRef);
                db.Reference.Add(r);
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
        public static DTO.NewFolder1.Reference GetReference(int id)
        {
            try
            {
                var q1 = db.Reference.FirstOrDefault(w => w.RefId == id);
                return DTO.NewFolder1.Reference.GetReference(q1);
            }
            catch
            {
                return null;
            }

        }
        public static List<DTO.NewFolder1.Reference> Allreference()
        {
            try
            {
                return DTO.NewFolder1.Reference.GetListReferenceDTO(db.Reference.ToList());
            }
            catch
            {
                return null;
            }

        }
        public static bool UpdateReference(DTO.NewFolder1.Reference reference)
        {
            try
            {
                var ReferenceDb = db.Reference.FirstOrDefault(p => p.RefId == reference.RefId);

                if (ReferenceDb != null)
                {
                    ReferenceDb.Date = reference.Date;
                    ReferenceDb.Description = reference.Description;
                    ReferenceDb.BornDate = reference.BornDate;
                    ReferenceDb.IsCare = reference.IsCare;
                    ReferenceDb.UserName = reference.UserName;
                    ReferenceDb.ProfId = reference.ProfId;
                    ReferenceDb.TypeRef = reference.TypeRef;
                    ReferenceDb.recommendation = reference.recommendation;
                    db.SaveChanges();
                }
                return true;

            }
            catch 
            {
                return false;

            }

        }
        public static List<DTO.NewFolder1.TypeReference> getTypeRefList()
        {
            try
            {
                return DTO.NewFolder1.TypeReference.GetListTypeRefDTO(db.TypeReference.ToList());
            }
            catch
            {
                return null;
            }
        }

        public static List<DTO.NewFolder1.Reference> getrefbyprofid(int id)
        {
            try
            {
               var references = db.Professions.FirstOrDefault(p => p.ProfId == id).Reference ;
                if (references == null)
                    return null;
                return DTO.NewFolder1.Reference.GetListReferenceDTO(references);
            }
            catch
            {
                return null;
            }

        }
    }
}
