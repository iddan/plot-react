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
    const element = ref.current;
    if (element) {
      const child = element.children[0];
      if (child) {
        child.remove();
      }
      element.appendChild(plot);
    }
  }, [ref, options]);

  return <div ref={ref} />;
};

export default PlotFigure;
