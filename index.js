/* eslint-disable no-unused-vars */

const Discord = require('discord.js');
const client = new Discord.Client();
const Attachment = new Discord.Attachment();
const config = require('./config.json');
const token = require('./token.json');
const fc = require('./src/function.js');

client.on('ready', () => {
    client.user.setActivity('UNO');
    console.log('Bot has been launched without issues!');
});

let deck = fc.createDeck(); // init deck with all cards

client.on('message', msg => {
    if (msg.author.bot) return;
    if (msg.content.indexOf(config.prefix) !== 0) return;
    const args = msg.content.slice(config.prefix.length).trim().split(/ /);
    const command = args.shift().toLowerCase();

    switch(command) {
    case 'start': {
        /*
        - init deck
        - distribute hands
        - pull card from deck to play
        - send player hands in MP 
        - Make human play first
        - send message to tell player game has started
        */
        break;
    }
    case 'eval':
        try {
            const code = args.join(' ');
            let evaled = eval(code);
            if (typeof evaled !== 'string') {
                evaled = require('util').inspect(evaled);
                msg.channel.send(fc.clean(evaled), {
                    code: 'xl'
                });
            }
        } catch (err) {
            msg.channel.send(`\`ERROR\` \`\`\`xl\n${fc.clean(err)}\n\`\`\``);
        }
        break;
    case 'help':
        // list of commands
        break;
    default:
        msg.channel.send('command was not recognized. refer yourself to the \'help\' command.');
    }
});

client.login(token.token);