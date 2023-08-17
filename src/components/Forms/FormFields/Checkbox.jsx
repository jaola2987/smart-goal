import React from "react";
import style from "./FormField.module.css";

export default function Checkbox({
  fieldLable = "",
  checked,
  handleChange,
  required,
  disabled = false,
}) {
  return (
    <div className={style.wrapper}>
      {fieldLable && (
        <label className={style.fieldLable}>
          {fieldLable}
          {required && <sup>*</sup>}
        </label>
      )}
      <input
        type="checkbox"
        className={style.checkboxField}
        checked={checked}
        disabled={disabled}
        onChange={(e) => {
          handleChange(e.target.checked);
        }}
      />
    </div>
  );
}
