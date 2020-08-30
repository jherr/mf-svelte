import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

window.header.get("./Header").then((module) => {
  const Header = module().default;
  new Header({
    target: document.getElementById("header"),
  });
});

const App = () => (
  <div>
    <div>Hi there, I'm React from Webpack 5.</div>
    <button onClick={() => window.addToCart()}>Add To Cart React!</button>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
