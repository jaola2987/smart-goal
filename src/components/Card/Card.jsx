import React from "react";
import dateFormat from "dateformat";
import style from "./Card.module.css";
import globalStyle from "../../assets/style/globalStyle.module.css";
import cn from "classnames";
import LinkButton from "../LinkButton/LinkButton";

export default function Card({ item }) {
  // const completedOn = Math.floor(
  //   (item.steps.filter((step) => step.finished).length / item.steps.length) *
  //     100
  // );
  return (
    <div className={cn(style.spaces, style.card, style.cardBox)}>
      <div className={style.cardBox}>
        <img src={item.image} />
        <p className={style.title}>{item.title}</p>
        <p className={style.description}>{item.description}</p>
        <div>{dateFormat(new Date(+item.creationTime), "mediumDate")}</div>
        <div className={style.progressWrapper}>
          <div className={style.fullWidth}>
            <span
              className={style.progress}
              style={{ width: item.completedOn + "%" }}
            ></span>
          </div>
          <span>{item.completedOn}%</span>
        </div>
      </div>
      <LinkButton link={`/goals/${item.id}`} className={globalStyle.darkButton}>
        see more
      </LinkButton>
    </div>
  );
}
