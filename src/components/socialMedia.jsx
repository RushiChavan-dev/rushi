import React from "react";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillCodepenCircle,
} from "react-icons/ai";
import "./socialMedia.css";
function SocialMedia() {
  return (
    <div className="app__social">
      <div>
        <a href="https://www.linkedin.com/in/rchavan-dev/">
          <AiFillLinkedin />
        </a>
      </div>
      {/* <div>    
            <a href='https://codepen.io/trending'><AiFillCodepenCircle /></a>
        </div> */}
      <div>
        <a href="https://github.com/RushiChavan-dev">
          <AiFillGithub />
        </a>
      </div>
    </div>
  );
}

export default SocialMedia;
