import React from 'react';
import ReactPlayer from 'react-player';

const CarouselItem = ({ video, width}) => {
  return (
    <div className='c-item' style={{ width: width}}>
        <h3>{video.title}</h3>

        <ReactPlayer 
            className='react-player'
            url={video.url}
            controls={true}
            pip={true}
        />

        <p>{video.text}</p>
    </div>
  );
};

export default CarouselItem;