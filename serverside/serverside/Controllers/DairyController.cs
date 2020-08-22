using BL;
using DTO.NewFolder1;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace serverside.Controllers
{
    [RoutePrefix("api/Dairy")]
    public class DairyController : ApiController
    {
        [Route("getdaries/{id}")]
        public List<Dairy> GetDaries(int id)
        {
            try
            {
                return BL.DairyLogic.AllDaries(id);
            }
            catch
            {
                return null;
            }

        }

        [Route("create")]
        // POST: api/User
        public bool PostUser([FromBody]Dairy dairy)
        {
            try
            {
                return BL.DairyLogic.AddDairy(dairy);
            }
            catch
            {
                return false;
            }
        }
        [Route("getTypeMeetingList")]
        public List<TypeMeeting> getTypeUserList()
        {
            try
            {
                return DairyLogic.GetTypeMeeting();

            }
            catch
            {
                return null;
            }

        }
        
             [Route("getdairybyuserid/{id}")]
        public List<Dairy> getdairybyuserid(int id)
        {
            try
            {
                return BL.DairyLogic.getdairybyuserid(id);
            }
            catch
            {
                return null;
            }

        }
    }
}
