using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using processo_rp_webAPI.Domains;
using processo_rp_webAPI.Interfaces;
using processo_rp_webAPI.Repositories;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace processo_rp_webAPI.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        private IUsuarioRepository UsuarioRepository { get; set; }

        public UsuarioController()
        {
            UsuarioRepository = new UsuarioRepository();
        }

        //Cadastrar usuario
        //[Authorize(Roles = "1,2")]
        [HttpPost]
        public IActionResult CadastrarUsu(Usuario NovoUsuario)
        {
            try
            {
                if (NovoUsuario == null)
                {
                    return BadRequest();
                }
                UsuarioRepository.Cadastrar(NovoUsuario);
                return StatusCode(201);
            }
            catch (Exception erro)
            {
                return BadRequest(erro);
            }
        }

        //Excluir Usuário
       // [Authorize(Roles = "1")]
        [HttpDelete ("delete/{id}")]
        public IActionResult DeleteUser(int id)
        {
            UsuarioRepository.Deletar(id);
            return StatusCode(204);
        }

        //Listar todos usuarios
        //[Authorize(Roles = "1,2")]
        [HttpGet("ListarTodos")]
        public IActionResult ListarTodos()
        {
            return Ok(UsuarioRepository.ListarTodos());
        }

        //Listar Usuario - Proprio
        [HttpGet("Listarusu/{id}")]
        public IActionResult ListarUsuario(int id)
        {
            return Ok(UsuarioRepository.ListarUsuario(id));
        }

        //Alterar Dados do usuário
        [HttpPut]
        public IActionResult AlterarUsuario(Usuario UsuarioAlterado)
        {
            try
            {
                UsuarioRepository.AlterarUsuario(UsuarioAlterado);
                return StatusCode(204);
            }
            catch (Exception erro)
            {
                return BadRequest(erro);
            }
        }


        //Alterar Status
       // [Authorize(Roles = "1,2")]
        [HttpPatch("AlterarStatus/{id}")]
        public IActionResult AlterarStatus(int id)
        {
            if (id <= 0)
            {
                return BadRequest(new
                {
                    Message = "Id inválido ou inexistente"
                });
            }
            UsuarioRepository.AlterarStatus(id);
            return StatusCode(204);
        }

  
    }
}

