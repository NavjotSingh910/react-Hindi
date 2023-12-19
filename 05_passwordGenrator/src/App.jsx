import { useState, useCallback } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordGenrator = useCallback(() => {
    let pass = "";
    let str = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ";
    if (numberAllowed) str += "1234567890";
    if (charAllowed) str += "!@#$%^&*)_+-={}?><|";
    for (let i = 1; i <= length; i++) {
      let charIndex = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(charIndex);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  return (
    <>
      <div className="h-screen flex  bg-red-700">
        <div className="w-full max-w-md mx-auto text-white bg-gray-500 rounded-md p-4 ">
          <h1 className=" text-center text-xl mb-4 font-bold">
            Password Genrator
          </h1>
          <div className="flex rounded-lg overflow-hidden mb-4  bg-red-500">
            <input
              type="text"
              value={password}
              placeholder="Password"
              readOnly
              className="outline-none  px-1 py-3 w-full"
            />
            <button className="outline-none px-3 py-0.5 shrink-0 bg-teal-600">
              Copy
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
