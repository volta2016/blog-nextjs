import React from "react";
import Pre from "../Pre";

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
      <Pre code={code} lenguage="javascri" />
    </>
  );
};

export default CodeTest;
