import React from "react";
import Header from "../components/Header/Header";
import AboutMeEdit from "../components/AboutMe/AboutMeEdit";
import EditProfileForm from "../components/Forms/EditProfileForm/EditProfileForm";
import style from "./Profile.module.css";

const BUTTONS = [
  { text: "Save", link: "/" },
  { text: "Back", link: "/" },
];

export default function Profile() {
  return (
    <>
      <Header buttons={BUTTONS} />
      <div className={style.columnBox}>
        <AboutMeEdit />
        <EditProfileForm />
      </div>
    </>
  );
}
