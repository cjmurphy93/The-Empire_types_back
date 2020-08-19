import "./styles/index.scss";
import Game from './scripts/game';


document.addEventListener('DOMContentLoaded', () => {
const canvas = document.getElementById("ship-game");
new Game(canvas);

});