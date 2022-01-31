import React from "react";
import { dataSocial } from "../../../data";
import Icon from "./Icon";

const NavMobile = ({ sidebar }) => {
  return (
    <nav className={sidebar ? "" : "show"}>
      <ul className="flex-d social">
        {dataSocial.map((data) => (
          <Icon key={data.id} src={data.image} url={data.url} alt={data.url} />
        ))}
      </ul>
    </nav>
  );
};

export default NavMobile;
