import React from "react";
import style from "../../assets/style/globalStyle.module.css";
import cn from "classnames";

export default function Button({
  children,
  className = "",
  type = "button",
  ...rest
}) {
  return (
    <button className={cn(style.button, className)} type={type} {...rest}>
      {children}
    </button>
  );
}
