import React, { useState, useEffect } from 'react';
//import api from "../services/api"
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { parseJwt, usuarioAutenticado} from "../services/auth.js";

import userlog from "../Assets/img/myuserlog.png"
import '../Assets/css/paginas.css'



export default function Cadastro() {
    const [email, setEmail] = useState('');
    const [senha, setsenha] = useState('');
    const [nomeUsua, setnomeUsua] = useState('');
    const [tipoUsua, settipoUsua] = useState(3);

    const cadastrar = (e) => {
        e.preventDefault();
        if (usuarioAutenticado() === true && parseJwt().role === '1' || parseJwt().role === '2') {
            axios.post('http://localhost:5000/api/Usuario', {
                IdTipo: tipoUsua,
                IdStatusUsu: 2,
                nomeUsua: nomeUsua,
                emailUsu: email,
                senhaUsu: senha,
            }, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            })
                .then(resposta => {
                    if (resposta.status === 201) {
                        alert('Seu usuario foi criado!');
                        setEmail('')
                        setsenha('')
                        setnomeUsua('')
                        settipoUsua(3)
                    
                        //EditarTodosUsuarios
                    }
                })
                .catch((erro) => console.log(erro));
        } else {
            alert('Por algum erro não é possivel cadastrar o usuario agora, tente novamente mais tarde')
        }
    }
    return (
        <div className='pagina'>
            <div className='containertudo'>
                <div className='content2'>
                <img className='cadastrar1' src={userlog} alt="myuserlog" />
                    <div className='cadastrar2'>
                        <h3>Cadastrar</h3>
                        <form onSubmit={cadastrar} className='areaLogin' >
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
                                <select value={tipoUsua} onChange={(e) => settipoUsua(e.target.value)} className='inputemailsenha' name="userType" id="">
                                    <option value='1'>Root</option>
                                    <option value='2'>Administrador</option>
                                    <option value='3'>Geral</option>
                                </select>
                            </div>
                            <button  className='buttonLogin' type='submit'>Entrar</button>
                            <Link to="/Perfil" className="Names_b">VIZUALIZAR TODOS PERFILS</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

// onClick={(e) => cadastrar(e)}