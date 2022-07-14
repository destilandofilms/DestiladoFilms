import React from 'react';
import Carousel from '../../components/Carousel/Carousel';

import wedding from '../../assests/wedding.jpg';
import "./Bodas.scss";

const Bodas = () => {
  return (
    <div className='bodas'>
      <Carousel />

      <div className='b-img'>
        <img src={wedding} alt='Bottom Banner'/>
      </div>
    </div>
  );
};

export default Bodas;