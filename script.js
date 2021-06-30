//start button
let startButton = document.querySelector(".start");
startButton.addEventListener("click", () => {
  startButton.parentNode.parentNode.style.display = "none";
  startGame()
});

//restart button
let restartButton = document.querySelector(".restart");
restartButton.addEventListener("click", () => {
  startGame()
  popend.style.display ="none";
});

let popend = document.querySelector(".popup-end");

//game play
let chanceCount =0;


let x = "x";
let o = "o";

arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let chance = false;
function play(event) {
  chanceCount++;
  let element = event.target;

  if (element.clicked) return;
  element.clicked = true;

  if (chance) {
    element.textContent = x;

    arr[element.i][element.j] = x;
  } else {
    element.textContent = o;
    arr[element.i][element.j] = o;
  }

  chance = !chance;
  console.log(check(arr));

  if (check(arr)) {
    popend.style.display = "flex";
    let resultDiv = document.getElementById("result");
    if (chance) resultDiv.textContent = "YAYY! 'O' WON THE GAME";
    else resultDiv.textContent = "YAYY! 'X' WON THE GAME";
  }

  else
  {
     if(chanceCount ==9)
     {
      let resultDiv = document.getElementById("result");
       resultDiv.textContent = "OHH! IT'S A TIE";
       popend.style.display = "flex";
     }
  }
}

let container = document.querySelector(".container");

function startGame() {
  chanceCount=0;
  container.innerHTML =""
  for (let i = 0; i < 3; i++) {

    for (let j = 0; j < 3; j++) {
      let div = document.createElement("div");
      container.append(div);
      div.i = i;
      div.j = j;
      div.clicked = false;
      div.addEventListener("click", play);
    }
  }
  arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
}


function check(arr) {
  let same = true;
  let char = null;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (i == j) {
        if (char == null) {
          char = arr[i][j];
          continue;
        }

        if (arr[i][j] !== char) {
          same = false;
        }
      }
    }
  }

  if (same) return true;

  (same = true), (char = null);
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (i + j == 2) {
        if (char == null) {
          char = arr[i][j];
          continue;
        }

        if (arr[i][j] !== char) {
          same = false;
        }
      }
    }
  }

  if (same) return true;

  for (let i = 0; i < 3; i++) {
    if (arr[i][0] == arr[i][1] && arr[i][1] == arr[i][2]) return true;
  }

  for (let j = 0; j < 3; j++) {
    if (arr[0][j] == arr[1][j] && arr[1][j] == arr[2][j]) return true;
  }

  return false;
}
