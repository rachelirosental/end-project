using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using BL;
using DTO.NewFolder1;

namespace serverside.Controllers
{
    [RoutePrefix("api/Chart")]
    public class ChartController : ApiController
    {
       
         [Route("getCountTypeRef")]
        public List<ChartData> GetCountTypeRef()
        {
            try
            {
                return BL.ChartLogic.CounttypeRef();
            }
            catch 
            {
                return null;
            }

        } 
    }
}
