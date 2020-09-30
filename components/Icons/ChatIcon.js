import React from "react";
import { SvgCss } from "react-native-svg";

const ChatIcon = ({ width, height, color }) => {
  const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="20.93" height="20.377" viewBox="0 0 20.93 20.377"><g transform="translate(-8.4 -11)"><g transform="translate(8.4 11)"><path d="M18.865,11C13.1,11,8.4,15.4,8.4,20.811s4.7,9.811,10.465,9.811a11,11,0,0,0,4.981-1.182l3.346,1.811a1.128,1.128,0,0,0,.478.126,1.084,1.084,0,0,0,.6-.2,1.024,1.024,0,0,0,.377-1.006l-.906-4.176a9.372,9.372,0,0,0,1.585-5.182C29.33,15.4,24.626,11,18.865,11Zm6.994,14.188a1.019,1.019,0,0,0-.176.805l.528,2.465L24.3,27.427a.978.978,0,0,0-.981.025,8.967,8.967,0,0,1-4.453,1.157c-4.654,0-8.453-3.5-8.453-7.8s3.8-7.8,8.453-7.8,8.453,3.5,8.453,7.8A7.378,7.378,0,0,1,25.859,25.188Z" transform="translate(-8.4 -11)" fill=${color}/></g></g></svg>`;

  const ChatSvg = () => <SvgCss xml={xml} width={width} height={height} />;

  return <ChatSvg />;
};

export default ChatIcon;