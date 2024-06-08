import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthNavbar from '../../components/AuthNavbar/AuthNavbar';
import './Register.css';

function Register() {
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
      <AuthNavbar /> {/* Movendo o AuthNavbar para o topo */}
      <div className="login-container"> {/* Adicionando a classe do arquivo CSS */}
        <form onSubmit={handleSubmit} className="login-form"> {/* Adicionando a classe do arquivo CSS */}
          <div>
            <label className='register-label'>Cadastro</label><br></br> <br></br>
            <label className="email-label">Email:</label> {/* Adicionando a classe do arquivo CSS */}
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="email-input" /> {/* Adicionando a classe do arquivo CSS */}
          </div>
          <div>
            <label className="cpf-label">CPF:</label> {/* Adicionando uma nova classe do arquivo CSS */}
            <input type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} className="cpf-input" /> {/* Adicionando uma nova classe do arquivo CSS */}
          </div>
          <div>
            <label className="password-label">Senha:</label> {/* Adicionando a classe do arquivo CSS */}
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="password-input" /> {/* Adicionando a classe do arquivo CSS */}
          </div>
          <div>
            <label className="confirm-password-label">Confirmar Senha:</label> {/* Adicionando uma nova classe do arquivo CSS */}
            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="confirm-password-input" /> {/* Adicionando uma nova classe do arquivo CSS */}
          </div>
          <button type="submit" disabled={!email || !cpf || !password || !confirmPassword || password !== confirmPassword} className="submit-button">Cadastrar</button> {/* Adicionando a classe do arquivo CSS */}
        </form>
      </div>
    </div>
  );
};

export default Register;
