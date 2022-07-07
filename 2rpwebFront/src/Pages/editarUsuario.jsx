// import React, { useState } from "react"
// import axios from 'axios';

// //import api from "../services/api"

// import { parseJwt } from "../services/auth.js";
// import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';


// export default function EditarMeuPerfil() {

//     const [nome, setNome] = useState('');
//     const [email, setEmail] = useState('');
//     const [senha, setSenha] = useState('');
//     const [tipoUsua, settipoUsua] = useState(3);
//     const [sttsUsu, setsttsUsu] = useState(3);
//     const [isLoading, setIsLoading] = useState(false);

    

//     function EditarPerfil(evento) {
//         setIsLoading(true);
//         evento.preventDefault()

//         if (nome != "" && email != "" && senha != "") {

//             console.log('chegueii');
//             axios
//                 .patch('http://localhost:5000/api/Usuario/Listarusu/{id}' + localStorage.getItem('token'), {
//                     emailUsu: email,
//                     nomeUsua: nome,
//                     idTipo: tipoUsua,
//                     idStatusUsu : sttsUsu
//                 }, {
//                     headers: {
//                         'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
//                     }
//                 })
//                 .then((resposta) => {
//                     if (resposta.status === 200) {
//                         console.log('Usuario atualizado');
//                         setNome('');
//                         setEmail('');
//                         setSenha('');
//                         settipoUsua('');
//                         setsttsUsu('');
//                         setIsLoading(false);
//                     }

//                 })
//                 .catch((erro) => {console.log(erro); setIsLoading(false)});
//         }
//         else {
//             setIsLoading(false);
//         }
//     }

//     function buscarPerfil(){
//         axios('http://localhost:5000/api/Usuario/Listarusu' + userID  , {
//             headers : {
//                 'Authorization' : 'Bearer ' + localStorage.getItem('token')
//             }
//         })
//         .then(response => {
//             if (response.status === 200) {
//                 setmeuPerfil( response.data );
//                 setUserID (response.data);
//             }
//         })
//         .catch( erro => console.log(erro) );
//     };
    
//     useEffect( buscarMeuPerfil, [] );


//     return(
//         <div>

//             <main>
//                 <section>
//                     <h2 className='tod'>Editar Perfil de outra pessoa</h2>

//                     <div>
//                         <table style={{ borderCollapse : 'separate', borderSpacing : 30 }}>

//                             {/* <thead>
//                                 <tr>
//                                     <th className='tod'>Nome</th>
//                                     <th className='tod'>Email</th>
//                                 </tr>
//                             </thead> */}

//                             <form onSubmit={EditarPerfil} className='areaLogin' >
//                             <div className='emailsenha'>
//                                 <label>Nome:</label>
//                                 <input value={nome} onChange={(campo) => setNome(campo.target.value)} type="text" name="titulo" placeholder="Digite o nome do Usuário" />
//                             </div>
//                             <div className='emailsenha'>
//                                 <label>Email:</label>
//                                 <input className='inputemailsenha' value={senha} onChange={(e) => setEmail(e.target.value)} type="password" name="password" placeholder='Insira sua senha' />
//                             </div>
//                             <button  className='buttonLogin' type='submit'></button>
//                         </form>

//                         </table>
//                     </div>
//                 </section>
//             </main>

//         </div>
//     )
// };