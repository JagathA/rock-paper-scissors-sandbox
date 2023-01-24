const getRandomMove = () => {
    const moves = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * moves.length);
    return moves[randomIndex];
  };
  
  const getOutcome = (moveOne, moveTwo) => {
    if (moveOne === moveTwo) {
      return "It's a draw!";
    }
  
    if (
      (moveOne === "scissors" && moveTwo === "paper") ||
      (moveOne === "rock" && moveTwo === "scissors") ||
      (moveOne === "paper" && moveTwo === "rock")
    ) {
      return "Player One wins!";
    }
  
    return "Player Two wins!";
  };
  
  // Removing elements (nodes) from the DOM
  const resetGame = () => {
    if (document.getElementById("outcome")) {
      const outcome = document.body.lastChild;
      document.body.removeChild(outcome);
    }
  };
  
  const playGame = () => {
    resetGame();
    const playerOneMove = getRandomMove();
    const playerTwoMove = getRandomMove();
    const outcome = getOutcome(playerOneMove, playerTwoMove);
    updateDOM(playerOneMove, playerTwoMove, outcome);
  };
  
  const updateDOM = (moveOne, moveTwo, outcome) => {
    

    imgLookup = {"scissors":"./images/scissors.png", "rock":"./images/rock.png", "paper":"./images/paper.png" };

    document.getElementById("player-one-move__img").src = imgLookup[moveOne];
    document.getElementById("player-one-move__name").textContent = moveOne;

    document.getElementById("player-two-move__img").src = imgLookup[moveTwo];
    document.getElementById("player-two-move__name").textContent = moveTwo;

    // Creating new elements
    const outcomeElement = document.createElement("p");
    outcomeElement.textContent = outcome;
    outcomeElement.setAttribute("id", "outcome");
    outcomeElement.classList.add("outcome");
    document.body.appendChild(outcomeElement);
  };

  
  const playButton = document.getElementById("play-btn");
  playButton.addEventListener("click", playGame);
  