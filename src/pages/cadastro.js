import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

axios.defaults.withCredentials = true;
function Cadastro() {
    const navigate = useNavigate();
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userTypes, setUserTypes] = useState([]);
    const [tipo_usuario_id, setSelectedUserType] = useState('');
    useEffect(() => {
        // Faça uma solicitação Axios para buscar os tipos de usuário do banco de dados
        axios.get('http://localhost:3000/api/tipo_users')
            .then(response => {
                // A resposta contém os tipos de usuário
                setUserTypes(response.data);
            })
            .catch(error => {
                console.error('Erro ao buscar tipos de usuário:', error);
            });
    }, []);
    const handleCad = async (e) => {
        e.preventDefault();
        if (!nome || !email || !password || !tipo_usuario_id) {
            alert("Por favor, preencha todos os campos");
            return;
        }
        try {
            console.log("Antes do POST");
            const response = await axios.post('http://localhost:3000/cadastrar', {
                nome,
                email,
                password,
                tipo_usuario_id,
            });
            console.log("Após o POST");
            if (response.status === 201) {
                console.log("Sucesso");
                // Redirecionar para a página desejada após o login bem-sucedido
                navigate("/");
            }
        } catch (error) {
            console.error('Erro durante o login:', error);
            // Lidar com erros de login, se necessário
        }
    };
    return (
        <div className='login-form-wrap'>
            <h2>Logar</h2>
            <form className='login-form'
                autoComplete='off' required>
                <input type='nome'
                    name='nome'
                    onChange={(e) => setNome(e.target.value)}
                    placeholder='Seu nome' required />
                <input type='email'
                    name='email'
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Email' required />
                <input type='password'
                    name='password'
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Sua senha' required />
                <input
                    placeholder="Escolha seu perfil"
                    list="opts"
                    required
                    value={tipo_usuario_id}
                    onChange={(e) => setSelectedUserType(e.target.value)}
                />
                <datalist id="opts">
                    {userTypes.map((userType) => (
                        <option key={userType.id} id={userType.id} value={userType.id} >
                            {userType.tipo_usuario}
                        </option>
                    ))}
                </datalist>
                <div className='button-container'>
                    <button type='submit'
                        className='btn-cad'
                        onClick={(e) => handleCad(e)}>
                        Cadastrar</button>
                </div>
            </form>
        </div>
    );
}

export default Cadastro;