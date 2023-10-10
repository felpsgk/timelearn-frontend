import axios from "axios";
import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/login', {
              email,
              password,
            });
            if (response.status === 200) {
              // Redirecionar para a página desejada após o login bem-sucedido
              navigate("/dash");
            }
          } catch (error) {
            console.error('Erro durante o login:', error);
            // Lidar com erros de login, se necessário
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
                <button type='submit'
                    className='btn-login'
                    onClick={(e) => handleLogin(e)}>
                        Logar</button>
            </form>
        </div>
    );
}

export default Login;