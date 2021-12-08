import React from "react";
import Pre from "../Pre";
import "prismjs/themes/prism-tomorrow.css";

const code = `const App = props => {
  return (
    <div>
      <h1> React App </h1>
      <div>Awesome code</div>
    </div>
  );
};
`;

const CodeTest = () => {
  return (
    <>
      <Pre code={code} lenguage="javascript" />
    </>
  );
};

export default CodeTest;
