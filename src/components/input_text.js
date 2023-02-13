import "./input_text.css";
import { useState } from "react";

function InputText({ printText }) {
  const [message, setMessage] = useState("");
  const handleChange = (event) => {
    setMessage(event.target.value);
  };
  return (
    <>
      <div className="text-to-push-input">
        <input type="text" onChange={handleChange} id="text-to-push" />
        <button id="push" onClick={() => printText(message)}>
          push
        </button>
      </div>
    </>
  );
}

export default InputText;
