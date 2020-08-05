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
        // GET: api/Reference

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




        // GET: api/User/5
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
        // POST: api/User
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
        // PUT: api/User/5
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
        // DELETE: api/User/5
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
    }
}
