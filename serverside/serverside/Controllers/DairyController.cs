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
        [Route("getdaries")]
        public List<Dairy> GetRooms()
        {
            try
            {
                return BL.DairyLogic.AllDaries();
            }
            catch
            {
                return null;
            }

        }


    }
}
