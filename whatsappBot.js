const { mainMessage, ideasMessage, workInProgress, computerProblem, otherProblems, windowsProblems, telephoneProblems, internetProblems } = require('./replyMessages'); // No .js needed in CommonJS

const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

// Initialize client

const client = new Client({
    authStrategy: new LocalAuth() // 👈 Persistent login
});

// Show QR code in terminal for authentication
client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

const greetedUsers = new Set();
const answerOne = new Set();
const answerTwo = new Set();

// On successful login
client.on('ready', () => {
    console.log("Bot is ready!");
});

client.on('message', async (message) => {

    const sender = message.from;
    const isGroup = message.from.endsWith('@g.us');

    if (isGroup) return;

    if (message.body === '0' && greetedUsers.has(sender)) {

        mainMessage(message)
        answerTwo.delete(sender)
        answerOne.add(sender)

    }


    if (!greetedUsers.has(sender)){
        greetedUsers.add(sender);

        mainMessage(message)

        answerOne.add(sender)
    }

    if (message.body === '1' && answerOne.has(sender)) {

        computerProblem(message)
        answerTwo.add(sender)
        answerOne.delete(sender)
        
    } else if (message.body === '2' && answerOne.has(sender)){

        workInProgress(message)
        answerOne.delete(sender)

        //message.reply("הודעה זו אמירה להביא לכם עזרה לגבי תקלות שהם לוו דווקא מחשוב כגון עזרה בחיים, כלכלה וכו \n בוט זה עדיין בעבודה ולכן עצמכם הסליחה 🙏🙏")
    } else if (message.body === '3' && answerOne.has(sender)) {
        ideasMessage(client, message)
    } else if (message.body === '1' && answerTwo.has(sender)){
        windowsProblems(message)
    } else if (message.body === '2' && answerTwo.has(sender)){
        telephoneProblems(message)
    } else if (message.body === '3' && answerTwo.has(sender)){
        internetProblems(message)
    }
})

// Start the client
client.initialize();
