const TelegramBot = require('node-telegram-bot-api');
const AssistantV1 = require('watson-developer-cloud/assistant/v1');
const TAKEN= 'xxxxxxxxx';
const watsonAssistant = new AssistantV1({
    version: '2018-07-10',
    username: 'SEU USERNAME',
    password: 'SEU PASSWORD',
    url: 'https://gateway.watsonplatform.net/assistant/api'
});

const bot = new TelegramBot(TAKEN,{ polling:true });
bot.on(['/start', '/hello'], (msg) => {bot.sendMessage('bem vindo!! Digite algo que deseja saber sobre o Itallo ou escolha alguma das opções.')});
bot.on('message',(msg)=>{
    console.log(msg);
    if(msg.text.toString() === '/start'){
    bot.sendMessage(msg.chat.id,'Olá '+ msg.from.first_name+', bem vindo!! Digite algo que deseja saber sobre o Itallo ou escolha alguma das opções.',{
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
        var text_send='há um erro';
        service.message({
            workspace_id: 'workspace_id',
            input: {'text': msg.text.toString()}
            })
            .then(res => {
                //text_send = JSON.stringify(res.output.text,null, 2);
                text_send =res.output.text.toString();
              bot.sendMessage(msg.chat.id,text_send);
            })
            .catch(err => {
              console.log(err)
              bot.sendMessage(msg.chat.id,text_send);
            });
    }
});
