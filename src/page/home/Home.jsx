import "./home.css";
import Chronometer from "../../components/chronometer";
import InputText from "../../components/input_text";
import Count from "../../components/count";
import PracticeText from "../../components/practice_text";
import { useEffect, useState } from "react";

import { dataService } from "../../_services/data.service";

function Home() {
  const [sentencesSolved, setSentencesSolved] = useState(0);
  const [printText, setPrintText] = useState(null);
  const { data } = dataService.getData();

  useEffect(() => {
    setPrintText(data);
  }, [data]);

  return (
    <>
      <div className="container-text-to-push-main">
        <div className="container-text-to-push">
          <Count
            sentencesSolvedNumber={sentencesSolved}
            numberOfSentence={printText?.split(".").length}
          />
          <InputText printText={setPrintText} />
          <Chronometer />
        </div>
      </div>
      <div className="container">
        {printText?.split(/\r?\n|\r|\.|\n/g).map((x, index) => (
          <PracticeText
            index={index}
            sentencesSolved={setSentencesSolved}
            key={index}
            sentence={x}
          />
        ))}
      </div>
    </>
  );
}

export default Home;
