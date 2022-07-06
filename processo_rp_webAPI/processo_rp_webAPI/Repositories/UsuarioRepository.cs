using processo_rp_webAPI.Context;
using processo_rp_webAPI.Domains;
using processo_rp_webAPI.Interfaces;
using System.Collections.Generic;
using System.Linq;

namespace processo_rp_webAPI.Repositories
{
    public class UsuarioRepository : IUsuarioRepository
    {
        myuserlogContext ctx = new myuserlogContext();

        public void AlterarStatus(int id)
        {
            Usuario usuarioAtvIna = ListarUsuario(id);
            if (usuarioAtvIna != null)
            {
                if (usuarioAtvIna.IdStatusUsu == 1)
                {
                    usuarioAtvIna.IdStatusUsu = 2;
                }
                else
                {
                    usuarioAtvIna.IdStatusUsu = 1;
                }
            }
            ctx.Usuarios.Update(usuarioAtvIna);
            ctx.SaveChanges();
        }

        public void AlterarUsuario(Usuario UsuarioAlterado)
        {
            Usuario alterarUsu = ListarUsuario(UsuarioAlterado.IdUsuario);
            if (alterarUsu != null)
            {
                alterarUsu.NomeUsua = UsuarioAlterado.NomeUsua;
                alterarUsu.EmailUsu = UsuarioAlterado.EmailUsu;
                alterarUsu.SenhaUsu = UsuarioAlterado.SenhaUsu;
                alterarUsu.IdTipo = UsuarioAlterado.IdTipo;
                alterarUsu.IdStatusUsu = UsuarioAlterado.IdStatusUsu;                
            }
            ctx.Usuarios.Update(alterarUsu);
            ctx.SaveChanges();
        }

        public void Cadastrar(Usuario NovoUsuario)
        {
            ctx.Usuarios.Add(NovoUsuario);
            ctx.SaveChanges();
        }

        public void Deletar(int id)
        {
            ctx.Usuarios.Remove(ListarUsuario(id));
            ctx.SaveChanges();
        }

        public List<Usuario> ListarTodos()
        {
            return ctx.Usuarios.ToList();
        }

        public Usuario ListarUsuario(int id)
        {
            return ctx.Usuarios.FirstOrDefault(u => u.IdUsuario == id);
        }

        public Usuario Login(string Email, string Senha)
        {
            return ctx.Usuarios.FirstOrDefault(u => u.EmailUsu == Email && u.SenhaUsu == Senha);
        }
    }
}
