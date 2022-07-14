import React from 'react';
import Carousel from '../../components/Carousel/Carousel';
// import Gallery from '../../components/Gallery/Gallery';

import "./Eventos.scss";


// const images = [
//   'https://www.facebook.com/114394897358061/videos/1048106535814777',
//   'https://www.facebook.com/114394897358061/videos/689680548678795',
//   'https://www.facebook.com/114394897358061/videos/954431315131648',
//   'https://www.facebook.com/114394897358061/videos/397709095522032',
//   'https://www.facebook.com/114394897358061/videos/300897048791208',
// ];


const Eventos = () => {

  return (
    <div className='eventos'>
      {/* <Gallery /> */}

      <Carousel />
    </div>
  );
};

export default Eventos;