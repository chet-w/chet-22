import React, { ReactElement } from "react";
import "../styles/global.css";

function App({ Component, props }: any): ReactElement {
  return <Component {...props} />;
}

export default App;
