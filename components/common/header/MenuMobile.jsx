import React from "react";

const MenuMobile = ({ showSideBar, sidebar }) => {
  return (
    <>
      <button
        className={sidebar ? "burguer" : "burguer activetwo"}
        onClick={showSideBar}
      >
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </button>
    </>
  );
};

export default MenuMobile;
