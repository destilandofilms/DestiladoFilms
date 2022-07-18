import React, { useState } from 'react';
import ReactPlayer from 'react-player';

const CarouselItem = ({ video, width}) => {
    const [loading, setLoading] = useState(true);

  return (
    <div className='c-item' style={{ width: width}}>
        <h3>{video.title}</h3>

        {loading ? <div className='loader'><div className="lds-ring"><div></div><div></div><div></div><div></div></div></div> : null}

        <ReactPlayer 
            className={`react-player`}
            url={video.url}
            controls={true}
            pip={true}
            onReady={() => setLoading(false)}
            isLoading={false}
        />

        <p>{video.text}</p>
    </div>
  );
};

export default CarouselItem;