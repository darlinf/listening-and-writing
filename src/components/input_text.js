import "./input_text.css";
import { useState } from "react";
import { dataService } from "../_services/data.service";

function InputText({ printText }) {
  const [message, setMessage] = useState("");
  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  function saveData(string) {
    if (string.replace(/\s/g, "") === "") {
      dataService.setData({ ...dataService.dataSave, data: null });
      printText(null);
    } else {
      //console.log(string);
      let completed = {};

      string.split(".").forEach((_, index) => {
        Object.assign(completed, { [index]: false });
        //return { [index]: false };
      });

      //console.log(completed);

      dataService.setData({
        ...dataService.dataSave,
        data: string,
        completed,
      });
      console.log(dataService.getData());
      printText(string);
    }
  }

  return (
    <>
      <div className="text-to-push-input">
        <input type="text" onChange={handleChange} id="text-to-push" />
        <button
          id="push"
          onClick={() => {
            saveData(message);
          }}
        >
          push
        </button>
      </div>
    </>
  );
}

export default InputText;
