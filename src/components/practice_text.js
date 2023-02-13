import "./practice_text.css";
import SpeechText from "./speech_text";
import { useRef, useState } from "react";
import showResultWriting from "../_herpers/showResultWriting";

function PracticeText({ sentence, sentencesSolved }) {
  const [showText, setShowText] = useState(true);
  const inputRef = useRef();
  const [message, setMessage] = useState("");

  const { resultWriting, result } = showResultWriting(sentence, message);

  return (
    <>
      <div>
        <div className="main-container-items">
          {showText ? (
            <div
              className="container-item"
              onClick={() => {
                if (inputRef.current.value !== "") {
                  setMessage(inputRef.current.value);
                  sentencesSolved((x) => x + 1);
                  setShowText((x) => !x);
                }
              }}
            >
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

          <div className="speak">
            <span>{<SpeechText text={sentence} />}</span>
          </div>
        </div>
        <div className="to-write-text" id="to-write-text-${index}">
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
