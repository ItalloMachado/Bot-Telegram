const TelegramBot = require('node-telegram-bot-api');
const TAKEN= 'xxxxxxxxx';
const bot = new TelegramBot(TAKEN,{ polling:true });
bot.on(['/start', '/hello'], (msg) => {bot.sendMessage('Welcome!')});
bot.on('message',(msg)=>{
    console.log(msg);
    if(msg.text.toString() === '/start'){
    bot.sendMessage(msg.chat.id,'Olá '+ msg.from.first_name+', bem vindo!!',{
        "reply_markup": {
            "keyboard":[["linkedin"],["site pessoal"],["Github"]]}
    });
    }else if(msg.text.toString() === 'linkedin'){
        bot.sendMessage(msg.chat.id,'Linkedin: https://www.linkedin.com/in/itallo-machado-70902865/',{
            "reply_markup": {
                "keyboard":[["linkedin"],["site pessoal"],["Github"]]}
        });
    }else if(msg.text.toString() === 'site pessoal'){
        bot.sendMessage(msg.chat.id,'Site pessoal: https://itallomachado.github.io/ ',{
            "reply_markup": {
                "keyboard":[["linkedin"],["site pessoal"],["Github"]]}
        });
    }else if(msg.text.toString() === 'Github'){
        bot.sendMessage(msg.chat.id,'Github: https://github.com/ItalloMachado',{
            "reply_markup": {
                "keyboard":[["linkedin"],["site pessoal"],["Github"]]}
        });
    }else{
        bot.sendMessage(msg.chat.id,'Você digitou: '+ msg.from.text,{
            "reply_markup": {
                "keyboard":[["linkedin"],["site pessoal"],["Github"]]}
        });
    }
});
