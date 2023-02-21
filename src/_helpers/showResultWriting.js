function wordNormalized(wordText) {
  return wordText.replaceAll(",", "").replaceAll(".", "").toUpperCase();
}

function showResultWriting(textInput2, textResult2) {
  let textInput = textResult2.split(" ");
  let textResult = textInput2.split(" ");
  let resultWriting = [];
  let flat = true;

  for (let j = 0; j < textInput.length; j++) {
    for (let i = 0; i < textResult.length; i++) {
      if (wordNormalized(textResult[i]) === wordNormalized(textInput[j])) {
        resultWriting.push(
          `<span class="word-result-good">${textInput[j]}</span>`
        );
        flat = false;
        break;
      }
    }
    if (flat) {
      resultWriting.push(
        `<span class="word-result-bad">${textInput[j]}</span>`
      );
    }
    flat = true;
  }

  //caught word
  let flat2 = false;
  let resultWriting2 = [];

  for (let i = 0; i < textResult.length; i++) {
    for (let j = 0; j < resultWriting.length; j++) {
      if (
        wordNormalized(textResult[i]) === wordNormalized(textInput[j]) &&
        resultWriting[0].includes("good") === true
      ) {
        flat2 = true;
        break;
      }
    }
    if (flat2 === false) {
      resultWriting2.push(
        `<span class="word-text-result">${textResult[i]}</span>`
      );
    } else {
      resultWriting2.push(textResult[i]);
    }
    flat2 = false;
  }

  return {
    resultWriting: resultWriting2.join(" "),
    result: resultWriting.join(" "),
  };
}

export default showResultWriting;
