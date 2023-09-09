import React from "react";
import "./title.css";
import "@fontsource/readex-pro";

const Title = ({ firstWord, secondWord }) => {
  return (
    <div className="title-heading-box">
      <div className="title-heading">
        {firstWord} <span className="title-heading2">{secondWord}</span>
      </div>
    </div>
  );
};

export default Title;
