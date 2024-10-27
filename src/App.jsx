// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
// import Button from "./components/Buttons/Button";
// import TextInput from "./components/TextInput/TextInput";
// import TextInputForm from "./components/TextInputForm/TextInputForm";
import { Route, Routes } from "react-router-dom";
// import TextInputFormCOntainer from "./components/TextInputForm/TextInputFormContainer";
import StartGame from "./pages/StartGame";
import PlayGame from "./pages/PlayGame";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/start" element={<StartGame />} />
      <Route path="/play" element={<PlayGame />} />
    </Routes>
  );
}

export default App;
