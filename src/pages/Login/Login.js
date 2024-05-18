import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthNavbar from '../../components/AuthNavbar';

function Login () {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Verificar se email e senha foram preenchidos
    if (email && password) {
      // Lógica de autenticação aqui
      navigate('/home');
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  return (
    <div>
      <AuthNavbar />
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Senha:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" disabled={!email || !password}>Entrar</button>
      </form>
    </div>
  );
};

export default Login;
