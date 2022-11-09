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
}

class Player {
    constructor() {
        this.playerHand = [];
        this.playerScore = 0;
    }
}

testDeck = new Deck();

const player1 = new Player();
const player2 = new Player();

function splitDeck(gameDeck){
    let halfDeck = Math.ceil(gameDeck.cards.length / 2); 
player1.playerHand = gameDeck.cards.slice(0, halfDeck);
player2.playerHand = gameDeck.cards.slice(-halfDeck);

const playerOneCard = player1.playerHand.pop();
return playerOneCard;
}
