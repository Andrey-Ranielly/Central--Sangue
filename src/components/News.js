import React from 'react';
import imgDoacao from './img/DoacaoS.jpg';
import img04 from './img/img04.png';
import img05 from './img/img05.png';
import img06 from './img/img06.png';

const News = () => {
  return (
    <section className="news" id="news">
      <h2>Últimas Notícias</h2>
      <img className='ImgDS' src={imgDoacao} alt='Imagem Hemope'/>
      <img className = "img04" src={img04} alt="04"/>
      <img className = "img05" src={img05} alt="05"/>
      <img className = "img06" src={img06} alt="06"/>

    </section>
  );
};

export default News;
