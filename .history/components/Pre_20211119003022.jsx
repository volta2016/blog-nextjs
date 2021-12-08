import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

const Pre = ({ code, lengauje }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, [input]);

  return <div className="Code"></div>;
};

export default Pre;
