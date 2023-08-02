import React, { useEffect, useState } from "react";
import type { StoryFn, Meta } from "@storybook/react";
import PlotFigure, { Props } from "./PlotFigure";
// @ts-ignore
import * as Plot from "@observablehq/plot";
import * as d3 from "d3";

export default {
  title: "PlotFigure",
  component: PlotFigure,
} as Meta<Props>;

export const Default: StoryFn<Props> = () => {
  const [data, setData] = useState<unknown[]>();
  useEffect(() => {
    d3.csv("data/aapl.csv", d3.autoType).then((data) => {
      setData(data.slice(-120));
    });
  });
  if (!data) {
    return <div>Loading data...</div>;
  }
  return (
    <PlotFigure
      options={{
        inset: 6,
        grid: true,
        y: {
          label: "↑ Apple stock price ($)",
        },
        color: {
          range: ["#e41a1c", "#000000", "#4daf4a"],
        },
        marks: [
          Plot.ruleX(data, {
            x: "Date",
            y1: "Low",
            y2: "High",
          }),
          Plot.ruleX(data, {
            x: "Date",
            y1: "Open",
            y2: "Close",
            stroke: (d: { Close: number; Open: number }) =>
              Math.sign(d.Close - d.Open),
            strokeWidth: 4,
            strokeLinecap: "round",
          }),
        ],
        width: 960,
      }}
    />
  );
};
