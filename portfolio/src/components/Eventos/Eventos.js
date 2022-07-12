import React from 'react';
import ReactPlayer from "react-player"

import "./Eventos.scss";

const Eventos = () => {
  return (
    <div className='eventos'>
      <ReactPlayer
        url="https://www.facebook.com/114394897358061/videos/1048106535814777"
      />
    </div>
  );
};

export default Eventos;