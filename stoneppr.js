let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const gencompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  //arr mein store kiya h kyki random func int deta h str nhi
  /*random func mein agr hmme 0 to 9 ki range mein chaiye 10 se multi,
    similarly agr 0 se 2 ki range chaiye toh 3 se multi
    decimal mein ayenge-remove krne ke liye math.floor
    */
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx]; //playgame ko bhejo
};

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const drawGame = () => {
  console.log("game was draw");
  msg.innerText = "Play Again!";
  msg.style.backgroundColor = "yellow";
};

const showWinner = (userWin) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    console.log("you win!");
    msg.innerText = "You win!";
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    console.log("you lose!");
    msg.innerText = "you lose!";
    msg.style.backgroundColor = "red";
    //ab in msgs  ko msg vale para mein leke jao toh msg.innertext set
    //or bg bhi set kr skte h win ho jaye to alg colr
  }
};
const playGame = (userchoice) => {
  console.log("user choice=", userchoice);
  //generate comp choice
  const compChoice = gencompChoice();
  console.log("comp choice=", compChoice);
  if (userchoice == compChoice) {
    drawGame();
  } else {
    let userWin = true; //user
    if (userchoice == "rock") {
      //agr user choice rock,means comp ki rock nhi hogi kyki draw hojata,or draw toh if mwin check ho hi gya
      //sciisor,ppr
      userWin = compChoice == "paper" ? false : true;
    } else if (userchoice == "paper") {
      userWin = compChoice == "scissors" ? false : true;
    } else {
      //user scissor
      //rock,paper
      userWin = compChoice == "rock" ? false : true;
    }
    showWinner(userWin); //wiiner show
  }
};

//click even  track
choices.forEach((choice) => {
  console.log(choice); //print div choice rock ,div choice stone..
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    // console.log("choice click", userchoice);
    playGame(userchoice);
    //hum userchoice bhi print kra skte h ki rock,stone ,ppr,getaattr se
    //or fir choice click ke sath,choiceid ko bhi print
  });
});
//comp se ek random choice generate,playgame func,then dono choice ko compare
