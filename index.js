function diceimg(n) {
  if (n === 1) {
    return "./images/dice1.png";
  } else if (n === 2) {
    return "./images/dice2.png";
  } else if (n === 3) {
    return "./images/dice3.png";
  } else if (n === 4) {
    return "./images/dice4.png";
  } else if (n === 5) {
    return "./images/dice5.png";
  } else {
    return "./images/dice6.png";
  }
}

function main() {
  var play1 = Math.floor(Math.random() * 6);
  play1 = play1 + 1;
  var play2 = Math.floor(Math.random() * 6);
  play2 = play2 + 1;

  var img1 = diceimg(play1);
  var img2 = diceimg(play2);

  if (play1 > play2) {
    document.querySelector(".title").textContent = "🚩Player 1 Wins";
  } else if (play2 > play1) {
    document.querySelector(".title").textContent = "Player 2 wins🚩";
  } else {
    document.querySelector(".title").textContent = "Draw!";
  }

  document.querySelector(".player1 img").setAttribute("src", img1);
  document.querySelector(".player2 img").setAttribute("src", img2);
}

main();
