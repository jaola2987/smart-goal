import React from "react";
import user from "../../assets/image/user.png";

export default function UserPhoto({ width, height }) {
  return <img src={user} width={width} height={height} />;
}
