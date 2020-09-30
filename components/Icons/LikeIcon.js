import React from "react";
import { SvgCss } from "react-native-svg";

const LikeIcon = ({ width, height }) => {
  const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="11.731" height="10.36" viewBox="0 0 11.731 10.36"><path d="M5.555,10.271C2.867,8.59,0,6.575,0,3.908,0,1.342,1.674,0,3.327,0A3.2,3.2,0,0,1,5.865,1.269,3.2,3.2,0,0,1,8.4,0c1.653,0,3.326,1.342,3.326,3.908,0,2.668-2.866,4.683-5.554,6.363a.587.587,0,0,1-.622,0Z" fill="#fff"/></svg>`;

  const LikeSvg = () => <SvgCss xml={xml} width={width} height={height} />;

  return <LikeSvg />;
};

export default LikeIcon;
