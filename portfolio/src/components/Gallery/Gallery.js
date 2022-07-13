import React from 'react';
import ReactPlayer from 'react-player';

import "./Gallery.scss";

const Gallery = (images) => {
    const videoProperties = [
        {
            id: 1,
            title: "Video 1",
            url: "https://www.facebook.com/114394897358061/videos/319468523632082",
            credit: "Destilado Films",
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
            ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur.`
        },
        {
            id: 2,
            title: "Video 2",
            url: "https://www.facebook.com/114394897358061/videos/1048106535814777",
            credit: "Destilado Films",
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
            ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur.`
        },
        {
            id: 3,
            title: "Video 3",
            url: "https://www.facebook.com/114394897358061/videos/1048106535814777",
            credit: "Destilado Films",
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
            ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur.`
        }
    ]

    return (
        <div className='gallery'>
            {videoProperties.map((video) => {
                return (
                    <div className='g_video' key={video.id}>
                        <h3>{video.title}</h3>

                        <ReactPlayer
                            className="react-player"
                            url={video.url}
                            controls={true}
                            pip={true}
                        />

                        <p>{video.text}</p>
                    </div>
                )
            })}
        </div>
    );
};

export default Gallery;