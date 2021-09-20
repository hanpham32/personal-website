import React from "react";
import "./SocialCubes.css";

const SocialCubes = () => {
  return (
    <div>
      <a
        href="https://github.com/hanpham32"
        class="social-container github"
        target="_blank"
      >
        <div className="social-cube">
          <div className="front">Github</div>
          <div className="bottom">hanpham32</div>
        </div>
      </a>
      <a
        href="https://www.linkedin.com/in/hansopham/"
        class="social-container linkedin"
        target="_blank"
      >
        <div className="social-cube">
          <div className="front">LinkedIn</div>
          <div className="bottom">Han Pham</div>
        </div>
      </a>
    </div>
  );
};

export default SocialCubes;
