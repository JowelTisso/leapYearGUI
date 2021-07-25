const inputText = document.querySelector("#inputText");
const btn = document.querySelector("#btn");
const outputText = document.querySelector("#outputText");

const handler = () => {
  const year = inputText.value;
  checkForLeapYear(year.trim());
};

btn.addEventListener("click", handler);

const checkForLeapYear = (bornYear) => {
  if (bornYear) {
    //Validating year with regex
    const regex = /[0-9]+/;
    const isValid = bornYear.match(regex);
    //
    if (isValid && bornYear.length == 4) {
      const rem4 = bornYear % 4;
      const rem100 = bornYear % 100;
      const rem400 = bornYear % 400;

      if (rem4 === 0) {
        if (rem100 != 0) {
          outputText.innerText = "Leap year!";
        } else {
          if (rem400 === 0) {
            outputText.innerText = "Leap year!";
          } else {
            outputText.innerText = "Not a leap year!";
          }
        }
      } else {
        outputText.innerText = "Not a leap year!";
      }
    } else {
      outputText.innerText = "Please input a correct year!";
    }
  } else {
    outputText.innerText = "Invalid Year!";
  }
};
