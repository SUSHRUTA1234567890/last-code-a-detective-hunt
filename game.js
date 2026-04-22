'use strict';

class Game {
    constructor(title) {
        this.title = title;
        this.players = [];
    }

    addPlayer(player) {
        this.players.push(player);
        console.log(`${player} has joined the game: ${this.title}`);
    }

    start() {
        console.log(`Starting the game: ${this.title}`);
        // Logic to start the game goes here
    }
}

// Example usage:
const myGame = new Game('Detective Hunt');
myGame.addPlayer('Player1');
myGame.start();
