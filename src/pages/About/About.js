import React from 'react';
import AuthNavbar from '../../components/AuthNavbar';
import GitHub from '../../components/img/GitHub.png'

const About = () => {
  return (
    <div>
      <AuthNavbar />
      <p>Sobre Nós</p>
      <a href="https://github.com/RuanAzevedoLira02" target="_blank" rel="noopener noreferrer">
        <img src={GitHub} alt="Github" />
    <a href="https://github.com/Andrey-Ranielly" target="_blank" rel="noopener noreferrer">
        <img src={GitHub} alt="Github" />
    <a href="https://github.com/bi-nho" target="_blank" rel="noopener noreferrer">
        <img src={GitHub} alt="Github" />
    <a href="https://github.com/ximendesadrielle" target="_blank" rel="noopener noreferrer">
        <img src={GitHub} alt="Github" />
    <a href="https://github.com/PedroMiguel-Cavalcanti" target="_blank" rel="noopener noreferrer">
        <img src={GitHub} alt="Github" />
      </a>
    </div>
  );
};

export default About;
