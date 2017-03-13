const prompt = require('prompt')
// Implementation instructions
// =======================
// * Create the project from scratch. Don't just clone an existing project.
// * This includes writing configuration files for any dependencies and test framework setup.
// * You should have a reasonably thorough suite of unit tests using a real unit test framework.
// * Use the editor of your choice.
// * Init a git repo for this project.
// * Push the repo up to github.
// * Make small commits as you go to illustrate your thought process and be able to back out changes easily.
// * Don't forget to push your final solution up to Github.
// * Add a professional-looking README file with installation and usage instructions.
let gameBoard = null;
let player1 = null;
let player2 = null;
let currentPlayer = null;
let won = null;
let playedMoves= [];

let makeBoard = function(gridSize){
    won = false;
    let board = [];
    let n = gridSize;

    function makeRow(n,y){
        let row = [] ;
            for (var i = 0; i < n; i++) {
                let node = {
                    x: i,
                    y: y,
                    val: '*',
                    line: '|'
                }

                if(i === (n - 1)){
                    node.line = '';
                }

                row.push(node)
            }
        return row;
    }

    for (var i = 0; i < n; i++) {
        let newRow = makeRow(n,i);
        board.push(newRow);
    }

gameBoard = board;

console.log('Who is player 1 and player 2? \n');

prompt.get(['player1name', 'player2name'], function (err, ans) {
    player1 = ans.player1name;
    player1.mark = 'X'
    player2 = ans.player2name;
    player2.mark = 'O'

    console.log('Here is the new board');
    renderBoard();
    console.log(ans.player1name+', goes first! \n');
    currentPlayer = player1;
    playRound(currentPlayer);
});

}

function toggleBoard(row, col){
    if (currentPlayer === player1){
        gameBoard[row][col].val = 'X';
        playedMoves.push([row, col])
    } else {
        gameBoard[row][col].val = 'O';
    }
}

function checkAvail(row, col) {
    let move = JSON.stringify([row, col])
    for (var i = 0; i < playedMoves.length; i++) {
            if ( move === JSON.stringify(playedMoves[i])){
                return false;
            } else {
                return true;
            }
    }
}

function playRound(player) {
    console.log('It is your turn '+ currentPlayer +', where would you like to place your mark? Enter x, y coordinates \n')
    prompt.get(['row', 'col'], function (err, ans) {

        if (checkAvail(ans.row, ans.col) === true){

        toggleBoard(ans.row, ans.col)
        switchPlayer();
        renderBoard();

            if (won === false){
                playRound(currentPlayer)
            } else {
                console.log('Great job!')
            }
        } else {
            console.log('Those coordinates have already been played, please try again');
            playRound(currentPlayer);
        }
    });
}

function switchPlayer(){
    if(currentPlayer === player1){
        currentPlayer = player2;
    } else {
        currentPlayer = player1;
    }
}

function renderBoard() {
    let flPart = '--------------';

    for (var i = 0; i < gameBoard.length; i++) {

    let line = '';
    let floor = '';

        for (var j = 0; j < gameBoard[i].length; j++) {
            line = line + '      ' + gameBoard[i][j].val + '      ' + gameBoard[i][j].line
            floor = floor + flPart;
        }

    console.log(line);
    console.log(floor)
    }
}


//script starts here!
console.log("Howdy! Let's start the game! \n")
console.log("How large would you like the board to be? \nPlease enter a single digit. Entering 3 would give you a 3 x 3 board \n")

prompt.get(['gridSize'], function (err, ans) {
console.log('GAME ON! The grid will be: '+ans.gridSize+' x '+ans.gridSize+'\n');
makeBoard(ans.gridSize)
});