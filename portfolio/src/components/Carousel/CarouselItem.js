import React from 'react';
import ReactPlayer from 'react-player';

const CarouselItem = (props) => {
  return (
    <div className='c-item'>
        <h3>{props.video.title}</h3>
        
        <ReactPlayer 
            className='react-player'
            url={props.vidoe.url}
            controls={true}
            pip={true}
        />

        <p>{props.video.text}</p>
    </div>
  );
};

export default CarouselItem;