require('dotenv').config();
const bot = require('node-telegram-bot-api');

    // token marso
    const token = process.env.token

const client = new bot(token, { polling: true });

client.onText(/\/echo (.+)/, (msg, match) => {
    const idchat = msg.chat.id;
    const resp = match[1];

    client.sendMessage(idchat, resp);
});

client.on('message', (msg) => {
    const idchat2 = msg.chat.id;

    client.sendMessage(idchat2, 'messaggio');
});
