import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

const Pre = ({ code, lenguage }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className="Code">
      <pre>
        <code className={`language-${lenguage}`}>{code}</code>
      </pre>
    </div>
  );
};

export default Pre;
