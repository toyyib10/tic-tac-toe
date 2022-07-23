let key = "X";
let check = false; 
const load = () => {
  document.getElementById("alertWord").click()
  staticBackdropLabel.innerText = "Welcome Players!"
  modalDisplay.innerHTML = `Register your names before you play, <br>'Cancel' is to is cancel a game in process if there is a mistake. <br> Player One is "X" and Player Two is "O". <br> Audio won't start unless you press "Play"`
}
const start = () =>{
  if(pOne.value != '' && pTwo.value != ''){
    check = true;
    oDisp.innerText = pOne.value;
    tDisp.innerText = pTwo.value;
    ocDisp.innerText = pOne.value;
    tcDisp.innerText = pTwo.value;
    modalDisplay.innerText = "The game has started"
    staticBackdropLabel.innerText = ""
    document.getElementById("alertWord").click();
  }
  else{
    modalDisplay.innerText = "Complete players Info before you start"
    staticBackdropLabel.innerText = ""
    document.getElementById("alertWord").click()
  }
}
const keys = (e) =>{
  if(check == true){
    if (e.target.innerText != ""){}
    else{
      if (key != "O"){
        e.target.innerText = key;
        key = "O";
        if(d1.innerText == "X" && d2.innerText == "X" && d3.innerText == "X"){
          let cScore = Number(ocScore.innerText);
          let score = Number(oScore.innerText);
          score = 1 + score 
          cScore = 1 + cScore;
          ocScore.innerText = cScore;
          oScore.innerText = score;
          modalDisplay.innerText = `${pOne.value} Won`
          staticBackdropLabel.innerText = ""
          document.getElementById("alertWord").click()
          d1.innerText = "";
          d2.innerText = "";
          d3.innerText = "";
          d4.innerText = "";
          d5.innerText = "";
          d6.innerText = "";
          d7.innerText = "";
          d8.innerText = "";
          d9.innerText = "";
        }
        else if(d4.innerText == "X" && d5.innerText == "X" && d6.innerText == "X"){
          let cScore = Number(ocScore.innerText);
          let score = Number(oScore.innerText);
          score = 1 + score 
          cScore = 1 + cScore;
          ocScore.innerText = cScore;
          oScore.innerText = score;
          modalDisplay.innerText = `${pOne.value} Won`
          staticBackdropLabel.innerText = ""
          document.getElementById("alertWord").click()
          d1.innerText = "";
          d2.innerText = "";
          d3.innerText = "";
          d4.innerText = "";
          d5.innerText = "";
          d6.innerText = "";
          d7.innerText = "";
          d8.innerText = "";
          d9.innerText = "";
        }
        else if(d7.innerText == "X" && d8.innerText == "X" && d9.innerText == "X"){
          let cScore = Number(ocScore.innerText);
          let score = Number(oScore.innerText);
          score = 1 + score 
          cScore = 1 + cScore;
          ocScore.innerText = cScore;
          oScore.innerText = score;
          modalDisplay.innerText = `${pOne.value} Won`
          staticBackdropLabel.innerText = ""
          document.getElementById("alertWord").click()
          d1.innerText = "";
          d2.innerText = "";
          d3.innerText = "";
          d4.innerText = "";
          d5.innerText = "";
          d6.innerText = "";
          d7.innerText = "";
          d8.innerText = "";
          d9.innerText = "";
        }
        else if(d1.innerText == "X" && d4.innerText == "X" && d7.innerText == "X"){
          let cScore = Number(ocScore.innerText);
          let score = Number(oScore.innerText);
          score = 1 + score 
          cScore = 1 + cScore;
          ocScore.innerText = cScore;
          oScore.innerText = score;
          modalDisplay.innerText = `${pOne.value} Won`
          document.getElementById("alertWord").click()
          d1.innerText = "";
          d2.innerText = "";
          d3.innerText = "";
          d4.innerText = "";
          d5.innerText = "";
          d6.innerText = "";
          d7.innerText = "";
          d8.innerText = "";
          d9.innerText = "";
        }
        else if(d2.innerText == "X" && d5.innerText == "X" && d8.innerText == "X"){
          let cScore = Number(ocScore.innerText);
          let score = Number(oScore.innerText);
          score = 1 + score 
          cScore = 1 + cScore;
          ocScore.innerText = cScore;
          oScore.innerText = score;
          modalDisplay.innerText = `${pOne.value} Won`
          document.getElementById("alertWord").click()
          d1.innerText = "";
          d2.innerText = "";
          d3.innerText = "";
          d4.innerText = "";
          d5.innerText = "";
          d6.innerText = "";
          d7.innerText = "";
          d8.innerText = "";
          d9.innerText = "";
        }
        else if(d3.innerText == "X" && d6.innerText == "X" && d9.innerText == "X"){
          let cScore = Number(ocScore.innerText);
          let score = Number(oScore.innerText);
          score = 1 + score 
          cScore = 1 + cScore;
          ocScore.innerText = cScore;
          oScore.innerText = score;
          modalDisplay.innerText = `${pOne.value} Won`
          document.getElementById("alertWord").click()
          d1.innerText = "";
          d2.innerText = "";
          d3.innerText = "";
          d4.innerText = "";
          d5.innerText = "";
          d6.innerText = "";
          d7.innerText = "";
          d8.innerText = "";
          d9.innerText = "";
        }
        else if(d1.innerText == "X" && d5.innerText == "X" && d9.innerText == "X"){
          let cScore = Number(ocScore.innerText);
          let score = Number(oScore.innerText);
          score = 1 + score 
          cScore = 1 + cScore;
          ocScore.innerText = cScore;
          oScore.innerText = score;
          modalDisplay.innerText = `${pOne.value} Won`
          document.getElementById("alertWord").click()
          d1.innerText = "";
          d2.innerText = "";
          d3.innerText = "";
          d4.innerText = "";
          d5.innerText = "";
          d6.innerText = "";
          d7.innerText = "";
          d8.innerText = "";
          d9.innerText = "";
        }
        else if(d3.innerText == "X" && d5.innerText == "X" && d7.innerText == "X"){
          let cScore = Number(ocScore.innerText);
          let score = Number(oScore.innerText);
          score = 1 + score 
          cScore = 1 + cScore;
          ocScore.innerText = cScore;
          oScore.innerText = score;
          modalDisplay.innerText = `${pOne.value} Won`
          document.getElementById("alertWord").click()
          d1.innerText = "";
          d2.innerText = "";
          d3.innerText = "";
          d4.innerText = "";
          d5.innerText = "";
          d6.innerText = "";
          d7.innerText = "";
          d8.innerText = "";
          d9.innerText = "";
        }
      }
      else{ 
        e.target.innerText = key;
        key = "X";
        if(d1.innerText == "O" && d2.innerText == "O" && d3.innerText == "O"){
          let cScore = Number(tcScore.innerText);
          let score = Number(tScore.innerText);
          score = 1 + score 
          cScore = 1 + cScore;
          tcScore.innerText = cScore;
          tScore.innerText = score;
          modalDisplay.innerText = `${pTwo.value} Won`
          document.getElementById("alertWord").click()
          d1.innerText = "";
          d2.innerText = "";
          d3.innerText = "";
          d4.innerText = "";
          d5.innerText = "";
          d6.innerText = "";
          d7.innerText = "";
          d8.innerText = "";
          d9.innerText = "";
        }
        else if(d4.innerText == "O" && d5.innerText == "O" && d6.innerText == "O"){
          let cScore = Number(tcScore.innerText);
          let score = Number(tScore.innerText);
          score = 1 + score 
          cScore = 1 + cScore;
          tcScore.innerText = cScore;
          tScore.innerText = score;
          modalDisplay.innerText = `${pTwo.value} Won`
          document.getElementById("alertWord").click()
          d1.innerText = "";
          d2.innerText = "";
          d3.innerText = "";
          d4.innerText = "";
          d5.innerText = "";
          d6.innerText = "";
          d7.innerText = "";
          d8.innerText = "";
          d9.innerText = "";
        }
        else if(d7.innerText == "O" && d8.innerText == "O" && d9.innerText == "O"){
          let cScore = Number(tcScore.innerText);
          let score = Number(tScore.innerText);
          score = 1 + score 
          cScore = 1 + cScore;
          tcScore.innerText = cScore;
          tScore.innerText = score;
          modalDisplay.innerText = `${pTwo.value} Won`
          document.getElementById("alertWord").click()
          d1.innerText = "";
          d2.innerText = "";
          d3.innerText = "";
          d4.innerText = "";
          d5.innerText = "";
          d6.innerText = "";
          d7.innerText = "";
          d8.innerText = "";
          d9.innerText = "";
        }
        else if(d1.innerText == "O" && d4.innerText == "O" && d7.innerText == "O"){
          let cScore = Number(tcScore.innerText);
          let score = Number(tScore.innerText);
          score = 1 + score 
          cScore = 1 + cScore;
          tcScore.innerText = cScore;
          tScore.innerText = score;
          modalDisplay.innerText = `${pTwo.value} Won`
          document.getElementById("alertWord").click()
          d1.innerText = "";
          d2.innerText = "";
          d3.innerText = "";
          d4.innerText = "";
          d5.innerText = "";
          d6.innerText = "";
          d7.innerText = "";
          d8.innerText = "";
          d9.innerText = "";
        }
        else if(d2.innerText == "O" && d5.innerText == "O" && d8.innerText == "O"){
          let cScore = Number(tcScore.innerText);
          let score = Number(tScore.innerText);
          score = 1 + score 
          cScore = 1 + cScore;
          tcScore.innerText = cScore;
          tScore.innerText = score;
          modalDisplay.innerText = `${pTwo.value} Won`
          document.getElementById("alertWord").click()
          d1.innerText = "";
          d2.innerText = "";
          d3.innerText = "";
          d4.innerText = "";
          d5.innerText = "";
          d6.innerText = "";
          d7.innerText = "";
          d8.innerText = "";
          d9.innerText = "";
        }
        else if(d3.innerText == "O" && d6.innerText == "O" && d9.innerText == "O"){
          let cScore = Number(tcScore.innerText);
          let score = Number(tScore.innerText);
          score = 1 + score 
          cScore = 1 + cScore;
          tcScore.innerText = cScore;
          tScore.innerText = score;
          modalDisplay.innerText = `${pTwo.value} Won`
          document.getElementById("alertWord").click()
          d1.innerText = "";
          d2.innerText = "";
          d3.innerText = "";
          d4.innerText = "";
          d5.innerText = "";
          d6.innerText = "";
          d7.innerText = "";
          d8.innerText = "";
          d9.innerText = "";
        }
        else if(d1.innerText == "O" && d5.innerText == "O" && d9.innerText == "O"){
          let cScore = Number(tcScore.innerText);
          let score = Number(tScore.innerText);
          score = 1 + score 
          cScore = 1 + cScore;
          tcScore.innerText = cScore;
          tScore.innerText = score;
          modalDisplay.innerText = `${pTwo.value} Won`
          document.getElementById("alertWord").click()
          d1.innerText = "";
          d2.innerText = "";
          d3.innerText = "";
          d4.innerText = "";
          d5.innerText = "";
          d6.innerText = "";
          d7.innerText = "";
          d8.innerText = "";
          d9.innerText = "";
        }
        else if(d3.innerText == "O" && d5.innerText == "O" && d7.innerText == "O"){
          let cScore = Number(tcScore.innerText);
          let score = Number(tScore.innerText);
          score = 1 + score 
          cScore = 1 + cScore;
          tcScore.innerText = cScore;
          tScore.innerText = score;
          modalDisplay.innerText = `${pTwo.value} Won`
          document.getElementById("alertWord").click()
          d1.innerText = "";
          d2.innerText = "";
          d3.innerText = "";
          d4.innerText = "";
          d5.innerText = "";
          d6.innerText = "";
          d7.innerText = "";
          d8.innerText = "";
          d9.innerText = "";
        }
      }
      if( d1.innerText != "" && d2.innerText != "" && d3.innerText != "" && d4.innerText != "" && d5.innerText != "" && d6.innerText != "" && d7.innerText != "" && d8.innerText != "" && d9.innerText != ""){
        modalDisplay.innerText = `No one wins round`
        document.getElementById("alertWord").click()
        d1.innerText = "";
        d2.innerText = "";
        d3.innerText = "";
        d4.innerText = "";
        d5.innerText = "";
        d6.innerText = "";
        d7.innerText = "";
        d8.innerText = "";
        d9.innerText = "";
      }
    }
  }
  else{
    modalDisplay.innerText = `Fill in player name`
    document.getElementById("alertWord").click()
  }
}
const trestart = () =>{
  document.getElementById("alertWord").click()
  modalDisplay.innerHTML = `Are you sure you want to restart? <button id="btn" style="background-color:rgb(238, 164, 26);" onclick="btn()"class="btn fs-4 w-25" data-bs-dismiss="modal">Yes</button>`
}
const restart = () =>{
  document.getElementById("alertWord").click()
  modalDisplay.innerHTML = `Are you sure you want to restart? <button id="btn" style="background-color:rgb(238, 164, 26);" onclick="btn()" class="btn fs-4 w-25" data-bs-dismiss="modal">Yes</button>`
  addEventListener("click",btn)
}
const btn = () => {
  check =false;  
  pOne.value = "";
  pTwo.value = "";
  d1.innerText = "";
  d2.innerText = "";
  d3.innerText = "";
  d4.innerText = "";
  d5.innerText = "";
  d6.innerText = "";
  d7.innerText = "";
  d8.innerText = "";
  d9.innerText = "";
  oDisp.innerText = "Player One";
  ocDisp.innerText = "Player One";
  tDisp.innerText = "Player Two";
  tcDisp.innerText = "Player Two";
  tcScore.innerText = 0;
  tScore.innerText = 0;
  oScore.innerText = 0;
  ocScore.innerText = 0;
}
const tcancel = () => {
  if (d1.innerText != "" || d2.innerText != "" || d3.innerText != "" || d4.innerText != "" || d5.innerText != "" || d6.innerText != "" || d7.innerText != "" || d8.innerText != "" ||d9.innerText != ""){
    d1.innerText = "";
    d2.innerText = "";
    d3.innerText = "";
    d4.innerText = "";
    d5.innerText = "";
    d6.innerText = "";
    d7.innerText = "";
    d8.innerText = "";
    d9.innerText = "";
  }
  else{
    modalDisplay.innerText = "There is Nothing to Cancel"
    document.getElementById("alertWord").click()
  }
}
const cancel = () => {
  if (d1.innerText != "" || d2.innerText != "" || d3.innerText != "" || d4.innerText != "" || d5.innerText != "" || d6.innerText != "" || d7.innerText != "" || d8.innerText != "" ||d9.innerText != ""){
    d1.innerText = "";
    d2.innerText = "";
    d3.innerText = "";
    d4.innerText = "";
    d5.innerText = "";
    d6.innerText = "";
    d7.innerText = "";
    d8.innerText = "";
    d9.innerText = "";
  }
  else{
    modalDisplay.innerText = "There is Nothing to Cancel"
    document.getElementById("alertWord").click()
  }
}
let num;
let audio = new Audio('Sia_-_Unstoppable_CeeNaija.com_.mp3')
let audio1 = new Audio('Ed_Sheeran_-_Shape_of_You.mp3')

const tPlay = () =>{
  num = Math.floor(Math.random() * 2)
  if (num == 0){
    audio.loop = true;
    audio.play()
    audio1.pause()
  }
  else if (num == 1){
    audio.pause()
    audio1.loop = true;
    audio1.play()
  }
}
const tPause = () => {
  audio.pause()
  audio1.pause()
}
const tcPlay = () =>{
  num = Math.floor(Math.random() * 2)
  if (num == 0){
    audio1.pause()
    audio.loop = true;
    audio.play()
  }
  else if (num == 1){
    audio.pause()
    audio1.loop = true;
    audio1.play()
  }
}
const tcPause = () => {
  audio.pause()
  audio1.pause()
}
