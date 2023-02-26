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
      let completed = {};

      string.split(/\r?\n|\r|\.|\n/g).forEach((_, index) => {
        Object.assign(completed, { [index]: false });
      });

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
        <textarea
          rows="1"
          cols="50"
          wrap="physical"
          type="text"
          onChange={handleChange}
          id="text-to-push"
        />
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
