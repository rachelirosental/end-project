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
        [Route("getdaries /{id}")]
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


    }
}
