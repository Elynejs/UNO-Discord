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
});

client.login(token.token);