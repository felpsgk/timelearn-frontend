import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export function useAuth() {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem('tokenLogin');
        if (token) {
            axios.get('http://localhost:3000/login', {
                headers: { Authorization: token, },
            }).then((response) => { setUserData(response.data);
                setLoading(false);
            }).catch((error) => { console.error('Erro ao verificar token:', error);
                navigate("/");
            });
        } else { navigate("/"); }
    }, [navigate]);
    return { userData, loading };
}
export function AuthCheck({ userData, loading, children }) {
    if (loading) { return <div>Verificando token...</div>; }
    if (!userData) {
        return <div>Acesso não autorizado</div>;
    }
    return children;
}
