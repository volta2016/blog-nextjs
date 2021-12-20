import React from "react";
import { dataSocial } from "../../../data";
import Icon from "./Icon";

const SocialMedia = () => {
  return (
    <div>
      <ul>
        {dataSocial.map((data) => (
          <Icon key={data.id} src={data.image} url={data.url} alt={data.url} />
        ))}
      </ul>
    </div>
  );
};

export default SocialMedia;
