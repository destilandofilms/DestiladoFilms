import React from 'react';
import Carousel from '../../components/Carousel/Carousel';

import nightclub from '../../assests/nightclub.jpg'
import "./Eventos.scss";

const Eventos = () => {

  return (
    <div className='eventos'>
      <Carousel />

      <div className='e-img'>
        <img src={nightclub} alt='Bottom banner'/>
      </div>
    </div>
  );
};

export default Eventos;