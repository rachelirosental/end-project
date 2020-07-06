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
            return BL.ProfessionLogic.GetProfList();
        }
        [Route("GetProfessionbyId/{id}")]
        public Profession GetProfessionbyId(int id)
        {
            return BL.ProfessionLogic.GetProfessionbyId(id);
        }

        [Route("create")]
       public void CreateProfession([FromBody]Profession profession) {
            BL.ProfessionLogic.CreateProfession(profession);

        }
        [Route("deleate/{id}")]
        public void DeleteProfession(int id)
        {
            BL.ProfessionLogic.DeleateProfession(id);

        }

        [Route("update")]
        public void UpdateProfession(Profession profession)
        {
            BL.ProfessionLogic.UpdateProfession(profession);

        }
        [Route("getTypeProfList")]
        public List<typeProfession> getTypeProfList()
        {
            return BL.ProfessionLogic.GetProfTypeList();
        }


    }
}
