function getMoveName(argMoveId){
    if(argMoveId == 1){
        return 'kamień';
    }
    else if(argMoveId == 2){
        return 'papier';
    }
    else if(argMoveId == 3){
        return 'nożyce';
    }
  
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
}

function displayResult(argComputerMove, argPlayerMove){
    if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
        printMessage('Ty wygrywasz!');
    } else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
        printMessage('Wygrywa komputer!');
    } else if (argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
        printMessage('Remis!');
    } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień'){
        printMessage('Wygrywa komputer!');
    } else if (argComputerMove == 'papier' && argPlayerMove == 'papier'){
        printMessage('Remis!');
    } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
        printMessage('Ty wygrywasz!');
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
        printMessage('Ty wygrywasz!');
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
        printMessage('Wygrywa komputer!');
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
        printMessage('Remis!');
    } else if (argPlayerMove == 'nieznany ruch'){
        printMessage('Nieznany ruch!');
    }
}

let randomNumber = Math.floor(Math.random() * 3 + 1);
let argComputerMove = getMoveName(randomNumber);
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
let argPlayerMove = getMoveName(playerInput);

console.log('Wylosowana liczba to: ' + randomNumber);

printMessage('Mój ruch to: ' + argComputerMove);

console.log('Gracz wpisał: ' + playerInput);

printMessage('Twój ruch to: ' + argPlayerMove);

displayResult(argComputerMove, argPlayerMove);
