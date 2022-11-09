// WAR!

const suits = ['Spades', 'Hearts', 'Clubs', 'Diamonds'];    // Declared constant variables containing information to create cards with
const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
const ranks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

class Card {    // Card class that creates an object with a card Value or name, card suit, and rank of card to compare against other cards in the game
    constructor(cardValue, cardSuit, cardRank) {
        this.cardValue = cardValue;
        this.cardSuit = cardSuit;
        this.cardRank = cardRank;

    }
}



class Deck {    // Deck class that assembles 52 Card objects into an array, contains them in the  .cards property
    constructor() {
    this.cards  = [];

        for (let suit in suits) {   // two for in loops that iterate through all permutations of card values, suits, and ranks, then pushes each card object to this.cards
            for (let rank in ranks) {
                this.cards.push(new Card(values[rank], suits[suit], ranks[rank]));
            }
        }
    }

    shuffleDeck() {     // function that takes two random indexes and swaps the card objects in each position, 1000 times to shuffle deck
        for (let i = 0; i < 1000; i++) {
            let x = Math.floor(Math.random() * this.cards.length);
            let y = Math.floor(Math.random() * this.cards.length);
            let temporary = this.cards[x];

            this.cards[x] = this.cards[y];
            this.cards[y] = temporary;
        }
    }
} 

class Player {      // Player class that is used to store each player's deck and their score
    constructor() {
        this.playerHand = [];
        this.playerScore = 0;
    }
}

const gameDeck = new Deck();    // creating a new Deck and shuffling it
gameDeck.shuffleDeck();

const player1 = new Player();   // creating two new Players, named player1 and player2
const player2 = new Player();

function splitDeck(gameDeck){   // function to split the deck array equally and put half of the card objects into player one's hand, and the other half in player two's hand
    let halfDeck = Math.ceil(gameDeck.cards.length / 2); 
player1.playerHand = gameDeck.cards.slice(0, halfDeck);
player2.playerHand = gameDeck.cards.slice(-halfDeck);


}
splitDeck(gameDeck);

console.log('<---- WAR! ---->');

for (i = 0; i < 26; i++) {      // for loop that iterates through each turn of the game, for every card

    const playerOneCard = player1.playerHand.pop();    // Each turn, a card object is removed from each player's hand and stored in constant variables
    const playerTwoCard = player2.playerHand.pop();

    console.log(`
    <---- Round ${(i + 1) } ---->
    Player One's Card: ${playerOneCard.cardValue} of ${playerOneCard.cardSuit}
    VS.
    Player Two's Card: ${playerTwoCard.cardValue} of ${playerTwoCard.cardSuit}`);   // Compares each players card, via card value and suit
        if (playerOneCard.cardRank > playerTwoCard.cardRank) {  // If, if else, and else statements to determine who to give points to depending on who has the winning card
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
FINAL SCORE - Player One: ${player1.playerScore} VS. Player Two: ${player2.playerScore}`);  //Displays final scores, then declares a winner for whoever has most points
if (player1.playerScore > player2.playerScore) {
    console.log(`Player One Wins!`);
} else if (player1.playerScore < player2.playerScore) {
    console.log(`Player Two Wins!`);
} else {
    console.log(`Tie Game! You're both Losers!`);
}