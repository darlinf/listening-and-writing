import "./practice_text.css";
import SpeechText from "./speech_text";
import SpeechTextByWord from "./speech_text_by_word";
import { useRef, useState } from "react";
import showResultWriting from "../_helpers/showResultWriting";
import { dataService } from "../_services/data.service";

function PracticeText({ sentence, sentencesSolved, index }) {
  let getData = dataService.getData();
  const [showText, setShowText] = useState(!getData.completed[index]);
  const inputRef = useRef();
  const [message, setMessage] = useState("");
  let textResult2 = getData.dataInput[index]
    ? getData.dataInput[index]
    : message;
  const { resultWriting, result } = showResultWriting(sentence, textResult2);

  const handleDataAndSave = () => {
    if (inputRef.current.value !== "") {
      Object.assign(getData.dataInput, {
        [index]: inputRef.current.value,
      });
      Object.assign(getData.completed, {
        [index]: true,
      });
      dataService.setData(getData);
      setMessage(inputRef.current.value);
      sentencesSolved((x) => x + 1);
      setShowText((x) => !x);
    }
  };

  return (
    <>
      <div>
        <div className="main-container-items">
          {showText ? (
            <div className="container-item" onClick={handleDataAndSave}>
              ...
            </div>
          ) : (
            <div
              className="container-item"
              dangerouslySetInnerHTML={{
                __html: resultWriting,
              }}
            ></div>
          )}

          <div className="speak2">
            <span>{<SpeechText text={sentence} />}</span>
          </div>
          <div className="speak">
            <span>{<SpeechTextByWord text={sentence} />}</span>
          </div>
        </div>
        <div className="to-write-text">
          {showText ? (
            <input ref={inputRef} className="input-text-compare" type="text" />
          ) : (
            <div className="word-result">
              <div
                dangerouslySetInnerHTML={{
                  __html: result,
                }}
              ></div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default PracticeText;
