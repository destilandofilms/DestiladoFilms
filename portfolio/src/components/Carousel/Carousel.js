import React, { useState } from 'react';
import CarouselItem from './CarouselItem';

import "./Carousel.scss";

const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = 0;
        } else if (newIndex >= videoProperties[newIndex].id + 1) {
            newIndex = videoProperties[newIndex].id - 2;
        }

        setActiveIndex(newIndex);
    };

    const videoProperties = [
        {
            id: 1,
            title: "Video 1",
            url: "https://www.facebook.com/114394897358061/videos/319468523632082",
            credit: "Destilado Films",
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
        },
        {
            id: 2,
            title: "Video 2",
            url: "https://www.facebook.com/114394897358061/videos/1048106535814777",
            credit: "Destilado Films",
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
        },
        {
            id: 3,
            title: "Video 3",
            url: "https://www.facebook.com/114394897358061/videos/1048106535814777",
            credit: "Destilado Films",
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
        }
    ]

    return (
        <div className='carousel'>
            <div className='c-inner' style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                {videoProperties.map((video) => {
                    return (
                        <CarouselItem video={video} key={video.id} width={"100%"} />

                    )
                })}
            </div>

            <div className='indicators'>
                <button
                    className='left'
                    onClick={() => {
                        updateIndex(activeIndex - 1)
                    }}
                />

                <button
                    className='right'
                    onClick={() => {
                        updateIndex(activeIndex + 1)
                    }}
                />
            </div>
        </div>
    );
};

export default Carousel;