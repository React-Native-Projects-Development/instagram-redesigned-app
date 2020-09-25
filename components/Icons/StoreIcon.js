import React from "react";
import { SvgCss } from "react-native-svg";

const StoreIcon = ({ width, height }) => {
  const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="31.196" height="30.602" viewBox="0 0 31.196 30.602"><g transform="translate(0 0)"><g transform="translate(0 0)"><path d="M30.995,14.428a.693.693,0,0,0-.577-.192H22.142V10.579a6.544,6.544,0,1,0-13.087,0v3.657H.778c-.231,0-.462,0-.577.192a.655.655,0,0,0-.192.577L2.9,30.787a4.7,4.7,0,0,0,4.542,3.849H23.758A4.735,4.735,0,0,0,28.3,30.749l2.887-15.744A.654.654,0,0,0,30.995,14.428Zm-20.4-3.849a5,5,0,1,1,10.008,0v3.657H10.594ZM26.761,30.556a3.08,3.08,0,0,1-3,2.541H7.437a3.079,3.079,0,0,1-3-2.541L1.7,15.775H29.494Z" transform="translate(0 -4.035)" fill="#fff"/><path d="M280.4,216.863a.77.77,0,0,0,.77-.77v-2.31a.77.77,0,1,0-1.54,0v2.31A.77.77,0,0,0,280.4,216.863Z" transform="translate(-259.025 -197.617)" fill="#fff"/><path d="M123.662,216.863a.77.77,0,0,0,.77-.77v-2.31a.77.77,0,0,0-1.54,0v2.31A.77.77,0,0,0,123.662,216.863Z" transform="translate(-113.838 -197.617)" fill="#fff"/></g></g></svg>`;

  const StoreSvg = () => <SvgCss xml={xml} width={width} height={height} />;

  return <StoreSvg />;
};

export default StoreIcon;
