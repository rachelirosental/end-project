﻿//------------------------------------------------------------------------------
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
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class EzerMitzionEntities : DbContext
    {
        public EzerMitzionEntities()
            : base("name=EzerMitzionEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<Dairy> Dairy { get; set; }
        public virtual DbSet<Dictionary> Dictionary { get; set; }
        public virtual DbSet<Kupot1> Kupot1 { get; set; }
        public virtual DbSet<Opinion> Opinion { get; set; }
        public virtual DbSet<Professions> Professions { get; set; }
        public virtual DbSet<Reference> Reference { get; set; }
        public virtual DbSet<Rooms> Rooms { get; set; }
        public virtual DbSet<Subdomain> Subdomain { get; set; }
        public virtual DbSet<TypeMeeting> TypeMeeting { get; set; }
        public virtual DbSet<typeProfessions> typeProfessions { get; set; }
        public virtual DbSet<TypeReference> TypeReference { get; set; }
        public virtual DbSet<TypeUser> TypeUser { get; set; }
        public virtual DbSet<users> users { get; set; }
    }
}