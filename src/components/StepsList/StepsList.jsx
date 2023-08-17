import React from "react";
import style from "./StepsList.module.css";
import StepsCheckbox from "../Forms/StepsCheckbox/StepsCheckbox";

export default function StepsList({
  goalSteps,
  completeStep,
  changeCurrentGoal,
}) {
  return (
    <div>
      <div className={style.head_grid}>
        <div></div>
        <div>Title</div>
        <div>What I should do</div>
        <div>I am here</div>
        <div>It is done</div>
      </div>
      {goalSteps.map((step, index) => {
        return (
          <div key={step.id} className={style.body_grid}>
            <div className={step.finished ? style.disabled_text : ""}>
              {index + 1}
            </div>
            <div className={step.finished ? style.disabled_text : ""}>
              {step.title}
            </div>
            <div className={step.finished ? style.disabled_text : ""}>
              {step.description}
            </div>
            <StepsCheckbox
              step={step}
              completeStep={completeStep}
              changeCurrentGoal={changeCurrentGoal}
            />
          </div>
        );
      })}
    </div>
  );
}
