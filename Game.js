//WarCardGame

//create a class for the cards
class Card {
    constructor(face, value, suit) {
        this.face = face; 
        this.value = value; 
        this.suit = suit;    
    }
}

//Deck Creation
class Deck {
    constructor() {
        this.cardDeck= [];
    }
        
    createDeck() {
        const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
        const faces = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
        const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
      
        for (let suit in suits) {
            for (let i = 0; i < faces.length; i++) {
                this.cardDeck.push(new Card(suits[suit], faces[i], values[i]));
            } 
            
        }  
    }
    
    shuffle(cardDeck) {
        for (let i = this.cardDeck.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = this.cardDeck[i];
            this.cardDeck[i] = this.cardDeck[j];
            this.cardDeck[j] = temp;    
            }
        }
       
    deal() {
        return this.cardDeck.pop()
    }
}
//Class Creation

class Player {
    constructor(name) {
    this.name = name;
    this.points = 0; 
    this.hand = []; 
    }
}

class Game {
    constructor() {
        this.players = [];
    }

    //Start Game

    startAWar() {
        alert('Higher Card Wins!');
        this.players.push(new Player('Benji')); 
        this.players.push(new Player('Bugatti'));

        let playGame = new Deck();
        playGame.createDeck();
        playGame.shuffle();
            
        for (let i = 0; i < 26; i++) { 
            this.players[0].hand = playGame.deal(); 
            this.players[1].hand = playGame.deal();
            
            if (this.players[0].hand.value > this.players[1].hand.value){ 
                console.log(`Round ${i + 1}: 
                Benji's ${this.players[0].hand.suit} of ${this.players[0].hand.face} 
			    vs
                Bugatti's ${this.players[1].hand.suit} of ${this.players[1].hand.face}`);
                
                this.players[0].points += 1; 
                console.log(`${this.players[0].name} wins this round!`)
        
            } else if(this.players[0].hand.value < this.players[1].hand.value) { 
                console.log(
                `Round ${i + 1}: 
                Benji's ${this.players[0].hand.suit} of ${this.players[0].hand.face} 
                vs
                Bugatti's ${this.players[1].hand.suit} of ${this.players[1].hand.face}`);
                    
                    this.players[1].points += 1; 
                    console.log(`${this.players[1].name} wins this round!`);
            } else {   
                console.log(`Battle ${i + 1}:
                Tie! No one gets points because no one won the round.`);
            }
            
        }
      
        if(this.players[0].points > this.players[1].points) {
            alert('Benji Rules!')
            return console.log('Benji wins with ' + this.players[0].points + ' points!');
        
        }else if(this.players[0].points < this.players[1].points) {
            alert('Bugatti Rules!')
            return console.log('Bugatti wins with ' + this.players[1].points + ' points!');
        
        }else{
            alert('No one wins!')
            return console.log('It was a tie!'); 
        }
    }
}

//instance of Game to start the game
let newGame = new Game();
newGame.startAWar();