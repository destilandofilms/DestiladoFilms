import React, { useState, useContext } from 'react';
import CarouselItem from './CarouselItem';

import "./Carousel.scss";
import { VideoContext } from '../../context/VideoContext';

const Carousel = (props) => {
    const { videos } = useContext(VideoContext);
    const [activeIndex, setActiveIndex] = useState(0);

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = 0;
        } else if (newIndex >= videos[props.name][newIndex].id + 1) {
            newIndex = videos[props.name][newIndex].id - 2;
        }

        console.log(videos[props.name][newIndex].id);
        setActiveIndex(newIndex);
    };

    return (
        <div className='carousel'>
            <div className='c-inner' style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                {videos[props.name].map((video) => {
                    return (
                        <CarouselItem video={video} key={video.id} width={"100%"} />

                    )
                })}
            </div>

            <div className='indicators'>
                <button
                    onClick={() => {
                        updateIndex(activeIndex - 1)
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                    >
                        <path
                            d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z"
                        />
                        <path
                            d="M13.293 7.293 8.586 12l4.707 4.707 1.414-1.414L11.414 12l3.293-3.293-1.414-1.414z"
                        />
                    </svg>
                </button>

                {videos[props.name].map((video) => {
                    return (
                        <button
                            key={video.id}
                            className={`middle ${video.id === (activeIndex + 1) ? 'active' : ''}`}
                            onClick={() => {
                                updateIndex(video.id - 1);
                            }}
                        />
                    )
                })}

                <button
                    onClick={() => {
                        updateIndex(activeIndex + 1)
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                    >
                        <path
                            d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z"
                        />
                        <path
                            d="M9.293 8.707 12.586 12l-3.293 3.293 1.414 1.414L15.414 12l-4.707-4.707-1.414 1.414z"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Carousel;