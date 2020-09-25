import React from "react";
import { SvgCss } from "react-native-svg";

const AddStoryIcon = ({ width, height, color }) => {
  const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="21.354" height="21.354" viewBox="0 0 21.354 21.354"><g transform="translate(-2 -2)"><g transform="translate(2 2)"><path d="M10,14a1,1,0,0,0,1-1V11h2a1,1,0,0,0,0-2H11V7A1,1,0,0,0,9,7V9H7a1,1,0,0,0,0,2H9v2A1,1,0,0,0,10,14Z" transform="translate(0.677 0.677)" fill=${color}/><path d="M12.677,2a10.677,10.677,0,1,0,5.489,19.825,1.335,1.335,0,0,0-1.376-2.288,8.035,8.035,0,1,1,2.745-2.745,1.335,1.335,0,0,0,2.289,1.375A10.664,10.664,0,0,0,12.677,2Z" transform="translate(-2 -2)" fill=${color}/></g></g></svg>`;

  const AddStorySvg = () => <SvgCss xml={xml} width={width} height={height} />;

  return <AddStorySvg />;
};

export default AddStoryIcon;
