import React from 'react';
import { Link } from 'react-router-dom';
import { useDarkMode } from '../DarkModeContext';
import Exit from '../img/Exit.png';
import Schedule from '../img/IconA.png';
import Profile from '../img/IconP.png';
import LogoTN from '../img/LogoTN.png';
import './Navbar.css'; // Supondo que você tenha um arquivo de estilo CSS separado

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const imgStyle = {  
    margin: '10px',
    height: '40px',
  };
  const navButton = {
    margin: '10px',
    height: '40px',
    backgroundColor: darkMode ? '#555555' : '#ffffff', // Cor de fundo com base no modo escuro
    border: '0',
    color: darkMode ? '#ffffff' : '#333333', // Cor do texto com base no modo escuro
  };
  const imgClass = "navbar-img"; // Classe para as imagens

  return (
    <nav style={{
      backgroundColor: darkMode ? '#212121' : '#dc143c', // Cor de fundo da navbar com base no modo escuro
      color: darkMode ? '#ffffff' : '#ffffff', // Cor do texto com base no modo escuro
    }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
      <Link to="/home">
        <img src={LogoTN} alt="Home" style={{ ...imgStyle }} className={imgClass} />
      </Link>
        <Link to="/profile">
          <img src={Profile} alt="Perfil" style={{ ...imgStyle }} className={imgClass} />
        </Link>
        <Link to="/schedule">
          <img src={Schedule} alt="Agendamento" style={{ ...imgStyle }} className={imgClass} />
        </Link>
        <button className='ModoE' style={navButton} onClick={toggleDarkMode}>
          {darkMode ? 'Modo Claro' : 'Modo Escuro'}
        </button>
        <Link to="/">
          <img src={Exit} alt="Sair" style={{ ...imgStyle }} className={imgClass} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;