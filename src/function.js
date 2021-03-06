const cards = require('./cards.js');
const specialCards = require('./specialCards.js');
const fs = require('fs');

const func = {
    draw: (amount, target, event) => {
        // drawing mechanic
        event.channel.send(`${target} has drawn ${amount} card(s).`);
    },
    reverse() {
        // skip next player
    },
    createDeck() {
        const color = ['red', 'yellow', 'blue', 'green'];
        const deck = new Array();
        for (let i=0;i<4;i++) { // creating normal cards
            for (let j=1;j<10;j++) { // create 10 (1~9) numbered cards
                const normalCard = new cards(color[i], j, 'deck');
                deck.push(normalCard);
            }
            for (let k=0;k<2;k++) {
                const reverseCards = new specialCards(color[i], 98, 'deck', 'reverse', 0);
                deck.push(reverseCards);
                const plus2Cards = new specialCards(color[i], 99, 'deck', 'drawing', 2);
                deck.push(plus2Cards);
            }
            const plus4Cards = new specialCards('black', 100, 'deck', 'drawing', 4);
            deck.push(plus4Cards);
        }
        fs.writeFile('deck.json', JSON.stringify(deck, undefined, 2), (err) => {
            if (err) throw err;
            console.log(deck);
            console.log('Deck has successfully been created.');
        });
        return deck;
    },
    clean: text => {
        if (typeof (text) === 'string') {
            return text.replace(/`/g, '`' + String.fromCharCode(8203)).replace(/@/g, '@' + String.fromCharCode(8203));
        } else {
            return text;
        }
    },
    randInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
};

module.exports = func;