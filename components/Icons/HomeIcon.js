import React from "react";
import { SvgCss } from "react-native-svg";

const HomeIcon = ({ width, height }) => {
  const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="16.693" height="19.475" viewBox="0 0 16.693 19.475"><g transform="translate(0 0)"><path d="M44.058,46.621h2.316a.466.466,0,0,0,.465-.46V38.27a2.573,2.573,0,0,0-.658-1.581l-5.5-5.5a.468.468,0,0,0-.662,0l-5.5,5.5a2.577,2.577,0,0,0-.658,1.581l0,8.347C33.85,46.871,43.8,46.621,44.058,46.621ZM33.85,48.476A1.851,1.851,0,0,1,32,46.617V38.438a5.147,5.147,0,0,1,1.313-3.172l5.72-5.72a1.856,1.856,0,0,1,2.627,0l5.72,5.72a5.138,5.138,0,0,1,1.313,3.172v8.179a1.854,1.854,0,0,1-1.85,1.859Z" transform="translate(-32 -29.001)" fill="#d9408a"/></g></svg>`;

  const HomeSvg = () => <SvgCss xml={xml} width={width} height={height} />;

  return <HomeSvg />;
};

export default HomeIcon;
