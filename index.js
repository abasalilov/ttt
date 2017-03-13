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

    console.log('new Board', board)
}

makeBoard(3)

