import { useState } from "react";

function Buttons({ initialColor,functionCall}) {
  let buttonName = initialColor.toUpperCase();
  let textColor = ["white", "yellow"].includes(initialColor)
    ? "black"
    : "white";

  return (
    <button
      className={`px-3 rounded-full shadow-gray-500/50 shadow-lg`}
      style={{ backgroundColor: initialColor, color: textColor }}
      onClick={()=>functionCall(initialColor)}
    >
      {buttonName}
    </button>
  );
}

export default Buttons;
