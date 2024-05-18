import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthNavbar from '../../components/AuthNavbar';

function Register () {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Verificar se todos os campos foram preenchidos
    if (email && cpf && password && confirmPassword && password === confirmPassword) {
      // Lógica de registro aqui
      
      navigate('/home');
    } else {
      alert('Por favor, preencha todos os campos corretamente.');
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
          <label>CPF:</label>
          <input type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} />
        </div>
        <div>
          <label>Senha:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <label>Confirmar Senha:</label>
          <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </div>
        <button type="submit" disabled={!email || !cpf || !password || !confirmPassword || password !== confirmPassword}>Cadastrar</button>
      </form>
    </div>
  );
};

export default Register;
