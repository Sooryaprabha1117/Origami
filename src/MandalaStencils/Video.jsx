import React from 'react';
import "./Video.css";

import butterfly from "../assets/videos/butterfly.jpg"
import frock from "../assets/videos/frock.jpg";
import rose from "../assets/videos/rose.jpg";
import mask from "../assets/videos/mask.jpg";
import star from "../assets/videos/star.jpg";
import heart from "../assets/videos/heart.jpg";

import video1 from "../assets/videos/butterfly.mp4";
import video2 from "../assets/videos/frock.mp4";
import video3 from "../assets/videos/rose.mp4";
import video4 from "../assets/videos/mask.mp4";
import video5 from "../assets/videos/star.mp4";
import video6 from "../assets/videos/heart.mp4";

const Video = () => {
  return (
    <div className="App">
      <h1></h1>
      <div className="video-grid"> 
        <div className="video-container">
          <video controls className="full-width-video">
            <source src={video1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <img
            src={butterfly}
            alt="Video Thumbnail"
            className="corner-image"
          />
        </div>

        <div className="video-container">
          <video controls className="full-width-video">
            <source src={video2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <img
            src={frock}
            alt="Video Thumbnail"
            className="corner-image"
          />
        </div>

        <div className="video-container">
          <video controls className="full-width-video">
            <source src={video3} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <img
            src={rose}
            alt="Video Thumbnail"
            className="corner-image"
          />
        </div>

        <div className="video-container">
          <video controls className="full-width-video">
            <source src={video4} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <img
            src={mask}
            alt="Video Thumbnail"
            className="corner-image"
          />
        </div>

        <div className="video-container">
          <video controls className="full-width-video">
            <source src={video5} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <img
            src={star}
            alt="Video Thumbnail"
            className="corner-image"
          />
        </div>

        <div className="video-container">
          <video controls className="full-width-video">
            <source src={video6} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <img
            src={heart}
            alt="Video Thumbnail"
            className="corner-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Video;
