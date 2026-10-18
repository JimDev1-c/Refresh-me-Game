const dieOne = document.querySelector("#die-one");
const dieTwo = document.querySelector("#die-two");
const playerOne = document.querySelector("#player-one");
const playerTwo = document.querySelector("#player-two");
const captionOne = document.querySelector("#caption-one");
const captionTwo = document.querySelector("#caption-two");
const result = document.querySelector("#result");
const rollButton = document.querySelector("#roll-button");

function rollDice(animate = true) {
  const rollOne = Math.floor(Math.random() * 6) + 1;
  const rollTwo = Math.floor(Math.random() * 6) + 1;

  dieOne.src = `./Images/dice${rollOne}.png`;
  dieTwo.src = `./Images/dice${rollTwo}.png`;
  dieOne.alt = `Player one rolled a ${rollOne}`;
  dieTwo.alt = `Player two rolled a ${rollTwo}`;

  playerOne.classList.toggle("is-winner", rollOne > rollTwo);
  playerTwo.classList.toggle("is-winner", rollTwo > rollOne);

  if (rollOne > rollTwo) {
    result.textContent = "Player one takes the win!";
    captionOne.textContent = "Winner";
    captionTwo.textContent = "Next time!";
  } else if (rollTwo > rollOne) {
    result.textContent = "Player two takes the win!";
    captionOne.textContent = "Next time!";
    captionTwo.textContent = "Winner";
  } else {
    result.textContent = "It's a draw! Roll again.";
    captionOne.textContent = "A perfect tie";
    captionTwo.textContent = "A perfect tie";
  }

  if (animate) {
    dieOne.classList.remove("is-rolling");
    dieTwo.classList.remove("is-rolling");
    void dieOne.offsetWidth;
    dieOne.classList.add("is-rolling");
    dieTwo.classList.add("is-rolling");
  }
}

rollButton.addEventListener("click", () => rollDice());
rollDice(false);
