using DTO.NewFolder1;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
namespace API.Controllers

{
    [RoutePrefix("api/Profession")]
    public class ProffesionController : ApiController
    {
        [Route("getProfList")]
        public List<Profession> GetProfList()
        {
            try
            {
                return BL.ProfessionLogic.GetProfList();
            }
            catch 
            {
                return null;
            }

        }
        [Route("GetProfessionbyId/{id}")]
        public Profession GetProfessionbyId(int id)
        {
            try
            {
                return BL.ProfessionLogic.GetProfessionbyId(id);
            }
            catch
            {
                return null;
            }
           
        }

        [Route("create")]
       public bool CreateProfession([FromBody]Profession profession) {
            try
            {
                BL.ProfessionLogic.CreateProfession(profession);
                return true;
            }
            catch
            {
                return false;
            }

        }
        [Route("deleate/{id}")]
        public bool DeleteProfession(int id)
        {
            try
            {
                BL.ProfessionLogic.DeleateProfession(id);
                return true;
            }
            catch
            {
                return false;
            }
        }

        [Route("update")]
        public bool UpdateProfession(Profession profession)
        {
            try
            {
                BL.ProfessionLogic.UpdateProfession(profession);
                return true;
            }
            catch
            {
                return false;
            }
        }
        [Route("getTypeProfList")]
        public List<typeProfession> getTypeProfList()
        {
            return BL.ProfessionLogic.GetProfTypeList();
        }


    }
}
