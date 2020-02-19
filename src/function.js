const cards = require('./cards.js');
const color = ['red', 'yellow', 'blue', 'green'];

const func = {
    target() {
        // figure out target
    },
    draw: (amount, target) => {
        // drawing mechanic
    },
    reverse() {
        // skip next player
    },
    createDeck(event) {
        const deck = new Array();
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j <= 10; j++) { // create 11 (0~10) numbered cards
                const card = new cards(color[i], j, 'deck');
                deck.push(card);
            }
        }
        console.log(deck);
        event.channel.send('Deck has been created.');
    }
};

module.exports = func;