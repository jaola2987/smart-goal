import React from "react";
import style from "./FormField.module.css";
import cn from "classnames";

export default function InputField({
  fieldLable = "",
  inputPlaceholder = "",
  inputValue,
  handleChange,
  required,
  type,
  disabled = false,
  className = "",
}) {
  return (
    <div className={style.wrapper}>
      <label className={style.fieldLable}>
        {fieldLable}
        {required && <sup>*</sup>}
      </label>
      <input
        type={type}
        disabled={disabled}
        className={cn(style.inputField, className)}
        value={inputValue}
        onChange={(e) => {
          handleChange(e.target.value);
        }}
        placeholder={inputPlaceholder}
      />
    </div>
  );
}
