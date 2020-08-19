import "./styles/index.scss";
import Game from './scripts/game';


document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById("ship-game");
    const ctx = canvas.getContext('2d');

    const newGame = new Game(canvas, ctx);
    newGame.start();

});