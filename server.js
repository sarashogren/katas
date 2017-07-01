// http://codingdojo.org/kata/Tennis/

// HELPERS - "our libraries"

function assertEqual(expected, actual) {
    if (expected == actual) {
        console.log(".");
    } else {
        console.log("Test Failed! " + expected + " does not equal " + actual);
    }
}

// SUT - System under test ("the code")

function scoreBoard(score) {
    if (score == 1) {
        return "15";
    } else if (score == 2) {
        return "30";
    } else if (score == 3) {
        return "40";
    } else if (score == 0) {
        return "Love"; 
    }
   return "Invalid Tennis Score";
}

function tennisScore(player1, player2) {
    if (player1 == player2 && player1 >= 3) {
        return "Deuce";
    } else if (player2 == player1 + 1 && player2 >= 4) {
        return "Advantage Player 2";
    } else if (player2 + 1 == player1 && player1 >= 4) {
        return "Advantage Player 1";
    } else if (player1 == (player2 + 2) && player2 >= 3) {
        return "Player 1 Wins";
    } else if (player1 + 2 == player2 && player1 >= 3) {
        return "Player 2 Wins";
    }
    return scoreBoard(player1) + " - " + scoreBoard(player2);
}

// TESTS - "the tests"

assertEqual("Love - Love", tennisScore(0, 0));
assertEqual("15 - 15", tennisScore(1, 1));
assertEqual("30 - 15", tennisScore(2, 1));
assertEqual("30 - 40", tennisScore(2, 3));
assertEqual("Deuce", tennisScore(3, 3));
assertEqual("Deuce", tennisScore(5, 5));
assertEqual("Advantage Player 2", tennisScore(3, 4));
assertEqual("Advantage Player 1", tennisScore(4, 3));
assertEqual("Player 1 Wins", tennisScore(5, 3));
assertEqual("Player 2 Wins", tennisScore(3, 5));
assertEqual("Invalid Tennis Score", scoreBoard(3.2));

process.exit();
