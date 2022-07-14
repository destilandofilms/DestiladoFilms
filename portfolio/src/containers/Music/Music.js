import React from 'react';
import Carousel from '../../components/Carousel/Carousel';

import musicvideo from '../../assests/musicvideo.jpg';
import "./Music.scss";

const Music = () => {
  return (
    <div className='music'>
      <Carousel />

      <div className='m-img'>
        <img src={musicvideo} alt='Bottom Banner' />
      </div>
    </div>
  );
};

export default Music;