import { useState } from "react";
import TextInputForm from "./TextInputForm";
import { useNavigate } from "react-router-dom";

function TextInputFormCOntainer() {
  const [inputValue, setInputValue] = useState("text");
  const [input, setInput] = useState();
  const navigate = useNavigate();
  function handleFormSubmit(event) {
    event.preventDefault();
    console.log("form submitted", input);
    if (input) {
      // navigate(`/play?text=${input}`);
      // navigate(`/play/${input}`);
      navigate("/play", { state: { wordSelected: input } });
    }
  }
  function handleTextInputChange(event) {
    console.log("text input changed");
    console.log(event.target.value);
    setInput(event.target.value);
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
