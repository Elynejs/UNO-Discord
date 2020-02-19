const cards = require('./cards.js');
const fc = require('./function.js');

module.exports = class specialCards extends cards {
    constructor(color, number, where, type, amount) {
        super(color, number, where);
        this.type = type; // type of special card, either "drawing" or "reverse"
        this.amount = amount; // amount of card drawn, either "2", "4", or "0" for reverse cards
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