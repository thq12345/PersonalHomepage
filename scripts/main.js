import {
  Runtime,
  Inspector,
} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@4/dist/runtime.js";
import define from "https://api.observablehq.com/@dannyqth/simple-vega-lite-bar-chart-for-cs5610-project-1.js?v=3";

function loadGraph() {
  new Runtime().module(define, (name) => {
    if (name === "graph")
      return new Inspector(document.querySelector("#skill-graph"));
  });
}

loadGraph();

/*Javascript file here is just for loading from online. More javascript Visualization code available at
 * https://observablehq.com/@dannyqth/simple-vega-lite-bar-chart-for-cs5610-project-1
 * */
