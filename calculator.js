let screen = document.getElementById("screen");
buttons = document.querySelectorAll("button");
let screenValue = "";
for (item of buttons) {
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText; //jis button pe click kre usko text lelo
    console.log("Button text is ", buttonText);
    if (buttonText == "X") {
      buttonText = "*";
      screenValue += buttonText; //scrren val mein add
      screen.value = screenValue; //update
    } else if (buttonText == "C") {
      screenValue = ""; //blank
      screen.value = screenValue;
    } else if (buttonText == "=") {
      screen.value = eval(screenValue); //eval is function (which evalute scrren value)
    } else {
      screenValue += buttonText;
      screen.value = screenValue;
    }
  });
}
