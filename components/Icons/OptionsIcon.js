import React from "react";
import { SvgCss } from "react-native-svg";

const OptionsIcon = ({ width, height }) => {
  const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="14.463" height="14.18" viewBox="0 0 14.463 14.18"><path d="M27.336,25a2.836,2.836,0,1,0,2.836,2.836A2.836,2.836,0,0,0,27.336,25Zm0,4.538a1.7,1.7,0,1,1,1.7-1.7A1.7,1.7,0,0,1,27.336,29.538Zm0,3.97a2.836,2.836,0,1,0,2.836,2.836A2.836,2.836,0,0,0,27.336,33.508Zm0,4.538a1.7,1.7,0,1,1,1.7-1.7A1.7,1.7,0,0,1,27.336,38.045Zm8.792-7.374a2.836,2.836,0,1,0-2.836-2.836A2.836,2.836,0,0,0,36.127,30.672Zm0-4.538a1.7,1.7,0,1,1-1.7,1.7A1.7,1.7,0,0,1,36.127,26.134Zm0,7.374a2.836,2.836,0,1,0,2.836,2.836A2.836,2.836,0,0,0,36.127,33.508Zm0,4.538a1.7,1.7,0,1,1,1.7-1.7A1.7,1.7,0,0,1,36.127,38.045Z" transform="translate(-24.5 -25)" fill="#909090"/></svg>`;

  const OptionsSvg = () => <SvgCss xml={xml} width={width} height={height} />;

  return <OptionsSvg />;
};

export default OptionsIcon;
