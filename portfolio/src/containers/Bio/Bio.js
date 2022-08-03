import React from 'react';
import { NavLink } from 'react-router-dom';

import Bottom from "../../assests/bottom.jpg";

import "./Bio.scss";

const Bio = () => {
  return (
    <div className='bio'>
      <div className='b-info'>
        <div className='b-title'>
          <h2>Acerca de</h2>
          <h3>Cinematografo. Cineasta. Narador.</h3>
        </div>

        <div className='b-para'>
          <p>
            Destilando films cristaliza en 2020 como una alternativa fresca e innovadora para la creación de
            contenido cinematográfico, producciones musicales y publicitación de áreas culturales aglutinando
            una gran experiencia contrastada en el esfuerzo de nuestros profesionales y
            la confianza de nuestros clientes.
          </p>

          <p>
            El objetivo no es otro que ofertar una gama de servicios que permita,
            mediante una continua filosofía de innovación elevar la calidad de las
            experiencias que se ofrecen al público.
          </p>
        </div>

        <NavLink to="/contact">Manda me mensaje →</NavLink>
      </div>

      <div className='b-img'>
        <img src={Bottom} alt="Bottom banner" />
      </div>
    </div>
  );
};

export default Bio;