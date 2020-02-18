const cards = require('./cards.js');
const fc = require('./function.js');

module.exports = class specialCards extends cards {
    super(type, amount) {
        this.type = type; // type of special card, either "drawing" or "reverse"
        this.amount = amount; // amount of card drawn, eitehr "2", "4", or "0" for reverse cards
    }

    draw() {
        if (this.amount > 0) {
            fc.draw(this.amount, fc.target());
        }
    }

    reverse() {
        if (this.type == 'reverse') {
            fc.reverse();
        }
    }
};