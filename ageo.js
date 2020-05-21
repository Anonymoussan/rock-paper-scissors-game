let userScore = 0;
var computerScore = 0;

const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const results_p = document.querySelector('.results > p');


const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

function getComputerChoices() {
  const choices = ['r','p','s'];
  const randomnumber = Math.floor(Math.random() * 3);
  return choices[randomnumber];
}


function readname(letter) {
  if (letter === "r") return "rock";
  if (letter === "p") return "paper";
  if (letter === "s") return "scissors";

}

function win(userChoice ,computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  results_p.innerHTML =`${readname(userChoice)}(user)    beats   ${readname(computerChoice)}(computer) . you win `;



}
function lose(userChoice, computerChoice) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  results_p.innerHTML = `${readname(computerChoice)}(computer)  loses  ${readname(userChoice)}(user) . computer win`;

}
function draw(userChoice, computerChoice) {
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  results_p.innerHTML =`${readname(userChoice)}(user)   ${readname(computerChoice)}(computer) . its  Draw! `;




}

function game(userChoice) {
  const computerChoice = getComputerChoices();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice ,computerChoice);
      break;
    case "sr":
    case "rp":
    case "ps":
      lose(userChoice ,computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice ,computerChoice);
      break;

  }

}

function main() {
rock_div.addEventListener('click', function() {
  game("r");

})
paper_div.addEventListener('click', function() {
    game("p");

})

scissors_div.addEventListener('click', function() {
    game("s");

})
}

