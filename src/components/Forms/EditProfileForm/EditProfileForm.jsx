import React, { useState } from "react";
import InputField from "../FormFields/InputField";
import style from "./EditProfileForm.module.css";
import globalStyle from "../../../assets/style/globalStyle.module.css";
import TextareaField from "../FormFields/TextareaField";
import Button from "../../Button/Button";
import { useTheme } from "../../../contex/ThemeContext";

export default function EditProfileForm() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [birthday, setBirthday] = useState("");
  const [aboutme, setAboutme] = useState("");
  const { lightTheme } = useTheme();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className={style.second__fird} onSubmit={handleSubmit}>
      <fieldset className={style.wrapper}>
        <div className={style.fieldset}>
          <InputField
            fieldLable={"Name"}
            inputPlaceholder={"Enter your name"}
            inputValue={name}
            handleChange={(e) => setName(e)}
            required
            type="text"
          />
          <InputField
            fieldLable={"Family name"}
            inputPlaceholder={"Enter your family name"}
            inputValue={surname}
            handleChange={(e) => setSurname(e)}
            type="text"
          />
          <InputField
            fieldLable={"Вate of birth"}
            inputValue={birthday}
            handleChange={(e) => setBirthday(e)}
            type="date"
          />
        </div>
        <div>
          <TextareaField
            fieldLable={"About me"}
            textareaPlaceholder={"Tell me about yourself"}
            textareaValue={aboutme}
            handleChange={(e) => setAboutme(e)}
          />
        </div>
        <div>
          <Button
            className={
              lightTheme ? globalStyle.darkButton : globalStyle.lightButton
            }
            type="submit"
          >
            Save
          </Button>
        </div>
      </fieldset>
    </form>
  );
}
