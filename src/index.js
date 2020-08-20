import "./styles/index.scss";
import Game from './scripts/game';


document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById("ship-game");
    const ctx = canvas.getContext('2d');

    const newGame = new Game(canvas, ctx);
    newGame.start();

    const inputSection = document.getElementById("input-section");

    inputSection.addEventListener('submit', handleSubmit);
    const playerWord = document.getElementById('player-word');

    function handleSubmit(e) {
        e.preventDefault();
        newGame.checkWord(playerWord.value.trim());
        inputSection.reset();
    };

    document.addEventListener("keypress", handleEnter);

    function handleEnter(e){
        if (e.key === 'Enter'){
            handleSubmit(e);
        }
    };

});