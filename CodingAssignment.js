// WAR!

const suits = ['Spades', 'Hearts', 'Clubs', 'Diamonds']
const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace']
const ranks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

class Card {
    constructor(cardValue, cardSuit, cardRank) {
        this.cardValue = cardValue;
        this.cardSuit = cardSuit;
        this.cardRank = cardRank;

    }
}



class Deck {
    constructor() {
    this.cards  = [];

        for (let suit in suits) {
            for (let rank in ranks) {
                this.cards.push(new Card(values[rank], suits[suit], ranks[rank]));
            }
        }
    }

    shuffleDeck() {
        for (let i = 0; i < 1000; i++) {
            let x = Math.floor(Math.random() * this.cards.length);
            let y = Math.floor(Math.random() * this.cards.length);
            let temporary = this.cards[x];

            this.cards[x] = this.cards[y];
            this.cards[y] = temporary;
        }
    }
}

class Player {
    constructor() {
        this.playerHand = [];
        this.playerScore = 0;
    }
}

const gameDeck = new Deck();
gameDeck.shuffleDeck();

const player1 = new Player();
const player2 = new Player();

function splitDeck(gameDeck){
    let halfDeck = Math.ceil(gameDeck.cards.length / 2); 
player1.playerHand = gameDeck.cards.slice(0, halfDeck);
player2.playerHand = gameDeck.cards.slice(-halfDeck);


}
splitDeck(gameDeck);

console.log(player1.playerHand)

console.log('<---- WAR! ---->');

for (i = 0; i < 26; i++) {

    const playerOneCard = player1.playerHand.pop();
    const playerTwoCard = player2.playerHand.pop();

    console.log(`
    <---- Round ${(i + 1) } ---->
    Player One's Card: ${playerOneCard.cardValue} of ${playerOneCard.cardSuit}
    VS.
    Player Two's Card: ${playerTwoCard.cardValue} of ${playerTwoCard.cardSuit}`);
        if (playerOneCard.cardRank > playerTwoCard.cardRank) {
            player1.playerScore++;
            console.log(`
    <---- Player One Wins Round ${(i + 1)}! ---->

    Player One's Score: ${player1.playerScore} VS. Player Two's Score: ${player2.playerScore}`);
        } else if (playerOneCard.cardRank < playerTwoCard.cardRank) {
            player2.playerScore++;
            console.log(`
    <---- Player Two Wins Round ${(i + 1)}! ---->

    Player One's Score: ${player1.playerScore} VS. Player Two's Score: ${player2.playerScore}`);
        } else {
            console.log(`
            Round ${(i + 1)} ends in a tie, no points awarded.

            Player One's Score: ${player1.playerScore} VS. Player Two's Score: ${player2.playerScore}
            `);
        }
}
console.log(`<---- Game end! ---->
FINAL SCORE - Player One: ${player1.playerScore} VS. Player Two: ${player2.playerScore}`);
if (player1.playerScore > player2.playerScore) {
    console.log(`Player One Wins!`);
} else if (player1.playerScore < player2.playerScore) {
    console.log(`Player Two Wins!`);
} else {
    console.log(`Tie Game! You're both Losers!`);
}