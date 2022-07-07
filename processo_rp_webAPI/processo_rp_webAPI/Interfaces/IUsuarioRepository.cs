using processo_rp_webAPI.Domains;
using System.Collections.Generic;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace processo_rp_webAPI.Interfaces
{
    public interface IUsuarioRepository
    {
        void Cadastrar(Usuario NovoUsuario);
        void AlterarUsuario(Usuario UsuarioAlterado);
        void Deletar(int id);
        List<Usuario> ListarTodos();
        Usuario ListarUsuario(int id);
        void AlterarStatus(int id);
        Usuario Login(string Email, string Senha);
    }
}
