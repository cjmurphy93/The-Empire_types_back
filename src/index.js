import "./styles/index.scss";
import Game from './scripts/game';
import * as firebaseAPI from './scripts/firebasedb';



document.addEventListener('DOMContentLoaded', () => {
    // firebaseAPI.signIn();
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
    var newGame = new Game(canvas, ctx, bgCtx, pCtx);
    
    document.addEventListener("keypress", removeSplash);

    const startBtn = document.getElementById('start');
    startBtn.addEventListener("click", removeSplash);

    document.addEventListener('keydown', restartGame)

    

    function removeSplash(e) {
        if ((e.key === 'Enter') || (e.type === "click")) {
            const splash = document.getElementById("splash");
            const leaderboard = document.getElementById("leaderboard-container");
            leaderboard.style.display = 'none';
            splash.style.display = 'none';
            document.removeEventListener("keypress", removeSplash);
            startBtn.removeEventListener("click", removeSplash);
            newGame.start();
            playerWord.focus();
        }
    }



    function handleSubmit(e) {
        e.preventDefault();
        newGame.checkWord(playerWord.value.toLowerCase().trim());
        inputSection.reset();
    };

    function restartGame(e) {
        if (newGame.gameOver) {
            if (e.ctrlKey && (e.key === ' ' || e.key === 'Spacebar')) {
            const leaderboard = document.getElementById("leaderboard-container");
            leaderboard.style.display = 'none';
                newGame = null;    
                newGame = new Game(canvas, ctx, bgCtx, pCtx);
                const playerWord = document.getElementById('player-word');
                playerWord.autoFocus = true;
                const inputSection = document.getElementById("input-section");
                inputSection.style.display = 'block';
                inputSection.reset();
                newGame.start();
                playerWord.focus();
            }
        }
    }

    // const body = document.getElementsByTagName('BODY')
    // body.addEventListener('beforeunload', firebase.signOut)
    // body.addEventListener('unload', e => {
    //         firebaseAPI.signOut();
    //     });
    });

    // window.onunload = firebaseAPI.signOut