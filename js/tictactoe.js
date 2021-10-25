// Constants
const playerNameInputField = document.querySelector('.input-field-player-name');
const addPlayerButton = document.querySelector('.add-player-button');
const resetGameButton = document.querySelector('.reset-game-button');

// Player One items
const playerOneLabel = document.querySelector('.player-one-label');
const addPointsPlayerOneButton = document.querySelector('.add-points-player1-button');

// Player Two items
const playerTwoLabel = document.querySelector('.player-two-label');
const addPointsPlayerTwoButton = document.querySelector('.add-points-player2-button');

// Variables
const players = []; // Array to store (2) players

//Initialize game
resetGame(); 

// Event listeners
if (addPlayerButton) {
    addPlayerButton.addEventListener("click", addPlayer);
}

if (resetGameButton) {
	resetGameButton.addEventListener("click", resetGame);
}

if (addPointsPlayerOneButton) {
	addPointsPlayerOneButton.addEventListener("click", addPointsPlayerOne);
}

if (addPointsPlayerTwoButton) {
	addPointsPlayerTwoButton.addEventListener("click", addPointsPlayerTwo);
}

/**
 * LET OP: 🔴 Task 1 staat helemaal onderaan!
 */

// Functions
// 🔴 Task 2: create and add 2 players with this function
// First check if there are 2 players already. If so: then show an alert and do nothing
function addPlayer() {
    if (players.length >= 2) {
        alert("There are 2 players (or more) already. Press Reset button to start a new game.");       
        return;
    }

    const playerName = playerNameInputField.value;
    let symbol = "X";
    if (players.length == 1) {
        symbol = "O";
    }
    
    //We can create a new player from the Player class and add the player to the array
    const newPlayer = new Player(playerName, symbol,); //Add the correct information
    //Add the new player to the players Array
    players.push(newPlayer);

    printPlayers();
}

function printPlayers() {
    playerNameInputField.value = ""; // Clear name input field

    // 🔴 Task 3: print the information contained within the 2 player-objects.
    console.log(players);

    // Clear player text when there are no players
    if (players.length == 0) {
        console.log("No one to play");
        playerOneLabel.innerHTML = "Enter player one..";
        playerTwoLabel.innerHTML = "Enter player two..";

        return;
    }

    let playersText = "";

    // Hints:
    // Create and print Player One text (playerOneLabel.innerHTML)
    // Create and print Player Two text (playerTwoLabel.innerHTML)
    // The text must contain the name, symbol and score!

    for(let i = 0; i < players.length; i++) {
        let player = players[i];
        //let playersText = "Name: " + player.playerName + "<br>"; etc..
        playersText = "Name: " + player.name + "<br> Symbol: " + player.symbol + "<br> Score: " + player.points;

        if (i == 0) { // Player One
            //Set text of player One label
            playerOneLabel.innerHTML = playersText;

        } else if (i == 1) {            
            //Set text of player One label
            playerTwoLabel.innerHTML = playersText;

            addPointsPlayerOneButton.parentElement.classList.toggle('hidden');// Show add points button for player 1
            addPointsPlayerTwoButton.parentElement.classList.toggle('hidden');// Show add points button for player 2
            board.forEach(box =>{
                box.addEventListener('click', place, {once:true});
            })
        } else {
            return;
        }
    }
}

function resetGame() {
    // 🔴 Task 5: reset the game
    console.log("Resetting the game");

    // Hide add points buttons
    addPointsPlayerOneButton.parentElement.classList.toggle('hidden');
    addPointsPlayerTwoButton.parentElement.classList.toggle('hidden');
}

function addPointsPlayerOne() {
    // 🔴 Task 4a: add a point to score of player 1
    console.log("Adding a point to score of player 1");
    players[0].addPoints();
}

function addPointsPlayerTwo() {
    // 🔴 Task 4b: add a point to score of player 2
    console.log("Adding a point to score of player 2");
    players[1].addPoints();
}

/* 
* 🟡 ADVANCED :: Combine the 2 'add points' functions above into 1 function.
*/

// 🔴 Task 1: complete the Class Player:
//Create a class method to return the name of the player (getName()...)

class Player {
    constructor(name, symbol) {
        this.name = name;
        this.symbol = symbol;
        this.points = 0;
    }

    addPoints() {
        this.points += 1;
    }

    getName(){
        return this.name;
    }
}






//start eigen code

let playersymbol ='X';

const board = document.querySelectorAll('.box');

let boxValues = [1,2,3,4,5,6,7,8,9];
let winner;
let draw = false;



function place(e){
    if(!winner){
        
        let box = e.target;
        box.innerHTML = playersymbol;
        for(i = 0; i<9; i++){
            if(board[i] === box){
                boxValues[i] = playersymbol;
            }
        }
        checkWinner();
        checkDraw()
        if(draw === true){
            alert('draw!');
            return;
        }
        switchPlayer();
    }

}


function switchPlayer(){
    if(playersymbol === "X"){
        playersymbol = "O";
    } else{
        playersymbol = "X";
    }
}

function checkWinner(){
    if(boxValues[0] === boxValues[1] && boxValues[0] === boxValues[2]){
        if(boxValues[0] === 'X'){
            winner = players[0].getName();
        }else{
            winner = players[1].getName();
        }
        alert(winner + ' won!');
    }else if(boxValues[3] === boxValues[4] && boxValues[3] === boxValues[5]){
        if(boxValues[3] === 'X'){
            winner = players[0].getName();
        }else{
            winner = players[1].getName();
        }
        alert(winner + ' won!');
    }else if(boxValues[6] === boxValues[7] && boxValues[6] === boxValues[8]){
        if(boxValues[6] === 'X'){
            winner = players[0].getName();
        }else{
            winner = players[1].getName();
        }
        alert(winner + ' won!');
    }else if(boxValues[0] === boxValues[3] && boxValues[0] === boxValues[6]){
        if(boxValues[0] === 'X'){
            winner = players[0].getName();
        }else{
            winner = players[1].getName();
        }
        alert(winner + ' won!');
    }else if(boxValues[1] === boxValues[4] && boxValues[1] === boxValues[7]){
        if(boxValues[1] === 'X'){
            winner = players[0].getName();
        }else{
            winner = players[1].getName();
        }
        alert(winner + ' won!');
    }else if(boxValues[2] === boxValues[5] && boxValues[2] === boxValues[8]){
        if(boxValues[2] === 'X'){
            winner = players[0].getName();
        }else{
            winner = players[1].getName();
        }
        alert(winner + ' won!');
    }else if(boxValues[0] === boxValues[4] && boxValues[0] === boxValues[8]){
        if(boxValues[0] === 'X'){
            winner = players[0].getName();
        }else{
            winner = players[1].getName();
        }
        alert(winner + ' won!');
    }else if(boxValues[2] === boxValues[4] && boxValues[2] === boxValues[6]){
        if(boxValues[2] === 'X'){
            winner = players[0].getName();
        }else{
            winner = players[1].getName();
        }
        alert(winner + ' won!');
    }
}

function checkDraw(){
    if(boxValues[0] != 1 && boxValues[1] != 2 && boxValues[2] != 3 && boxValues[3] != 4 && boxValues[4] != 5 && boxValues[5] != 6 &&
        boxValues[6] != 7 && boxValues[7] != 8 && boxValues[8] != 9){
            draw = true
        }
}