import React from 'react';
import AuthNavbar from '../../components/AuthNavbar';
import GitHub from '../../components/img/GitHub.png'

const About = () => {
  return (
    <div>
      <AuthNavbar />
      <p>Sobre Nós</p>
      <a href="https://github.com/RuanAzevedoLira02/ATV02-REACT" target="_blank" rel="noopener noreferrer">
        <img src={GitHub} alt="Github" />
      </a>
    </div>
  );
};

export default About;
