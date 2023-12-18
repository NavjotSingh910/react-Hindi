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


# Interview Question for increment 
```jsx
// Import the 'useState' hook from the 'react' library
import React, { useState } from 'react';

// Import images
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

// Import styles
import './App.css';

// Define the functional component named 'App'
function App() {
  // Use the 'useState' hook to create a state variable 'counter' with an initial value of 15
  const [counter, setCounter]  = useState(15);

  // Define a function 'addValue' to increment the 'counter' state
  const addValue = () => {

    /*setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);//output 16*/


    // Use the 'setCounter' function provided by 'useState' to update the 'counter' state
    // The argument to 'setCounter' is a function that takes the previous state and returns the new state
    setCounter(prevCounter => prevCounter + 1);//use callback 
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);// out put19


  };

  // Define a function 'removeValue' to decrement the 'counter' state
  const removeValue = () => {
    // Update the 'counter' state by subtracting 1
    setCounter(counter - 1);
  };
  
  // Return JSX representing the component's UI
  return (
    <>
      {/* JSX: Display a heading */}
      <h1>Chai aur react</h1>
      {/* JSX: Display the current value of the 'counter' state */}
      <h2>Counter value: {counter}</h2>

      {/* JSX: Button to trigger the 'addValue' function */}
      <button onClick={addValue}>Add value {counter}</button> 
      <br />
      {/* JSX: Button to trigger the 'removeValue' function */}
      <button onClick={removeValue}>Remove value {counter}</button>
      {/* JSX: Display the 'counter' state in a paragraph */}
      <p>footer: {counter}</p>
    </>
  );
}

// Export the 'App' component as the default export
export default App;

```