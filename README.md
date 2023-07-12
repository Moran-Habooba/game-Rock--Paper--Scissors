# Rock Paper Scissors Game

This project is a simple Rock Paper Scissors game that allows users to play against the computer. The user can choose a weapon (rock, paper, or scissors) and compete against the computer’s randomly selected weapon. The scores are displayed, and the game continues until one player reaches a score of 5.

### Technologies Used

•HTML
•CSS
•JavaScript
•Audio Api

### How to Play

1.Clone the repository to your local machine.
2.Open the index.html file in your web browser.
3.The Rock Paper Scissors game will be displayed on the screen.
4.Click on one of the weapon options (rock, paper, or scissors) to select your weapon.
5.The computer will randomly select its weapon.
6.The game will determine the winner based on the selected weapons.
7.The scores for the player and computer will be updated accordingly.
8.The first player to reach a score of 5 wins the game.
9.To play again, click the “Play Again” button.

### Code Explanation

The JavaScript code handles user interactions and game logic. Here are some key functions:

•computerPlay(): This function randomly selects a weapon for the computer.
•updateScore(playerWeapon, computerWeapon): This function determines the winner based on the selected weapons and updates the scores.
•selectWeapon(): This function is called when the user selects a weapon. It retrieves the player’s weapon and awaits the computer’s weapon, then updates the score.
•resetGame(): This function resets the game by resetting the scores and clearing the game area.
•disableOptions(), enableOptions(): These functions disable or enable the weapon options based on the game state.
•Event Listeners: Event listeners are added to the weapon options and the “Play Again” button to handle user interactions and trigger the corresponding functions.

Feel free to explore the code for further understanding.
