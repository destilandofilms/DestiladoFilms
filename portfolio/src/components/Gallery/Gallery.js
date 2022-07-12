import React from 'react';
import ReactPlayer from 'react-player';

import "./Gallery.scss";

const Gallery = (images) => {
    

    return (
        <div className='gallery'>
            <div className='left'>
                <div className='left_1'>
                    {
                        images.images.map((image, i) => (
                            <div className='img_wrap' key={i}>
                                <ReactPlayer
                                    className='video'
                                    url={image}
                                />
                            </div>
                        ))
                    }
                </div>

                <div className='left_2'>
                    <ReactPlayer
                        className='video'
                        url={images[0]}
                    />
                </div>
            </div>

            <div className='right'></div>
        </div>
    );
};

export default Gallery;