const Discord = require('discord.js');

var bot = new Discord.Client();

const prefixoDeComando = "/";

bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}!`);
});

// Listener Mensagens: É disparado sempre que uma mensagem é recebida em algum lugar
bot.on('message', msg => {

    let autor = msg.author
    let conteudoDaMensagem = msg.content

    // Comando de Ping
    if(conteudoDaMensagem.toUpperCase() === prefixoDeComando + 'PING'){
        msg.channel.send('Pong')
    }

    if(msg.channel.id = "508379525579800578"){
        if(isNaN(conteudoDaMensagem) && !msg.author.bot){
            msg.delete().then(() => {
                msg.channel.send('Sua mensagem foi deletada.. Só é possivel enviar numeros neste canal!')
                    .then(mensagemEnviada => setTimeout(() => mensagemEnviada.delete(), 5000))
            })
        }
    }


})


bot.login(require('./env.js').token);