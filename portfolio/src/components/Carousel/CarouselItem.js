import React from 'react';
import ReactPlayer from 'react-player';


import vid1 from "../../assests/alexia_y_josejuan.mp4";
import vid2 from "../../assests/jessenia_y_martin.mp4";
import vid3 from "../../assests/paola_y_daniel.mp4";
import vid4 from "../../assests/socorro_y_eddy.mp4";
import vid5 from "../../assests/proyecto_a.mp4";
import vid6 from "../../assests/circus_party.mp4";
import vid7 from "../../assests/Party_Twins.mp4";
import vid8 from "../../assests/spring_summer_collection.mp4";
import vid9 from "../../assests/temo_volar.mp4";
import vid10 from "../../assests/como_cada_noche.mp4";
import vid11 from "../../assests/halo.mp4";
import vid12 from "../../assests/sabotage.mp4";

const CarouselItem = ({ video, width, activeIndex }) => {

  if (video.url === "vid1") {
    video.url = vid1;
  } else if (video.url === "vid2") {
    video.url = vid2;
  } else if (video.url === "vid3") {
    video.url = vid3;
  } else if (video.url === "vid4") {
    video.url = vid4;
  } else if (video.url === "vid5") {
    video.url = vid5;
  } else if (video.url === "vid6") {
    video.url = vid6;
  } else if (video.url === "vid7") {
    video.url = vid7;
  } else if (video.url === "vid8") {
    video.url = vid8;
  } else if (video.url === "vid9") {
    video.url = vid9;
  } else if (video.url === "vid10") {
    video.url = vid10;
  } else if (video.url === "vid11") {
    video.url = vid11;
  } else if (video.url === "vid12") {
    video.url = vid12;
  }

  let play = null;

  if ((video.id - 1) === activeIndex) {
    play = true;
  } else {
    play = false;
  }


  // create if statement for changing names to files using vid${index} for shorter code

  return (
    <div className='c-item' style={{ width: width }}>
      <h3>{video.title}</h3>

      <ReactPlayer
        className={`react-player`}
        width={"50%"}
        height={"100%"}
        url={video.url}
        controls={true}
        pip={true}
        playing={play}
      />

      <p>{video.text}</p>
    </div>
  );
};

export default CarouselItem;