import React, { useState, useEffect, useRef, cloneElement } from "react";

function LazyImage({ aspectRatio, alt, className, children }) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      setLoaded(true);
    }
  }, []);

  const lqip = cloneElement(children[0], {
    ariaHidden: true,
    alt: alt,
    style: {
      position: "absolute",
      width: "100%",
      height: "100%",
      top: "0",
      bottom: "0",
      left: "0",
      right: "0",
      objectFit: "cover",
      objectPosition: "center",
      opacity: `${loaded ? 0 : 1}`
    }
  });

  const original = cloneElement(children[1], {
    loading: "lazy",
    alt: alt,
    ref: imgRef,
    onLoad: () => setLoaded(true),
    style: {
      position: "absolute",
      width: "100%",
      height: "100%",
      top: "0",
      bottom: "0",
      left: "0",
      right: "0",
      objectPosition: "center",
      transition: "opacity 1s",
      opacity: `${loaded ? 1 : 0}`
    }
  });

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden"
      }}
      class={className}
    >
      <div style={{ paddingBottom: `${100 / aspectRatio}%` }} />
      {lqip}
      {original}
    </div>
  );
}

export default LazyImage;
