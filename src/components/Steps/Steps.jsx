import React, { useState } from "react";
import style from "./Steps.module.css";
import cn from "classnames";

export default function Steps({ goalSteps }) {
  // const [steps, setSteps] = useState(goalSteps.steps);
  const stepHeight = 400 / goalSteps.length;
  const stepWidth = (100 / goalSteps.length) * 100 + `%`;

  // const add = (el, previousEl) => {
  //   const updated = steps.toSpliced(previousEl, 0, el);
  //   setSteps(updated);
  // };

  return (
    <div className={style.parent}>
      {goalSteps.map((step, index) => {
        return (
          <div
            key={index}
            className={cn(
              step.finished ? style.finishedStep : "",
              step.yourStep ? style.your_element : "",
              style.element
            )}
            style={{
              minHeight: (index + 1) * stepHeight,
              width: stepWidth,
              zIndex: goalSteps.length - index,
            }}
          >
            <p>{index + 1}</p>
            <p>{step.title}</p>
          </div>
        );
      })}
    </div>
  );
}
