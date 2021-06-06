### [Tic Tac Toe Game](https://learn.freecodecamp.org/coding-interview-prep/take-home-projects/build-a-tic-tac-toe-game)

_This project is part of the [freeCodeCamp legacy curriculum](https://www.freecodecamp.org), which helps you to learn how to code through online courses, projects and also provides interview preparation._


#### Project Guidelines

The aim for this project was to build an unbeatable tic tac toe game. FreeCodeCamp allowed us to use whichever libraries or APIs that we required to solve this challenge. The design and UI was up to us to create.  
To complete the project, the below **user stories** needed to be fulfilled:
- I am able to play a game of tic tac toe with the computer
- The game restarts as soon as it is over
- I am able to choose to play as 'X' or 'O' (which side)
- The game's score is kept
- It is impossible to beat the computer


#### Project Approach

I decided to build this game using React and first built up the game's UI with different componenets, before I jumped into any of the coding. 

I started by adding small functionality to the game, such as getting the symbols ('X' and 'O') to show up on the game board when a player clicks on a square. Then I build up the game's logic so that the computer will make a move after the play clicks on a square within the game board. 

I created one modal window to display upon starting the game, which asks the user to pick which side ('X' or 'O') that they want to play as. Then I created the modal which pops up once the game is over and indicates who won. I added some CSS transitions to smooth out the game's UI. 

At the end, I implemented the minimax algorithm to get the computer to make the best available move and make it unbeatable. 

#### Made with
- HTML, CSS, JavaScript & React
- Favicon made by [Freepik](http://www.freepik.com) from [www.flaticon.com](https://www.flaticon.com/) is licensed by [CC 3.0 BY](http://creativecommons.org/licenses/by/3.0/)
- Background image from [Transparent Textures](https://www.transparenttextures.com)


#### Preview

Check out my live [tic tac toe game online](https://davidpnowak.com/p/tic-tac-toe/)!

![Screenshot of my tic tac toe game built in React](https://confidenceiskey.github.io/codepenimg/tictactoe.jpeg "Screenshot of my tic tac toe React App")

##

#### Disclaimer

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

