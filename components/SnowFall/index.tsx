import React, { useCallback, useEffect, useRef, useState } from "react";

import * as IMGUR from "./style";

const SnowFall = (): React.ReactElement => {
  const canvas = useRef<HTMLCanvasElement>(null);
  const ctx = canvas?.current?.getContext("2d");

  const [canvasSize, setCanvasSize] = useState({ height: 0, width: 0 });
  const [flakes, setFlakes] = useState([]);

  const initialSetCanvasSize = () => {
    setCanvasSize({ height: 350, width: window.innerWidth });
  };

  const addFlakes = useCallback(() => {
    const x = Math.ceil(Math.random() * canvasSize.width);
    const speed = Math.ceil(Math.random() * 5);
    const radius = 10 * Math.PI;

    setFlakes((prevState) => [...prevState, { x, y: 0, speed, radius }]);
  }, [canvasSize, setFlakes]);

  const addSnow = useCallback(() => {
    for (let i = 0; i < flakes.length; i++) {
      const oneFlake = flakes[i];
      ctx.beginPath();
      ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
      ctx.arc(
        oneFlake.x,
        (oneFlake.y += oneFlake.speed / 3),
        oneFlake.speed * 0.8,
        0,
        oneFlake.radius
      );
      ctx.fill();
    }
  }, [ctx, flakes]);

  const snowFall = useCallback(() => {
    ctx.fillStyle = "#181643";
    ctx.fillRect(0, 0, canvasSize.width, canvasSize.height);

    addFlakes();
    addSnow();
  }, [addFlakes, addSnow, canvasSize.height, canvasSize.width, ctx]);

  useEffect(() => {
    setCanvasSize({ height: 350, width: window.innerWidth });
  }, []);

  useEffect(() => {
    window.addEventListener("resize", initialSetCanvasSize);
    return () => {
      window.removeEventListener("resize", initialSetCanvasSize);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => snowFall(), 20);
    return () => clearInterval(interval);
  }, [snowFall]);

  return (
    <IMGUR.canvasWrapper>
      <IMGUR.canvas
        ref={canvas}
        width={canvasSize.width}
        height={canvasSize.height}
      />
    </IMGUR.canvasWrapper>
  );
};

export default SnowFall;
