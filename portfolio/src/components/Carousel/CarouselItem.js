import React from 'react';
import ReactPlayer from 'react-player';

import vid1 from '../../assests/sampleVid.mp4';

const CarouselItem = ({ video, width}) => {
  video.url = vid1;

  // create if statement for changing names to files using vid${index} for shorter code

  return (
    <div className='c-item' style={{ width: width}}>
        <h3>{video.title}</h3>

        <ReactPlayer 
            className={`react-player`}
            width={"50%"}
            height={"100%"}
            url={video.url}
            controls={true}
            pip={true}
        />

        <p>{video.text}</p>
    </div>
  );
};

export default CarouselItem;