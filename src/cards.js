module.exports = class cards {
    constructor(color, number, where) {
        this.color = color; // color of the card - String
        this.number = number; // number on the corner of the card, 98 for reverse cards, 99 for +2 cards, 100 for +4 cards - Number
        this.where = where; // where is the card either "player", "computer" or "deck" - String
    }
};