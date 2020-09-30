import React from "react";
import { SvgCss } from "react-native-svg";

const FitnessIcon = ({ width, height }) => {
  const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="27.45" height="27.449" viewBox="0 0 27.45 27.449"><path d="M352.532,7.79a3.684,3.684,0,1,0-3.684-3.684A3.684,3.684,0,0,0,352.532,7.79Zm0-6.447a2.763,2.763,0,1,1-2.763,2.763A2.763,2.763,0,0,1,352.532,1.343Zm0,0" transform="translate(-328.766 -0.422)" fill="#fff"/><path d="M106.423,31.465a2.026,2.026,0,0,0,1.437-.594l4.155-4.156,2.774,2.774a2.031,2.031,0,0,0,2.873,0l0,0a2.034,2.034,0,0,0,0-2.872l-4.021-4.02a2.3,2.3,0,0,0-3.256,0l-5.4,5.4a2.033,2.033,0,0,0,1.439,3.469Zm-.787-2.816,5.4-5.4a1.382,1.382,0,0,1,1.954,0l4.021,4.023a1.112,1.112,0,0,1,0,1.569l0,0a1.112,1.112,0,0,1-1.57,0l-3.1-3.1a.46.46,0,0,0-.651,0l-4.481,4.479a1.135,1.135,0,0,1-1.573,0,1.112,1.112,0,0,1,0-1.568Zm0,0" transform="translate(-98.381 -20.682)" fill="#fff"/><path d="M309.137,163.189h-4.605v-2.3a.461.461,0,0,0-.786-.326l-2.763,2.763a.461.461,0,0,0-.135.326v1.842a1.381,1.381,0,0,0,1.382,1.382h6.908a1.842,1.842,0,1,0,0-3.684Zm0,2.763H302.23a.461.461,0,0,1-.461-.461V163.84L303.611,162v1.651a.461.461,0,0,0,.461.461h5.066a.921.921,0,1,1,0,1.842Zm0,0" transform="translate(-283.53 -151.215)" fill="#fff"/><path d="M11.667,274.7l-2.223-2.223a.474.474,0,0,0-.651,0l-8.2,8.2a2.031,2.031,0,0,0,0,2.872v0a2.033,2.033,0,0,0,2.872,0l8.2-8.2a.461.461,0,0,0,0-.651Zm-8.85,8.2a1.111,1.111,0,0,1-1.569,0h0a1.109,1.109,0,0,1,0-1.57l7.871-7.875,1.572,1.573Zm0,0" transform="translate(-0.001 -256.694)" fill="#fff"/><path d="M167.968,219.826a2.034,2.034,0,1,0-2.876,2.876l3.6,3.6-4.363,2.325a2.026,2.026,0,0,0-.757,2.761l.065.121a2.043,2.043,0,0,0,1.769,1.02,1.991,1.991,0,0,0,.994-.264l5.68-3.055.737-.423a2.3,2.3,0,0,0,.483-3.626Zm5.073,7.144a1.371,1.371,0,0,1-.682,1.013l-6.407,3.473a1.113,1.113,0,0,1-1.512-.4l-.066-.121a1.108,1.108,0,0,1,.4-1.505l4.9-2.611a.46.46,0,0,0,.109-.732l-4.037-4.037a1.113,1.113,0,1,1,1.574-1.574l5.334,5.332A1.37,1.37,0,0,1,173.041,226.97Zm0,0" transform="translate(-153.905 -206.615)" fill="#fff"/></svg>`;

  const FitnessSvg = () => <SvgCss xml={xml} width={width} height={height} />;

  return <FitnessSvg />;
};

export default FitnessIcon;