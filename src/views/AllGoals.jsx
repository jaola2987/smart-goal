import React from "react";
import GoalList from "../components/GoalList/GoalList";
import Header from "../components/Header/Header";
import AboutMeText from "../components/AboutMe/AboutMeText";
import { SearchGoalProvider } from "../contex/SearchGoalsContext";

const BUTTONS = [
  { text: "Edit profile", link: "/profile" },
  { text: "Add goal", link: "/addgoal" },
  { text: "Sing in", link: "/goals" },
];

export default function AllGoals() {
  return (
    <>
      <Header buttons={BUTTONS} />
      <AboutMeText />
      <SearchGoalProvider>
        <GoalList />
      </SearchGoalProvider>
    </>
  );
}
