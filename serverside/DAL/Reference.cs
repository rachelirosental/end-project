//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DAL
{
    using System;
    using System.Collections.Generic;
    
    public partial class Reference
    {
        public int RefId { get; set; }
        public Nullable<System.DateTime> Date { get; set; }
        public string Description { get; set; }
        public Nullable<System.DateTime> BornDate { get; set; }
        public Nullable<bool> IsCare { get; set; }
        public Nullable<int> UserName { get; set; }
        public Nullable<int> ProfId { get; set; }
        public Nullable<int> TypeRef { get; set; }
        public string recommendation { get; set; }
    
        public virtual Professions Professions { get; set; }
        public virtual TypeReference TypeReference { get; set; }
        public virtual users users { get; set; }
    }
}
