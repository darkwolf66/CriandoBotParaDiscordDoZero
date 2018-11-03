const Discord = require('discord.js');

var bot = new Discord.Client();


const prefixoDeComando = "/";

bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}!`);
});



bot.on('message', msg => {

    let autor = msg.author
    let mensagem = msg.content.toUpperCase()

    if(mensagem === prefixoDeComando + 'PING'){
        msg.channel.send('Pong');
    }

})






bot.login('NTA4MzY1Mjg3NjQxNDQ4NDQ5.Dr-LsQ.NpAtR1ySL-J7bHlE8oC5dsUbOy4');