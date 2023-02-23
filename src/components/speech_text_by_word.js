import "./speech_text_by_word.css";
import speak from "../_helpers/speak";

function SpeechTextByWord({ text }) {
  const eachWord = (text) => {
    let word = text.split(" ");
    let i = 0;
    const insideEachWord = () => {
      let length = word.length - 1;
      if (i < length) {
        i++;
        speak(() => {
          insideEachWord();
        }, word[i]);
      }
    };
    insideEachWord();
  };

  return (
    <>
      <div className="speak" onClick={() => eachWord(text)}>
        <span>
          <svg height="20" viewBox="0 0 24 24" width="20" focusable="false">
            <g>
              <rect fill="none" height="24" width="24"></rect>
            </g>
            <g>
              <g>
                <path d="M3,9v6h4l5,5V4L7,9H3z M16.5,12c0-1.77-1.02-3.29-2.5-4.03v8.05C15.48,15.29,16.5,13.77,16.5,12z M14,3.23v2.06 c2.89,0.86,5,3.54,5,6.71s-2.11,5.85-5,6.71v2.06c4.01-0.91,7-4.49,7-8.77S18.01,4.14,14,3.23z"></path>
              </g>
            </g>
          </svg>
        </span>
      </div>
    </>
  );
}

export default SpeechTextByWord;
