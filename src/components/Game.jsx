import {useState} from "react";
import './Game.css';





const Game = () => {
    const [playerVal, setPlayerVal] = useState(null);
    const [computerVal, setComputerVal] = useState(null);
    const [playerScore, setPlayerScore] = useState(0);
    const [compScore, setCompScore] = useState(0);

    const logic = (playerVal, computerVal) => {
        if (playerVal === computerVal) {
            return 0;
        } else if(
            (playerVal === "ROCK" && computerVal === "SCISSORS") || 
            (playerVal === "SCISSORS" && computerVal === "PAPER") ||
            (playerVal === "PAPER" && computerVal === "ROCK")
        ) {
            return 1;
        } else{
            return -1;
        }
    }

    const decision = (playerChoice) => {
        const choices = ["ROCK", "PAPER", "SCISSORS"];
        const compChoice = choices[Math.floor(Math.random() * choices.length)];
        const val = logic(playerChoice, compChoice);

        if (val === 1) {
            setPlayerVal(playerChoice);
            setComputerVal(compChoice);
            setPlayerScore(prevScore => prevScore +1);

        } else if (val === -1) {
            setPlayerVal(playerChoice);
            setComputerVal(compChoice);
            setCompScore(prevScore => prevScore +1);
        } else {
            setPlayerVal(playerChoice);
            setComputerVal(compChoice);
        }
    }
    return(
        <div className="container">
        <h1> Welcome to Rock, Paper, Scissors Game</h1>
        <div>
        <button onClick={() => decision("ROCK")}>
        <i className="fas fa-hand-rock" />
        ROCK
        </button>
        <button onClick={() => decision("PAPER")}>
        <i className="fas fa-hand-paper" />
        PAPER
        </button>
        <button onClick={() => decision("SCISSORS")}>
        <i className="fas fa-hand-scissors" />
        SCISSORS
        </button>
        </div>
        <div className="content">
        <p>Your choice: {playerVal}</p>
        <p>Computer's choice: {computerVal}</p>
        <h2>Your Score: {playerScore}</h2>
        <h2>Computer Score: {compScore}</h2>
        
        </div>

        </div>
    );
}
export default Game;