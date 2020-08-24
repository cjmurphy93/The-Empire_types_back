import "./styles/index.scss";
import Game from './scripts/game';


document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById("ship-game");
    const ctx = canvas.getContext('2d');
    const bgCanvas = document.getElementById("bg-canvas");
    const bgCtx = bgCanvas.getContext('2d');
    const pCanvas = document.getElementById("player-screen");
    const pCtx = pCanvas.getContext('2d');

    const inputSection = document.getElementById("input-section");
    
    const playerWord = document.getElementById('player-word');
    playerWord.autofocus = true;

    inputSection.addEventListener('submit', handleSubmit);
    const newGame = new Game(canvas, ctx, bgCtx, pCtx);
    
    document.addEventListener("keypress", removeSplash);

    function removeSplash(e) {
        if (e.key === 'Enter') {
            const splash = document.getElementById("splash");
            splash.style.display = 'none';
            document.removeEventListener("keypress", removeSplash)
            newGame.start();
            playerWord.focus();
        }
    }



    function handleSubmit(e) {
        e.preventDefault();
        newGame.checkWord(playerWord.value.trim());
        inputSection.reset();
    };



});