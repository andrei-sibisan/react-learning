import MyButton from "./components/MyButton";
import users from "./data/users";
import Gallery from "./components/Gallery";

import "./styles/App.css";
import { useState } from "react";

function App() {
  const [isPressed, setIsPressed] = useState(false);
  return (
    <>
      <h1 className="main-header">My Hello World App in React</h1>
      <MyButton
        onClick={() => {
          setIsPressed(!isPressed);
          console.log("I was pressed");
        }}
      />
      {isPressed && <Gallery userArray={users} />}
    </>
  );
}

export default App;
