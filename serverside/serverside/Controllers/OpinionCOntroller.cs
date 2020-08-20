using DTO.NewFolder1;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
namespace API.Controllers

{
    [RoutePrefix("api/Opinion")]
    public class OpinionController : ApiController
    {
        [Route("getProfList")]
        public List<Opinion> GetOpinionList()
        {
            try
            {
                return BL.OpinionLogic.GetOpinionList();
            }
            catch
            {
                return null;
            }

        }
        [Route("create")]
        // POST: api/User
        public bool PostUser([FromBody]Opinion opinion)
        {
            try
            {
                return BL.OpinionLogic.AddOpinion(opinion);
            }
            catch
            {
                return false;
            }
        }
        [Route("getopinionbyprofid/{id}")]
        public List<Opinion> getopinionbyprofid(int id)
        {
            try
            {
                return BL.OpinionLogic.getopinionbyprofid(id);
            }
            catch
            {
                return null;
            }

        }
    }
}