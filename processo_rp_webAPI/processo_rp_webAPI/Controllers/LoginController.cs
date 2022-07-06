using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using processo_rp_webAPI.Domains;
using processo_rp_webAPI.Interfaces;
using processo_rp_webAPI.ViewModel;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;

namespace processo_rp_webAPI.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private IUsuarioRepository _usuarioRepository { get; set; }

        public LoginController(IUsuarioRepository repo)
        {
            _usuarioRepository = repo;
        }

        [HttpPost]
        public IActionResult Login(LoginViewModel login)
        {
            try
            {
                Usuario usuarioBuscado = _usuarioRepository.Login(login.Email, login.Senha);

                if (usuarioBuscado == null)
                {
                    return Unauthorized(new
                    {
                        mensagem = "Email ou Senha inválidos"
                    });
                }

                var minhasClaims = new[]
                {
                new Claim(JwtRegisteredClaimNames.Jti, usuarioBuscado.IdUsuario.ToString()),
                new Claim(JwtRegisteredClaimNames.Email, usuarioBuscado.EmailUsu),
                new Claim(ClaimTypes.Role, usuarioBuscado.IdTipo.ToString()),
                new Claim("role", usuarioBuscado.IdTipo.ToString()),
                new Claim("stt", usuarioBuscado.IdStatusUsu.ToString())
            };

                var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes("rp_Processo"));

                var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

                var meuToken = new JwtSecurityToken(
                            issuer: "processo_rp_webAPI",
                            audience: "processo_rp_webAPI",
                            claims: minhasClaims,
                            expires: DateTime.Now.AddMinutes(360),
                            signingCredentials: creds
                        );

                return Ok(new
                {
                    token = new JwtSecurityTokenHandler().WriteToken(meuToken)
                });
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }
    }
}
