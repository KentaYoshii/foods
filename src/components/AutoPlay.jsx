import React, { useRef, useEffect } from "react";

export default function AutoPlaySilentVideo(props) {
  const videoRef = useRef(undefined);
  useEffect(() => {
    videoRef.current.defaultMuted = true;
  });

  return (
    <>
      <video
        ref={videoRef}
        loop
        autoPlay
        muted
        playsInline
        preload="auto"
      >
        <source src={props.video} type="video/mp4" />
      </video>
    </>
  );
}
