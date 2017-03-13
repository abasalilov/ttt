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

let makeBoard = function(gridSize){
    let board = [];
    let n = gridSize;

    function makeRow(n,y){
        let row = [] ;
            for (var i = 0; i < n; i++) {
                let node = {
                    x: i,
                    y: y,
                    val: null,
                    line: null
                }

                row.push(node)
            }
        return row;
    }

    for (var i = 0; i < n; i++) {
        let newRow = makeRow(n,i);
        board.push(newRow);
    }

gameBoard = board

prompt.get(['player1name', 'player2name'], function (err, ans) {
    player1 = ans.player1name;
    player2 = ans.player2name;

console.log('Player 1, '+ans.player1name+', goes first! ');
playRound(player1);
});

}

prompt.get(['gridSize'], function (err, ans) {
console.log('GAME ON! The grid will be: '+ans.gridSize+' x '+ans.gridSize);
makeBoard(ans.gridSize)
});


function playRound(player) {
    renderBoard();
    console.log(player1 + ' your turn, where would you like to place your next move? Enter x, y coordinates')
    prompt.get(['player1 Move'], function (err, ans) {
        console.log(' inside player1 move')
        // playRound(player1);
});
}