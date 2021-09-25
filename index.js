const { token } = require("./config/config.js");

const { Client, Intents, Collection, MessageEmbed } = require('discord.js');

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS],
    partials: [
        "MESSAGE", "CHANNEL", "REACTION"
    ]
 });

// const client = new Discord.Client({
//     intents: [
//         Discord.Intents.FLAGS.GUILDS,
//         Discord.Intents.FLAGS.GUILD_MESSAGES
//     ]
// });

const prefix = '!';

const chalk = require("chalk");

const log = console.log

//   KONSOLA
//   KONSOLA
//   KONSOLA


client.once('ready', () =>
{
    log(chalk.bold.blueBright("Bot - Online"));
    log(chalk.bold.green("Jungle Diff"));

    client.user.setActivity('Jungle diff', { type: 'PLAYING' });




//   client.user.setActivity("Jgl Diff", {type: "STREAMING"}, {url: "https://www.twitch.tv/rybsonlol_"})
});

client.commands = new Collection();

const fs = require('fs');
const { diffieHellman } = require("crypto");
const commandFiles = fs.readdirSync('C:\\Users\\wojt-\\OneDrive\\Pulpit\\BotLillson\\commands\\').filter(file => file.endsWith('.js'));
for(const file of commandFiles) {
    const command = require(`C:\\Users\\wojt-\\OneDrive\\Pulpit\\BotLillson\\commands\\${file}`);

    client.commands.set(command.name, command);
}

client.on('message', message => {



    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'command') {
        client.commands.get('command').execute(message, args, MessageEmbed);
    } else if (command === 'youtube') {
         client.commands.get('youtube').execute(message, args);
    } else if (command === 'hello') {
        client.commands.get('hello').execute(message, args, message.author);
    } else if (command === 'pozycja') {
        client.commands.get('pozycja').execute(message, args, Client);
    }

});

client.login(token);