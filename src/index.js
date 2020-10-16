import React from "react";
import ReactDom from "react-dom";

import "./styles.scss";

const render = () => {
	document.querySelector("#node-1").innerHTML = `
  <div class="box">
    Hello HTML
    <input type="text"/>
    <pre>${new Date().toLocaleTimeString()}</pre>
  </div>
`;

	ReactDom.render(
		React.createElement(
			"div",
			{ className: "box" },
			"Hello REACT",
			React.createElement("input", null),
			React.createElement("pre", null, new Date().toLocaleTimeString())
		),
		document.querySelector("#node-2")
	);
};

setInterval(render, 1000);
