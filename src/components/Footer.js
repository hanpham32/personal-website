import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-center items-center h-12">
      <div>
        <a className="text-urlLink flex justify-center" href="mailto:phamhan@uw.edu">
          <p>phamhan@uw.edu</p>
        </a>
        <p className="text-lightGrey text-xs text-center">Han Pham © 2021. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
