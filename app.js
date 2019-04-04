const TelegramBot = require('node-telegram-bot-api');
const TAKEN= 'xxxxxxxxx';
const bot = new TelegramBot(TAKEN,{ polling:true });
bot.on(['/start', '/hello'], (msg) => {bot.sendMessage('Welcome!')});
bot.on('message',(msg)=>{
    console.log(msg);
    bot.sendMessage(msg.chat.id,'Olá '+ msg.from.first_name+', bem vindo!!',{
        "reply_markup": {
            "keyboard":[["linkedin"],["site pessoal"],["Telefone"]]}
    });
});

// bot.sendMessage(msg.chat.id, "Welcome", {
//     "reply_markup": {
//         "keyboard": [["Sample text", "Second sample"],   ["Keyboard"], ["I'm robot"]]
//         }
//     });