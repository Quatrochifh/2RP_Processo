using System;
using System.Collections.Generic;

#nullable disable

namespace processo_rp_webAPI.Domains
{
    public partial class Usuario
    {
        public int IdUsuario { get; set; }
        public int? IdTipo { get; set; }
        public int? IdStatusUsu { get; set; }
        public string NomeUsua { get; set; }
        public string EmailUsu { get; set; }
        public string SenhaUsu { get; set; }

        public virtual StatusUsu IdStatusUsuNavigation { get; set; }
        public virtual TipoUsu IdTipoNavigation { get; set; }
    }
}
