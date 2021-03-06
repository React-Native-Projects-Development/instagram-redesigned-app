import React from "react";
import { SvgCss } from "react-native-svg";

const SearchIcon = ({ width, height, color }) => {
  const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="15.64" height="16.566" viewBox="0 0 15.64 16.566"><g transform="translate(0 0)" opacity="0.69"><path d="M70.31,70.389a.794.794,0,0,0-1.171,1.072l2.473,2.7a.794.794,0,0,0,1.171-1.072Z" transform="translate(-57.352 -57.85)" fill=${color}/><path d="M24.151,17a.794.794,0,1,0-1.53-.423,5.306,5.306,0,1,1-.7-4.367.794.794,0,0,0,1.32-.883A6.892,6.892,0,1,0,24.151,17Z" transform="translate(-10.599 -8.263)" fill=${color}/><path d="M72.892,32.72a.794.794,0,1,0-1.546.359,2.066,2.066,0,0,1,.054.33l.012.125a.794.794,0,0,0,.788.709c.028,0,.058,0,.085,0a.794.794,0,0,0,.7-.875l-.012-.113A3.362,3.362,0,0,0,72.892,32.72Z" transform="translate(-59.271 -27.373)" fill=${color}/></g></svg>`;

  const SearchSvg = () => <SvgCss xml={xml} width={width} height={height} />;

  return <SearchSvg />;
};

export default SearchIcon;
