import Game from './src/game.js';
import View from './src/view.js'

const root = document.querySelector('#root');

const game = new Game();
const view = new View(root, 320, 640, 20, 10);

window.game = game;
window.view = view;

document.addEventListener('keydown', event => {
    switch(event.code) {
        case 'ArrowLeft': //LEFT ARROW
            game.movePieceLeft();
            view.render(game.getState());
            break;
        case 'ArrowRight': //RIGHT ARROW
            game.movePieceRight();
            view.render(game.getState());
            break;
        case 'ArrowUp': //UP ARROW
            game.rotatePiece();
            view.render(game.getState());
            break;
        case 'ArrowDown': //DOWN ARROW
            game.movePieceDown();
            view.render(game.getState());
            break;
    }
});