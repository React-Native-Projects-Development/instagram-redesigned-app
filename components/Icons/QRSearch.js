import React from "react";
import { SvgCss } from "react-native-svg";

const QRSearchIcon = ({ width, height }) => {
  const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="21.695" height="21.695" viewBox="0 0 21.695 21.695"><g transform="translate(0.25 0.25)"><path d="M-3.038,78.48H-9.87a3.165,3.165,0,0,1-1.221-.242.516.516,0,0,0-.677.28.517.517,0,0,0,.28.676,4.184,4.184,0,0,0,1.618.322h6.832A.518.518,0,0,0-2.52,79,.518.518,0,0,0-3.038,78.48Z" transform="translate(14.087 -58.321)" fill="#fff" stroke="#fff" stroke-width="0.5"/><path d="M11.831,67.69a.518.518,0,0,0-.518.518V72.05a3.185,3.185,0,0,1-3.181,3.181H5.656a.518.518,0,1,0,0,1.036H8.132a4.222,4.222,0,0,0,4.217-4.217V68.208A.517.517,0,0,0,11.831,67.69Z" transform="translate(8.846 -55.072)" fill="#fff" stroke="#fff" stroke-width="0.5"/><path d="M5.377,49.94a.518.518,0,0,0-.518-.518H-3.43a.518.518,0,0,0-.518.518.518.518,0,0,0,.518.518H4.859A.518.518,0,0,0,5.377,49.94Z" transform="translate(11.656 -49.422)" fill="#fff" stroke="#fff" stroke-width="0.5"/><path d="M-10.335,50.458a.518.518,0,0,0,.518-.518.518.518,0,0,0-.518-.518h-.555a4.222,4.222,0,0,0-4.217,4.217v1.92a.518.518,0,0,0,.518.518.518.518,0,0,0,.518-.518v-1.92a3.185,3.185,0,0,1,3.181-3.181Z" transform="translate(15.107 -49.422)" fill="#fff" stroke="#fff" stroke-width="0.5"/><path d="M12.754,51.22a.518.518,0,0,0-.017.733,3.166,3.166,0,0,1,.881,2.2v5.466a.518.518,0,0,0,1.036,0V54.151a4.2,4.2,0,0,0-1.169-2.915A.519.519,0,0,0,12.754,51.22Z" transform="translate(6.54 -49.934)" fill="#fff" stroke="#fff" stroke-width="0.5"/><path d="M-14.071,70.463V63.076a.518.518,0,0,0-.518-.518.518.518,0,0,0-.518.518v7.387a4.238,4.238,0,0,0,.124,1.017.518.518,0,0,0,.5.393.521.521,0,0,0,.125-.015.518.518,0,0,0,.379-.627A3.16,3.16,0,0,1-14.071,70.463Z" transform="translate(15.107 -53.485)" fill="#fff" stroke="#fff" stroke-width="0.5"/><path d="M4.692,61.587a.518.518,0,0,0,.518-.518v-.2A4.222,4.222,0,0,0,.993,56.652H-1.282a.518.518,0,0,0-.518.518.518.518,0,0,0,.518.518H.993a3.184,3.184,0,0,1,3.181,3.181v.2A.518.518,0,0,0,4.692,61.587Z" transform="translate(10.992 -51.658)" fill="#fff" stroke="#fff" stroke-width="0.5"/><path d="M5.121,66.54a.518.518,0,1,0-1.036,0A3.185,3.185,0,0,1,.9,69.721H-1.572a.518.518,0,0,0-.518.518.518.518,0,0,0,.518.518H.9A4.221,4.221,0,0,0,5.121,66.54Z" transform="translate(11.081 -54.556)" fill="#fff" stroke="#fff" stroke-width="0.5"/><path d="M-5.94,59.15a.519.519,0,0,0-.01-.733.519.519,0,0,0-.733.01,4.192,4.192,0,0,0-1.2,2.943v2.774a4.219,4.219,0,0,0,1.042,2.776.518.518,0,0,0,.39.177.517.517,0,0,0,.341-.128.518.518,0,0,0,.049-.731,3.178,3.178,0,0,1-.785-2.093V61.369A3.164,3.164,0,0,1-5.94,59.15Z" transform="translate(12.871 -52.159)" fill="#fff" stroke="#fff" stroke-width="0.5"/></g></svg>`;

  const QRSearchSvg = () => <SvgCss xml={xml} width={width} height={height} />;

  return <QRSearchSvg />;
};

export default QRSearchIcon;
