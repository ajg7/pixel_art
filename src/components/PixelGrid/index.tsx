import React, { FC, useEffect, useRef, useState } from "react";
import { PixelGridProps } from "./models";
import { PixelGridCanvas } from "./styles";

const PixelGrid: FC<PixelGridProps> = ({ height, width }): JSX.Element => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
  useEffect(() => {
    if (canvasRef.current) {
      const renderContext = canvasRef.current.getContext("2d");

      if (renderContext) {
        setContext(renderContext);
      }
    }
  }, [context]);

  return (
    <PixelGridCanvas
      id="canvas"
      ref={canvasRef}
      height={height}
      width={width}
    ></PixelGridCanvas>
  );
};

export default PixelGrid;
