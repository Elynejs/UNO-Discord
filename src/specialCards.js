const cards = require('./cards.js');
const fc = require('./function.js');

module.exports = class specialCards extends cards {
    constructor(color, number, where, type, amount) {
        super(color, number, where);
        this.type = type; // type of special card, either "drawing" or "reverse" or "skip"
        this.amount = amount; // amount of card drawn, either "2", "4", or "0" for reverse cards
        this.command = `${color}${type}${amount}`;
    }

    effect() {
        if (this.type == 'drawing') {
            fc.draw(this.amount, fc.target());
        }
        else if (this.type == 'reverse') {
            fc.reverse();
        }
    }

    image(event) {
        event.channel.send({
            files: [{
                attachement: `./cardspng/${this.color}${this.type}${this.amount}.png`,
                name: `${this.color}${this.type}${this.amount}`
            }]
        });
    }
};