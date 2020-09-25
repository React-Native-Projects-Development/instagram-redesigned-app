import React from "react";
import { SvgCss } from "react-native-svg";

const LikeIcon = ({ width, height }) => {
  const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="22.053" height="19.475" viewBox="0 0 22.053 19.475"><path d="M25.8,15.352a6.015,6.015,0,0,0-4.772,2.386,6.015,6.015,0,0,0-4.772-2.386C13.146,15.352,10,17.875,10,22.7c0,5.015,5.39,8.8,10.442,11.961a1.1,1.1,0,0,0,1.169,0C26.663,31.5,32.053,27.713,32.053,22.7,32.053,17.875,28.906,15.352,25.8,15.352ZM21.026,32.423C17.65,30.3,12.205,26.672,12.205,22.7c0-3.532,2.1-5.14,4.049-5.14A4.063,4.063,0,0,1,20,20.351a1.1,1.1,0,0,0,2.048,0A4.063,4.063,0,0,1,25.8,17.557c1.95,0,4.049,1.609,4.049,5.141C29.847,26.672,24.4,30.3,21.026,32.423Z" transform="translate(-10 -15.352)" fill="#fff"/></svg>`;

  const LikeSvg = () => <SvgCss xml={xml} width={width} height={height} />;

  return <LikeSvg />;
};

export default LikeIcon;
