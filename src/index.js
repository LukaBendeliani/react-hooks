import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import useResponsive from "./useResponsive";
import screenSizes from "./screenSizes";

const App = () => {
  const currentSize = useResponsive();

  return (
    <div className="container">
      {currentSize === screenSizes.sm && <div>show on mobile</div>}
      {currentSize === screenSizes.md && <div>show on tablet</div>}
      {currentSize === screenSizes.lg && <div>show on desktop</div>}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
