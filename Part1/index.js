
// Board Array
const board = [];



//Function for Player
function play(clickedId){

   //Player Selection
    const playerSpan = document.getElementById('player');

   //Clicked Element Selection 
    const clickedElement = document.getElementById(clickedId);

    // If statement to check if X
    if(playerSpan.innerText === 'X'){

        playerSpan.innerText = 'O';
        clickedElement.innerText = 'X';
        board[clickedId] = 'X';

    // Else statement to check if O    
    } else {

    
        playerSpan.innerText = 'X';
        clickedElement.innerText = 'O';
        board[clickedId] = 'O';
    }

    const topLeft = board[0];
    const topMiddle = board[1];
    const topRight = board[2];
    const middleLeft = board[3];
    const middle = board[4];
    const middleRight = board[5];
    const bottomLeft = board[6];
    const bottomMiddle = board[7];
    const bottomRight = board[8];

    if (topLeft !== undefined && topLeft === topRight && topLeft === topMiddle){
        alert(topLeft + ' is the winner!');
        return;
    } 
    if (topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft){
        alert(topLeft + ' is the winner!')
        return;
    }
    if (topLeft !== undefined && topLeft === middle && topLeft === bottomRight){
        alert(topLeft + ' is the winner!')
    }
    if (topMiddle !== undefined && topMiddle === middle && topMiddle === bottomMiddle){
        alert(topMiddle + ' is the winner!')
        return;
    }
    if (topRight !== undefined && topRight === middleRight && topRight === bottomRight){
        alert(topRight + ' is the winner!')
        return;
    }
    if (topRight !== undefined && topRight === middle && topRight === bottomLeft){
        alert(topRight + ' is the winner!')
        return;
    }
    if (middle !== undefined && middle === middleLeft && middle === middleRight){
        alert(middle + ' is the winner!')
        return;
    }
    if (bottomLeft !== undefined && bottomLeft === bottomMiddle && bottomLeft === bottomRight){
        alert(bottomLeft + ' is the winner!')
    }

    for (i = 0; i < board.length; i++){
        let boardFull = true;
        if(board[i] === undefined){
            boardFull = false;
        } 
    }
    if (boardFull === true){
        alert('Cats game, there is no winner');
    }

}

