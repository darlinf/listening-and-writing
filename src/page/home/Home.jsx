import "./home.css";
import Chronometer from "../../components/chronometer";
import InputText from "../../components/input_text";
import Count from "../../components/count";
import PracticeText from "../../components/practice_text";
import { useState } from "react";

function Home() {
  const [printText, setPrintText] = useState(null);
  const [sentencesSolved, setSentencesSolved] = useState(0);

  return (
    <>
      <div className="container-text-to-push">
        <Count
          sentencesSolvedNumber={sentencesSolved}
          numberOfSentence={printText?.split(".").length}
        />
        <InputText printText={setPrintText} />
        <Chronometer />
      </div>
      <div className="container">
        {printText?.split(".").map((x, index) => {
          return (
            <PracticeText
              sentencesSolved={setSentencesSolved}
              key={index}
              sentence={x}
            />
          );
        })}
      </div>
    </>
  );
}

export default Home;
