/* eslint-disable no-unused-vars */

const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const token = require('./token.json');
const fs = require('fs');

client.on('ready', () => {
    client.user.setActivity('UNO');
    console.log('Bot has been launched without issues!');
});

client.on('message', msg => {
    const args = msg.content.slice(config.prefix.length).trim().split(/ /);
    const command = args.shift().toLowerCase();

    switch(command) {
    case 'start':
        // not exactly sure yet
        break;
    case 'help':
        // list of commands
        break;
    default:
        msg.channel.send('command was not recognized. refer yourself to the \'help\' command.');
    }
});

client.login(token.token);