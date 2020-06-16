using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using DTO.NewFolder1;
using BL;

namespace API.Controllers
{
    [RoutePrefix("api/User")]
    public class ReferenceController:ApiController
    {
        // GET: api/User
        
        [Route("getreference")]
        public List<Reference> Get()
        {
            return BL.referenceLogic.Allreference();

        }



        // GET: api/User/5
        [Route("getRefByid/{id}")]
        public Reference Get(int id)
        {
            return BL.referenceLogic.GetReference(id);
        }

        [Route("create")]
        // POST: api/User
        public bool PostReference([FromBody]Reference reference)
        {
            return BL.referenceLogic.AddReference(reference);
        }

        [Route("update")]
        // PUT: api/User/5
        public void UpdateReference(Reference reference)
        {
            BL.referenceLogic.UpdateReference(reference);
        }


        [Route("delete/{id}")]
        // DELETE: api/User/5
        public static int Delete(int id)
        {
            return BL.referenceLogic.DeleteReference(id);
        }
    }
}
