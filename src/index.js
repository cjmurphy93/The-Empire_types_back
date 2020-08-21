import "./styles/index.scss";
import Game from './scripts/game';


document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById("ship-game");
    const ctx = canvas.getContext('2d');

    const inputSection = document.getElementById("input-section");
    
    const playerWord = document.getElementById('player-word');

    inputSection.addEventListener('submit', handleSubmit);
    
    document.addEventListener("keypress", handleEnter);

    const newGame = new Game(canvas, ctx);
    newGame.start();

    function handleSubmit(e) {
        e.preventDefault();
        newGame.checkWord(playerWord.value.trim());
        inputSection.reset();
    };

    function handleEnter(e){
        if (e.key === 'Enter'){
            handleSubmit(e);
        }
    };

});