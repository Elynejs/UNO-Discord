/* eslint-disable no-unused-vars */

const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const token = require('./token.json');
const fc = require('./src/function.js');

client.on('ready', () => {
    client.user.setActivity('UNO');
    console.log('Bot has been launched without issues!');
});

client.on('message', msg => {
    if (msg.author.bot) return;
    if (msg.content.indexOf(config.prefix) !== 0) return;
    const args = msg.content.slice(config.prefix.length).trim().split(/ /);
    const command = args.shift().toLowerCase();

    switch(command) {
    case 'start':
        fc.createDeck(msg); // init deck with all cards
        /*
        - init deck
        - distribute hands
        - pull card from deck to play
        - send player hands in MP 
        - Make human play first
        - send message to tell player game has started
        */
        break;
    case 'help':
        // list of commands
        break;
    default:
        msg.channel.send('command was not recognized. refer yourself to the \'help\' command.');
    }
});

client.login(token.token);