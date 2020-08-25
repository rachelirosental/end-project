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
        [Route("update")]
        public bool UpdateUser(Dairy dairy)
        {
            try
            {
                BL.DairyLogic.UpdateDairy(dairy);
                return true;
            }
            catch
            {
                return false;
<<<<<<< HEAD
=======
                
>>>>>>> 644ea8a1cd5358919806d330acdfc98b3ff83e10
            }
        }
        [Route("delete/{id}")]
        public int Delete(int id)
        {
            try
            {
                return BL.DairyLogic.DeleteDairy(id);
            }
            catch
            {
                return 0;
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
        [Route("getdairybyroomid/{id}")]
        public List<Dairy> getdairybyuserid(int id)
        {
            try
            {
                return BL.DairyLogic.getdairybyroomid(id);
            }
            catch
            {
                return null;
            }

        }
    }
}
