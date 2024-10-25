import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./components/Buttons/Button";
import TextInput from "./components/TextInput/TextInput";
import TextInputForm from "./components/TextInputForm/TextInputForm";
import TextInputFormCOntainer from "./components/TextInputForm/TextInputFormContainer";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div>
      {/* <TextInputForm /> */}
      <TextInputFormCOntainer />
      {/* <Button
        text={"Click me 1"}
        onClickHandler={() => console.log("Hello 1")}
        styleType="success"
      />

      <Button
        text={"Click me 2"}
        onClickHandler={() => console.log("Hello 2")}
        styleType="warning"
      />

      <Button
        text={"Click me 3"}
        onClickHandler={() => console.log("Hello 3")}
      />
      <TextInput
        label={"Hello"}
        placeholder="What is your name"
        onChangeHandler={(e) => console.log(e.target.value)}
      /> */}
    </div>
  );
}

export default App;
