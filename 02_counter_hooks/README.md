# React hooks

# why we need hooks 
- If we change in variable values but UI not update that values 
- Multiple places use same variable thats very difficult and lengthy process in js 
- React control UI update best example is :
 ```jsx
    import { useState } from "react"; //this is a use state hook we can and more using comma(,)
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  //both variable name any thing first one treat like a variable and second one is treat like a method
  let [currentLetter, setNavjotCurrentLetter] = useState("A");

  //next letter
  const incrementLetter = () => {
    if (currentLetter <= "Z") {
      setNavjotCurrentLetter(
        String.fromCharCode(currentLetter.charCodeAt(0) + 1)
      );
    }
    console.log("Add value :", currentLetter);
  };

  //previous letter
  const decrementLetter = () => {
    if (currentLetter >= "A") {
      setNavjotCurrentLetter(
        String.fromCharCode(currentLetter.charCodeAt(0) - 1)
      );
    }
    console.log("Add value :", currentLetter);
  };

  return (
    <>
      <h1>Chai aur code</h1>
      <h2>Counter value:{currentLetter}</h2>
      <button onClick={incrementLetter} disabled={currentLetter === "Z"}>
        Next Letter {currentLetter}
      </button>
      <br />
      <br />
      <button onClick={decrementLetter} disabled={currentLetter === "A"}>
        Previous Letter {currentLetter}
      </button>
      <p>footer {currentLetter}</p>
    </>
  );
}

export default App;

    ```