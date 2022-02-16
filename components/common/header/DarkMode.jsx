import React, { useState } from "react";

const DarkMode = () => {
  const [isDark, setIsDark] = useState(false);

  const switchDark = () => {
    setIsDark(!isDark);
    //console.log(isDark, "ok");
    document.body.classList.toggle("dark");
  };

  return (
    <div className="darkmode">
      <input
        id="checkbox"
        type="checkbox"
        className="checkbox"
        onChange={switchDark}
        value={isDark}
      />
      <span className="moon"></span>
      <span className="sun"></span>
      <label className="switch" htmlFor="checkbox"></label>
    </div>
  );
};

export default DarkMode;
