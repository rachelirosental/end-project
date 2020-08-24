using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using DTO.NewFolder1;
using BL;

namespace API.Controllers
{
    [RoutePrefix("api/Reference")]
    public class ReferenceController : ApiController
    {
        [Route("getreference")]
        public List<Reference> Get()
        {
            try
            {
                return BL.referenceLogic.Allreference();
            }
            catch
            {
                return null;
            }

       }
        [Route("getTypeRefList")]
        public List<TypeReference> getTypeRefList()
        {
            try
            {
                return BL.referenceLogic.getTypeRefList();

            }
            catch
            {
                return null;
            }

        }
        [Route("getRefByid/{id}")]
        public Reference Get(int id)
        {
            try
            {
                return BL.referenceLogic.GetReference(id);
            }
            catch
            {
                return null;
            }
        }

        [Route("create")]
        [HttpPost]
        public bool PostReference([FromBody]Reference reference)
        {
            try
            {
                return BL.referenceLogic.AddReference(reference);
            }
            catch
            {
                return false;
            }

        }

        [Route("update")]
         public bool UpdateReference(Reference reference)
        {
            try
            {
                BL.referenceLogic.UpdateReference(reference);
                return true;
            }
            catch
            {
                return false;
            }
        }


        [Route("delete/{id}")]
        public int Delete(int id)
        {
            try
            {
                return BL.referenceLogic.DeleteReference(id);
            }
            catch
            {
                return 0;
            }
        }

        [Route("getrefbyprofid/{id}")]
        public List<Reference> getrefbyprofid(int id)
        {
            try
            {
                return BL.referenceLogic.getrefbyprofid(id);
            }
            catch
            {
                return null;
            }

        }
        
        [Route("getrefbyuserid/{id}")]
        public List<Reference> getrefbyuserid(int id)
        {
            try
            {
                return BL.referenceLogic.getrefbyuserfid(id);
            }
            catch
            {
                return null;
            }

        }
    }
}
