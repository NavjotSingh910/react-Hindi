// Importing necessary React hooks
import { useState, useCallback, useEffect , useRef} from "react";

// Functional Component - App
function App() {
  //useState
  // State variables
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  
  //useRef hook
  const passwordRef=useRef(null) 
  console.log(passwordRef);

  // Password Generator Function
  //useCallback:useCallback will return a memoized version of the callback that only changes if one of the inputs has changed.
  const passwordGenerator = useCallback(() => {
    // Initialize an empty password string and character set
    let pass = "";
    let str = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ";

    // Include numbers in the character set if allowed
    if (numberAllowed) str += "1234567890";
    
    // Include special characters in the character set if allowed
    if (charAllowed) str += "!@#$%^&*)_+-={}?><|";

    // Generate the password based on the character set and length
    for (let i = 1; i <= length; i++) {
      let charIndex = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(charIndex);
    }

    // Set the generated password in the state
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);


  const copyPasswordToClipboard=useCallback(()=>{
    passwordRef.current?.select();  
    passwordRef.current?.setSelectionRange(0,3);//its not effect on copy 
    window.navigator.clipboard.writeText(password)
  },[password]) 

  // useEffect Hook - Trigger password generation when dependencies change
  useEffect(() => {
    passwordGenerator();
  }, [passwordGenerator, length, numberAllowed, charAllowed]);

  // JSX (Rendered Component)
  return (
    <>
      <div className="h-screen flex flex-row justify-center items-center bg-white-700">
        <div className="w-full max-w-md h-60 text-white shadow-lg shadow-green-500/50 bg-teal-500/60 rounded-md p-4 ">
          <h1 className="text-center text-xl mb-4 font-bold">
            Password Generator
          </h1>
          {/* Display the generated password */}
          <div className="flex rounded-lg overflow-hidden mb-4 bg-red-500">
            <input
              type="text"
              value={password}
              placeholder="Password"
              readOnly
              className="outline-none bg-gray-800 text-gray-100 px-1 py-3 w-full"
              ref={passwordRef}
            />
            <button onClick={copyPasswordToClipboard} className="outline-none px-3 py-0.5 shrink-0 bg-teal-600">
              Copy
            </button>
          </div>
          {/* Password length input */}
          <div className="flex item-center gap-x-1">
            <input
              type="range"
              min={6}
              max={30}
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="cursor-pointer"
            ></input>
            <label>Length: {length}</label>
          </div>
          {/* Checkbox for including numbers */}
          <div className="flex item-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
              className="cursor-pointer"
            ></input>
            <label>Include Numbers</label>
          </div>
          {/* Checkbox for including special characters */}
          <div className="flex item-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
              className="cursor-pointer"
            ></input>
            <label>Include Special Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

// Export the component
export default App;
