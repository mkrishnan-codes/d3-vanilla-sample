import "./styles.css";
import * as d3 from "d3";
document.getElementById("app").innerHTML = `<div>D3</div>`;
// var svg = d3
//   .select("#app")
//   .append("svg")
//   .attr("width", 460)
//   .attr("height", 460)
//   .call(
//     d3.zoom().on("zoom", function (evt) {
//       svg.attr("transform", evt.transform);
//     })
//   )
//   .append("g")
//   .data("data");

// svg
//   .append("circle")
//   .attr("cx", 300)
//   .attr("cy", 300)
//   .attr("r", 40)
//   .style("fill", "#68b2a1");

// svg.append("text").attr("dy", "-.35em").text("hello world");

const svg = d3
  .select("body")
  .append("svg")
  .attr("width", 240)
  .attr("height", 125);
const g = svg.append("g");
const text = g
  .append("text")
  .attr("x", 120)
  .attr("y", 62.5)
  .attr("dy", ".35em")
  .attr("text-anchor", "middle")
  .text(`Hello!`)
  .style("font-size", "1px")
  .each(getSize)
  .style("font-size", function (d) {
    return d.scale + "px";
  });

function getSize(d) {
  var bbox = this.getBBox(),
    cbbox = this.parentNode.getBBox(),
    scale = Math.min(cbbox.width / bbox.width, cbbox.height / bbox.height);
  d.scale = scale;
}

// var bbox = text.node().getBBox();

// var rect = svg
//   .append("rect")
//   .attr("x", bbox.x)
//   .attr("y", bbox.y)
//   .attr("width", bbox.width)
//   .attr("height", bbox.height)
//   .style("fill", "#ccc")
//   .style("fill-opacity", ".3")
//   .style("stroke", "#666")
//   .style("stroke-width", "1.5px");
