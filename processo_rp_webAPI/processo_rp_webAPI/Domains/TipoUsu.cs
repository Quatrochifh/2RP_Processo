using System;
using System.Collections.Generic;

#nullable disable

namespace processo_rp_webAPI.Domains
{
    public partial class TipoUsu
    {
        public TipoUsu()
        {
            Usuarios = new HashSet<Usuario>();
        }

        public int IdTipo { get; set; }
        public string NomeTipo { get; set; }

        public virtual ICollection<Usuario> Usuarios { get; set; }
    }
}
