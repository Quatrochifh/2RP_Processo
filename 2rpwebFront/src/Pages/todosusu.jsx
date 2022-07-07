import { useState, useEffect } from 'react';
import axios from 'axios';
//import api from "../services/api"

import { parseJwt } from "../services/auth.js";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Perfils(){
    const [ perfil, setPerfil ] = useState( [] );

    function TodosPerfil(){
        axios('http://localhost:5000/api/Usuario/ListarTodos'  , {
            headers : {
                'Authorization' : 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then(response => {
            if (response.status === 200) {
                // console.log(response);
                setPerfil( response.data );
            }
        })
        .catch( erro => console.log(erro) );
    };
    
    useEffect( TodosPerfil, [] );

    const deleteUser = (idUser) => {
        if (parseJwt().role == '1' || parseJwt().role == '2') {
            axios.delete('http://localhost:5000/api/Usuario/delete/' + idUser, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            })
                .then(resposta => {
                    if (resposta.status === 204) {
                        alert("Usuário deletado com sucesso")
                        TodosPerfil();
                    }
                })
                .catch((erro) => console.log(erro));
        }
    }

    //let navigate = useNavigate();


    return(
        <div>

            <main>
                <section>
                    <h2 className='tod'>Todos Perfils</h2>

                    <div>
                        <table style={{ borderCollapse : 'separate', borderSpacing : 30 }}>

                            <thead>
                                <tr>
                                    <th className='tod'>Nome</th>
                                    <th className='tod'>Email</th>
                                    <th className='tod'>Senha</th>
                                    <th className='tod'>Tipo De Usuario</th>
                                    <th className='tod'>Status: </th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    perfil.map( (usuarios) => {
                                        return(
                                            <tr key={usuarios.idUsuario}>
                                                <td>{usuarios.nomeUsua}</td>
                                                <td>{usuarios.emailUsu}</td>
                                                <td>{usuarios.senhaUsu}</td>
                                                <td>{usuarios.idTipo}</td>
                                                <td>{(usuarios.idStatusUsu) == 1 ? <span className='Ativo'>Ativo</span> : <span className='inativo'>Inativo</span>}</td>
                                                <button className='deletar' onClick={() => deleteUser(usuarios.idUsuario)}>DELETAR USUARIO</button>
                                                <Link to="/EditarTodosUsuarios" className="Names_b">EDITAR USUARIO</Link>
                                            </tr>
                                        )
                                    } )                                
                                }
                                
                            </tbody>

                        </table>
                    </div>
                </section>
            </main>

        </div>
    )
};