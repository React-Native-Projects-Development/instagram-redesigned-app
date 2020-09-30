import React from "react";
import { SvgCss } from "react-native-svg";

const SendIcon = ({ width, height }) => {
  const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="21.657" height="21.599" viewBox="0 0 21.657 21.599"><g transform="translate(0 9.802) rotate(-39)"><path d="M14.654,6.121,2.343.163A1.632,1.632,0,0,0,.117,2.238L2.258,7.589.117,12.941a1.632,1.632,0,0,0,2.226,2.076L14.654,9.058a1.632,1.632,0,0,0,0-2.937ZM1.128,1.834a.53.53,0,0,1,.134-.6.527.527,0,0,1,.608-.092l12.2,5.9H3.212Zm.742,12.2a.544.544,0,0,1-.742-.692L3.212,8.133H14.069Z" transform="translate(0 0)" fill="#909090"/></g></svg>`;

  const SendSvg = () => <SvgCss xml={xml} width={width} height={height} />;

  return <SendSvg />;
};

export default SendIcon;