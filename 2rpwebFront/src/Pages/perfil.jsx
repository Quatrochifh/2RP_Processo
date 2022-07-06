import { useState, useEffect } from 'react';
//import axios from 'axios';
import api from "../services/api"

export default function MeuPerfil(){
    const [ meuPerfil, setmeuPerfil ] = useState( [] );
    const [ userID, setUserID] = useState(0);

    function buscarMeuPerfil(){
        api('http://localhost:5000/api/Usuario/Listarusu' + userID  , {
            headers : {
                'Authorization' : 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then(response => {
            if (response.status === 200) {
                // console.log(response);
                setmeuPerfil( response.data );
                setUserID (response.data);
            }
        })
        .catch( erro => console.log(erro) );
    };
    
    useEffect( buscarMeuPerfil, [] );

    return(
        <div>

            <main>
                <section>
                    <h2>Meu Perfil</h2>

                    <div>
                        <table style={{ borderCollapse : 'separate', borderSpacing : 30 }}>

                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>Email</th>
                                    <th>Senha</th>
                                    <th>Tipo De Usuario</th>
                                    {/* <th>Situação</th> */}
                                </tr>
                            </thead>

                            <tbody>

                                {
                                    meuPerfil.map( (meuUsuario) => {
                                        return(
                                            <tr key={meuUsuario.idUsuario}>
                                                <td>{meuUsuario.nomeUsua}</td>
                                                <td>{meuUsuario.emailUsu}</td>
                                                <td>{meuUsuario.senhaUsu}</td>
                                                <td>{meuUsuario.idTipo}</td>
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