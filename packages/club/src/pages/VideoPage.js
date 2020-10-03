import React from 'react';
import {NavLink} from "react-router-dom";
import {compose} from "redux";

const VideoPage = ({location}) => {

  const youtubeUrl = location && location.pathname && location.pathname.substring(7);

  return (
      <section className="video">
        {
          youtubeUrl && youtubeUrl.startsWith("http") &&
          <iframe width="240" height="200"
                  src={`${youtubeUrl.replace("watch?v=", "embed/").replace("youtu.be", "youtube.com/embed")}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen/>
        }
        <NavLink to={"/"} className="video__button">Back to main</NavLink>
      </section>
  );
};

export default compose()(VideoPage);