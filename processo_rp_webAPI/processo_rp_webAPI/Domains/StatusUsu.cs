using System;
using System.Collections.Generic;

#nullable disable

namespace processo_rp_webAPI.Domains
{
    public partial class StatusUsu
    {
        public StatusUsu()
        {
            Usuarios = new HashSet<Usuario>();
        }

        public int IdStatusUsu { get; set; }
        public string NomeStatus { get; set; }

        public virtual ICollection<Usuario> Usuarios { get; set; }
    }
}
