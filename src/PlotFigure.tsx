import React, { FC, useEffect, useRef } from "react";
// @ts-ignore
import * as Plot from "@observablehq/plot";

export type Props = {
  options: any;
};

const PlotFigure: FC<Props> = ({ options }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const plot = Plot.plot(options);
    if (ref.current) {
      if (ref.current.children[0]) {
        ref.current.children[0].remove();
      }
      ref.current.appendChild(plot);
    }
  }, [ref, options]);

  return <div ref={ref} />;
};

export default PlotFigure;
