const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: 'Land-Ambo137.aternos.me', // Cambia con l'IP del tuo server
    port: 29172,                   // Cambia se usi una porta diversa
    username: 'Gay',        // Nome del bot (può essere qualsiasi)
    version: '1.20.4' // forza questa versione  
  });

  bot.on('spawn', () => {
    console.log("✅ Il bot si è connesso al server!");
  });

  bot.on('chat', (username, message) => {
    if (username === bot.username) return;

    if (message === 'ciao') {
      bot.chat(`Ciao ${username}!`);
    }
  });

  bot.on('end', () => {
    console.log("⚠️ Disconnesso. Riconnessione in 30 secondi...");
    setTimeout(createBot, 30000); // Riconnessione automatica ogni 30s
  });
}

createBot();
