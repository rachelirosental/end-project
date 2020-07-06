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
<<<<<<< HEAD
            return BL.ProfessionLogic.GetProfList();
=======
            try
            {
                return BL.ProfessionLogic.GetProfList();
            }
            catch 
            {
                return null;
            }

>>>>>>> 8c8608fb60e16ac9509858ee55f29cb5b45b1143
        }
        [Route("GetProfessionbyId/{id}")]
        public Profession GetProfessionbyId(int id)
        {
<<<<<<< HEAD
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

=======
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
>>>>>>> 8c8608fb60e16ac9509858ee55f29cb5b45b1143
        }
        [Route("getTypeProfList")]
        public List<typeProfession> getTypeProfList()
        {
            return BL.ProfessionLogic.GetProfTypeList();
        }


    }
}
