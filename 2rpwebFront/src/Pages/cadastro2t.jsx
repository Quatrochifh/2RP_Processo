import { useState, useEffect } from 'react';
import axios from 'axios'
import { parseJwt } from '../services/auth';
import userlog from "../Assets/img/myuserlog.png"
import '../Assets/css/paginas.css'


export default function Cadastrar() {

  //States
    const [email, setEmail] = useState('');
    const [senha, setsenha] = useState('');
    const [nomeUsua, setnomeUsua] = useState('');
    const [IdStatusUsu, setIdStatusUsu] = useState('');
    const [ IdtipoUsua, settipoUsua] = useState(3);
    const [ MensagemErro, setMensagemErro] = useState('');
    const [isLoding, setIsLoding] = useState(false);

  console.log("parseJwt" + parseJwt().role);

  function FazerCadastro(event) {

    setIsLoding(true)

    //tirando função padrão da página
    event.preventDefault();

    //chamando api
    let UserAdm = {
      idTipo: IdtipoUsua,
      idStatusUsu: IdStatusUsu,
      email: email,
      senha: senha,
      nomeUsua: nomeUsua,
    };

    axios.post('http://localhost:5000/api/Usuario', UserAdm, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }

    })

      .then((resposta) => {

        console.log("aqui")
        //adicionando token no local Storage
        if (resposta.status === 201) {
          //adicionando token no localStorage do navegador
          console.log('Usuario Cadastrado')
          setMensagemErro('Usuário Cadastrado com sucesso!')

        }
        else
        setMensagemErro('Oops! algo deu errado :(')

      })

      .catch(erro => console.log(erro))
  }

//   function BuscarTipoUsu() {
//     axios.get('http://3.234.116.203/api/TipoUsuario', {
//       headers: {
//         'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
//       }
//     })
//       .then((resposta) => {
//         if (resposta.status = 200) {
//             settipoUsua(resposta.data)
//         }
//       })
//   }

//   useEffect(() => {
//     BuscarTipoUsu();
//   }, [])

  return (
    <div className='pagina'>
    <div className='containertudo'>
        <div className='content2'>
        <img className='cadastrar1' src={userlog} alt="myuserlog" />
            <div className='cadastrar2'>
                <h3>Cadastrar</h3>
                <form onSubmit={FazerCadastro} action=""  className='areaLogin' >
                    <div className='emailsenha'>
                        <label>Email:</label>
                        <input className='inputemailsenha' value={email} onChange={(e) => setEmail(e.target.value)} type="email" name='email' placeholder='Insira seu Email' />
                    </div>
                    <div className='emailsenha'>
                        <label>Senha:</label>
                        <input className='inputemailsenha' value={senha} onChange={(e) => setsenha(e.target.value)} type="password" name="password" placeholder='Insira sua senha' />
                    </div>
                    <div className='inputArea'>
                        <label>Nome:</label>
                        <input className='inputemailsenha' value={nomeUsua} onChange={(e) => setnomeUsua(e.target.value)} type="text" name="name" placeholder='Digite o nome' />
                    </div>
                    <div className='inputArea'>
                        <label>Tipo de usuário:</label>
                        <select value={IdtipoUsua} onChange={(e) => settipoUsua(e.target.value)} className='inputemailsenha' name="userType" id="">
                            <option value='1'>Root</option>
                            <option value='2'>Administrador</option>
                            <option value='3'>Geral</option>
                        </select>
                    </div>
                    <button onClick={(e) => Cadastrar(e)} className='buttonLogin' type='submit'>Entrar</button>
                </form>
            </div>
        </div>
    </div>
</div>
  );
}