import React, { createContext, useReducer } from "react";

import data from './VideosData.json';


const initialState = {
    videos: data
};

const VideoReducer = (state = initialState, action) => {

};

export const VideoContext = createContext();

export const VideoProvider = (props) => {
    const [state, dispatch] = useReducer(VideoReducer, initialState);

    return (
        <VideoContext.Provider value={{ videos: state.videos, dispatch }}>
            {props.children}
        </VideoContext.Provider>
    )
};