# Plot React

React wrapper for [@observablehq/plot](https://github.com/observablehq/plot)

### Installing

```
yarn add plot-react
```

or

```
npm i plot-react
```

### `<PlotFigure />`

Renders a new plot given the specified [Plot.plot() options](https://github.com/observablehq/plot#plotplotoptions) as SVG or HTML figure element.

```jsx
<PlotFigure
  options={
    {
      // ... Plot.plot() options
    }
  }
/>
```
