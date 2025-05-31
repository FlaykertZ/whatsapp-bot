const { mainMessage, ideasMessage, workInProgress, computerProblem, otherProblems, windowsProblems, telephoneProblems, internetProblems, SBProblems } = require('./replyMessages'); // No .js needed in CommonJS

const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

// Initialize client

console.log("starting bot...")

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
const answerThree = new Set();

// Log when authentication is successful
client.on('authenticated', () => {
    console.log("[AUTH] Successfully authenticated!");
});

// Log when authentication fails
client.on('auth_failure', (msg) => {
    console.error("[AUTH FAIL] Authentication failed:", msg);
});

// Log when the client is loading and trying to connect
client.on('loading_screen', (percent, message) => {
    console.log(`[LOADING] ${percent}% - ${message}`);
});

// Log when client is ready
client.on('ready', () => {
    console.log("[READY] Client is ready!");
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

        otherProblems(message)
        answerOne.delete(sender)
        answerThree.add(sender)

        //message.reply("הודעה זו אמירה להביא לכם עזרה לגבי תקלות שהם לוו דווקא מחשוב כגון עזרה בחיים, כלכלה וכו \n בוט זה עדיין בעבודה ולכן עצמכם הסליחה 🙏🙏")
    } else if (message.body === '3' && answerOne.has(sender)) {
        ideasMessage(client, message)
    } else if (message.body === '1' && answerTwo.has(sender)){
        windowsProblems(message)
    } else if (message.body === '2' && answerTwo.has(sender)){
        telephoneProblems(message)
    } else if (message.body === '3' && answerTwo.has(sender)){
        internetProblems(message)
    } else if (message.body === '1' && answerThree.has(sender)){
        SBProblems(message)
    } else if (message.body === '2' && answerThree.has(sender)){
        workInProgress(message)
    } else if (message.body === '3' && answerThree.has(sender)){
        workInProgress(message)
    }
})

// Start the client
client.initialize();
