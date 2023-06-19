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
        onLoadedData={() => {
          props.setLoading(false);
        }}
      >
        <source src={props.video} type="video/mp4" />
      </video>
    </>
  );
}
