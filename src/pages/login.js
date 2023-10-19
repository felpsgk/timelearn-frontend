import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

axios.defaults.withCredentials = true;
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            alert("Por favor, preencha todos os campos");
            return;
        }
        try {
            const response = await axios.post('http://localhost:3000/login', {
                email,
                password,
            });
            if (response.status === 200) {
                localStorage.setItem('tokenLogin', response.data.token);
                // Redirecionar para a página desejada após o login bem-sucedido
                navigate("/dash");
            }
        } catch (error) {
            alert("Erro, "+error.response.data.message);
            return;
        }
    };
    return (
        <div className='login-form-wrap'>
            <h2>Logar</h2>
            <form className='login-form'>
                <input type='email'
                    name='email'
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Email' required />
                <input type='password'
                    name='password'
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Sua senha' required />
                <div className='button-container'>
                    <button type='submit'
                        className='btn-login'
                        onClick={(e) => handleLogin(e)}>
                        Logar</button>
                    <button type='submit'
                        className='btn-cad'
                        onClick={(e) => navigate('/cadastro')}>
                        Cadastrar</button>
                </div>
            </form>
        </div>
    );
}

export default Login;