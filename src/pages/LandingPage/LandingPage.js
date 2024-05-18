import React from 'react';
import { Link } from 'react-router-dom';
import AuthNavbar from '../../components/AuthNavbar';

const LandingPage = () => {
  return (
    <div>
     <AuthNavbar/>
      <h1>Bem-vindo à Página de Apresentação</h1>
      <p>Explore nosso site utilizando a navegação acima.</p>
    </div>
  );
};

export default LandingPage;
