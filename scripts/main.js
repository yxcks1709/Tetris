import { BoardTetris } from '/scripts/boardTetris.js'
import {Tetromino, TetrominioTypes} from '/scripts/tetromino.js'

const canvasTetris = document.getElementById("canvas-tetris")
const rows = 20;
const cols = 10;
const cellSize = 26;
const space = 2;

const boardTetris = new BoardTetris(canvasTetris, rows, cols, cellSize, space);
const tetrominioType = TetrominioTypes.T;
const tetrominio = new Tetromino(canvasTetris, cellSize, tetrominioType.shapes, tetrominioType.initPosition, tetrominioType.id);

function update(){

    boardTetris.draw();
    tetrominio.draw(boardTetris);
    requestAnimationFrame(update);
}
update();