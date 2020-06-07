using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;

namespace DTO.NewFolder1
{
  public  class subDomain
    {
        public int Subdomainid { get; set; }
        public string SubdomainName { get; set; }
        public  ICollection<NewFolder1.Profession> Professions { get; set; }
        public static subDomain GetSubDomain(DAL.Subdomain s)
        {
            subDomain dto = new subDomain()
            {
                Subdomainid = s.Subdomainid,
                SubdomainName = s.SubdomainName,
                Professions = NewFolder1.Profession.GetListProfessinDTO(s.Professions as List<DAL.Professions>)

            };
            return dto;
        }
        public static DAL.Subdomain GetSubDomain(DTO.NewFolder1.subDomain subDomaindto)
        {
            DAL.Subdomain sub =new DAL.Subdomain()
            {
                Subdomainid = subDomaindto.Subdomainid,
                SubdomainName = subDomaindto.SubdomainName,
                Professions = NewFolder1.Profession.GetListProfessinDAL(subDomaindto.Professions as List<Profession>)
            };
            return sub;
        }
    }
}

