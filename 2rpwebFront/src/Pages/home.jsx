import React, { useState, useEffect } from 'react';
import api from "../services/api"
import { useNavigate } from 'react-router-dom';
//import Cadastro from './cadastro';

import { parseJwt } from "../services/auth.js";

import userlog from "../Assets/img/myuserlog.png"
import '../Assets/css/paginas.css'

export default function Login() {
    const [email, setEmail] = useState('');
    const [senha, setsenha] = useState('');

    let navigate = useNavigate();

    const fazerLogin = (e) => {
        e.preventDefault();
        api.post('http://localhost:5000/api/Login', {
            email : email,
            senha : senha
        })
            .then(resposta => {
                if (resposta.status === 200) {
                    localStorage.setItem('token', resposta.data.token);
                    //navigate('/Cadastro');
                }
                if (parseJwt().role === 1 || parseJwt().role === 2) {
                    navigate("/Cadastro");
                  } else if (parseJwt().role === 3) {
                    navigate("/Cadastro");
                  }
            })
            
            .catch((error) => console.log(error))
    }

    return (
        <div className='pagina'>
            <div className='containertudo'>
                <div className='content2'>
                <img className='login1' src={userlog} alt="myuserlog" />
                    <div className='login2'>
                        <h3>Login</h3>
                        <form className='areaLogin' >
                            <div className='emailsenha'>
                                <label>Email:</label>
                                <input className='inputemailsenha' value={email} onChange={(e) => setEmail(e.target.value)} type="email" name='email' placeholder='Insira seu Email' />
                            </div>
                            <div className='emailsenha'>
                                <label>Senha:</label>
                                <input className='inputemailsenha' value={senha} onChange={(e) => setsenha(e.target.value)} type="password" name="password" placeholder='Insira sua senha' />
                            </div>
                            <button onClick={(e) => fazerLogin(e)} className='buttonLogin' type='submit'>Entrar</button>
                            {/* <label className='conta'>Não tem uma conta?</label>
                            <label className='cadastre'>Cadastre-se</label> */}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
