import React from "react";
import ReactDOM from "react-dom";

const Application = () => {
  return <h1>Hello world!</h1>;
};

ReactDOM.render(
  <AppContainer>
    <Application />
  </AppContainer>,
  document.getElementById("app")
);
