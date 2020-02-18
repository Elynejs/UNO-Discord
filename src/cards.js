module.exports = class cards {
    constructor(color, number, where) {
        this.color = color; // color of the card
        this.number = number; // number on the corner of the card, 99 for special cards
        this.where = where; // where is the card either "player1", "player2" or "deck"
    }
};