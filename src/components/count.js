import "./count.css";

function Count({ numberOfSentence, sentencesSolvedNumber }) {
  return (
    <div id="writing-count">
      <div>
        <span className="current-count">{sentencesSolvedNumber}</span>-
        <span>5</span>
      </div>
      <div>
        <span className="total-count">
          {numberOfSentence ? numberOfSentence : "00"}
        </span>
      </div>
    </div>
  );
}

export default Count;
