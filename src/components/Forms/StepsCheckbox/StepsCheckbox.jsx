import React from "react";
import style from "./StepsCheckbox.module.css";
import Checkbox from "../FormFields/Checkbox";

export default function StepsCheckbox({
  step,
  completeStep,
  changeCurrentGoal,
}) {
  return (
    <form className={style.wrapper}>
      <Checkbox
        checked={step.yourStep}
        handleChange={(value) => {
          changeCurrentGoal(step.id, value);
        }}
        required
        disabled={step.finished}
      />
      <Checkbox
        checked={step.finished}
        handleChange={(value) => {
          completeStep(step.id, value);
        }}
        required
      />
    </form>
  );
}
