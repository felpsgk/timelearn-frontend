import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

async function handleLogout() {
  try {
    const response = await axios.get('http://localhost:3000/logout');
    if (response.status === 200) {
      //window.location.reload();
    }
  } catch (error) {
    console.error('Erro durante o logout:', error);
    // Lidar com erros de logout, se necessário
  }
}
const Dash = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('tokenLogin'); 
    if (token) {
      axios.get('http://localhost:3000/login', {
        headers: {
          Authorization: token, // mando o token da local pro metodo de verificar
        },
      }).then((response) => {
        setUserData(response.data); //token valido, tiro a tela de loading
        setLoading(false);
      }).catch((error) => {
        console.error('Erro ao verificar token:', error);
        // volta pra login
      navigate("/"); 
      });
    } else {
      // Token não encontrado no armazenamento local, volta pra login
      navigate("/"); 
    }
  }, []);
  if (loading) {
    return <div>Verificando token...</div>;
  }
  if (!userData) {
    return <div>Acesso não autorizado</div>;
  }
  return (
    <div>
      <h1>Bem-vindo, {userData.nome}!</h1>
      {/* Conteúdo da página do painel de controle */}
    </div>
  );
};

export default Dash;