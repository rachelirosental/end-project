using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DTO.NewFolder1;
using BL;

namespace serverside.Controllers
{
    [RoutePrefix("api/Room")]
    public class DairyController : ApiController
    {

        [Route("getdaries")]
        public List<Dairy> GetDaries()
        {
            return BL.DairyLogic.AllDaries();

        }

    }
}
