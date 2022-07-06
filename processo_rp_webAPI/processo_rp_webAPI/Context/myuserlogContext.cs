using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using processo_rp_webAPI.Domains;

#nullable disable

namespace processo_rp_webAPI.Context
{
    public partial class myuserlogContext : DbContext
    {
        public myuserlogContext()
        {
        }

        public myuserlogContext(DbContextOptions<myuserlogContext> options)
            : base(options)
        {
        }

        public virtual DbSet<StatusUsu> StatusUsus { get; set; }
        public virtual DbSet<TipoUsu> TipoUsus { get; set; }
        public virtual DbSet<Usuario> Usuarios { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Data Source=LAPTOP-FQK68BMR\\SQLEXPRESS; Initial Catalog=MyUserLog; user id=sa; pwd=senai@132;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "Latin1_General_CI_AS");

            modelBuilder.Entity<StatusUsu>(entity =>
            {
                entity.HasKey(e => e.IdStatusUsu)
                    .HasName("PK__StatusUs__1E966F0184CC1BD1");

                entity.ToTable("StatusUsu");

                entity.HasIndex(e => e.NomeStatus, "UQ__StatusUs__127B2F2F52CF4894")
                    .IsUnique();

                entity.Property(e => e.IdStatusUsu).HasColumnName("idStatusUsu");

                entity.Property(e => e.NomeStatus)
                    .IsRequired()
                    .HasMaxLength(200)
                    .HasColumnName("nomeStatus");
            });

            modelBuilder.Entity<TipoUsu>(entity =>
            {
                entity.HasKey(e => e.IdTipo)
                    .HasName("PK__TipoUsu__BDD0DFE1E37D4E96");

                entity.ToTable("TipoUsu");

                entity.HasIndex(e => e.NomeTipo, "UQ__TipoUsu__46BB82609EDF1C8B")
                    .IsUnique();

                entity.Property(e => e.IdTipo).HasColumnName("idTipo");

                entity.Property(e => e.NomeTipo)
                    .IsRequired()
                    .HasMaxLength(200)
                    .HasColumnName("nomeTipo");
            });

            modelBuilder.Entity<Usuario>(entity =>
            {
                entity.HasKey(e => e.IdUsuario)
                    .HasName("PK__Usuario__645723A6097C1598");

                entity.ToTable("Usuario");

                entity.HasIndex(e => e.EmailUsu, "UQ__Usuario__3344D777B9610581")
                    .IsUnique();

                entity.Property(e => e.IdUsuario).HasColumnName("idUsuario");

                entity.Property(e => e.EmailUsu)
                    .IsRequired()
                    .HasMaxLength(256)
                    .HasColumnName("emailUsu");

                entity.Property(e => e.IdStatusUsu).HasColumnName("idStatusUsu");

                entity.Property(e => e.IdTipo).HasColumnName("idTipo");

                entity.Property(e => e.NomeUsua)
                    .IsRequired()
                    .HasMaxLength(200)
                    .HasColumnName("nomeUsua");

                entity.Property(e => e.SenhaUsu)
                    .IsRequired()
                    .HasMaxLength(200)
                    .HasColumnName("senhaUsu");

                entity.HasOne(d => d.IdStatusUsuNavigation)
                    .WithMany(p => p.Usuarios)
                    .HasForeignKey(d => d.IdStatusUsu)
                    .HasConstraintName("FK__Usuario__idStatu__3E52440B");

                entity.HasOne(d => d.IdTipoNavigation)
                    .WithMany(p => p.Usuarios)
                    .HasForeignKey(d => d.IdTipo)
                    .HasConstraintName("FK__Usuario__idTipo__3D5E1FD2");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
