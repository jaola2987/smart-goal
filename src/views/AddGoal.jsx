import React from "react";
import Header from "../components/Header/Header";
import AddGoalForm from "../components/Forms/AddGoalForm/AddGoalForm";

const BUTTONS = [
  { text: "Save", link: "/" },
  { text: "Back", link: "/" },
];

export default function AddGoal() {
  return (
    <>
      <Header buttons={BUTTONS} />
      <AddGoalForm />
    </>
  );
}
