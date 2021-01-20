const Discord = require('discord.js');
const client = new Discord.Client();
prefix = '--'
client.once('ready', () => {
    console.log('I am ready');
});  

client.login('ODAxMzM0ODI1NDk5ODg1NTcw.YAfLNg.MBV4vOAlViMuo_3if9t1MeIzyLA');

client.on('message', message => {
    if(message.content === prefix + 'Testing'){
        message.channel.send('Taosting');
    }else if(message.content === prefix + 'server name'){
        message.channel.send(message.guild.name);
    }else if(message.content === prefix + 'server member'){
        message.channel.send("Total Members: " + message.guild.memberCount);
    }
})