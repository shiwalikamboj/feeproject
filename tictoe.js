//access all button
let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newgame = document.querySelector("#new-game");
let msgcon = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
//alternate turns-playerx,playerO
let turnO = true; //O
//store wining patterns-all row,all col,diagnoll pe win
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
const resetGame = () => {
  turnO = true;
  enableboxes();
  msgcon.classList.add("hide");
};
//btn click kre to action ho
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box clicked");
    if (turnO) {
      // agr o ki turn h
      box.innerText = "O";
      turnO = false; //next trurn ke liye false
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    checkwinner();
  });
});
const disableboxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enableboxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
/**abhi problem ye h ki phele click kiya toh x aya suppose
 * but agr dobara click toh change hojayega x tha toh O,iske liye jaise click kiya text agya toh disable krdo
 * bg mein change ho raha h iske liye box mein bg do
 */
/** or jaise hi button click ho ,hume check krna hoga ki koi winner h*/
const showwinner = (winner) => {
  msg.innerText = `Congrats,winner is ${winner}`;
  //hide ko remove
  msgcon.classList.remove("hide");
  disableboxes(); //disable
};
const checkwinner = () => {
  //ek ek winning patern ko check kro ,hr row  col mein 3 pos  h
  for (let pattern of winPatterns) {
    /*
    console.log(pattern[0], pattern[1], pattern[2]); //position
    //  console.log(boxes[pattern[0]], boxes[pattern[1]], boxes[pattern[2]]);
    //jo boxes vala arr h jisme sare btn h,ismein index ke liye ckeck krenge box[pattern[0]]
    console.log(
      boxes[pattern[0]].innerText,
      boxes[pattern[1]].innerText,
      boxes[pattern[2]].innerText
      //andr ka text print krana h ,inhe hum individual var mein bhi store kra skte h pos1
    );
    */
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;
    //kya ek row,col mein koi pos khali h,khali h to not win
    if (pos1val != "" && pos2val != "" && pos3val != "") {
      //check wining pat
      if (pos1val == pos2val && pos2val == pos3val) {
        console.log("winner", pos1val);
        showwinner(pos1val); //koi ek pat match print winner
        //winner ko print krane ke liye msg-container bnao
      } //but start mein isko dekhane to jruri ni h,new class dedo hide,display none
      //showwinner func bnao
      //hmme yebhi krna hoga ki jaise hi ek winner mil jaye button disable taki or game na khel paye
      //or enable func bnane pdega taki naya gm start ho to sare enable
    }
  }
};
newgame.addEventListener("click", resetGame); //newgm pe click kre
reset.addEventListener("click", resetGame);
