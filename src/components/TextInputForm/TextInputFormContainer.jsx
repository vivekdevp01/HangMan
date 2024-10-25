import { useState } from "react";
import TextInputForm from "./TextInputForm";

function TextInputFormCOntainer() {
  const [inputValue, setInputValue] = useState("text");
  function handleFormSubmit(event) {
    event.preventDefault();
    console.log("form submitted");
  }
  function handleTextInputChange(event) {
    console.log("text input changed");
    console.log(event.target.value);
  }
  function handleShowHideClick() {
    console.log("show hide clicked");
    if (inputValue == "text") {
      setInputValue("password");
    } else {
      setInputValue("text");
    }
  }
  return (
    <TextInputForm
      inputType={inputValue}
      handleShowHideClick={handleShowHideClick}
      handleFormSubmit={handleFormSubmit}
      handleTextInputChange={handleTextInputChange}
    />
  );
}
export default TextInputFormCOntainer;
