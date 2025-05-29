const mineflayer = require('mineflayer');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.get('/', (req, res) => {
  res.send('✅ I bot Minecraft sono attivi!');
});

app.listen(PORT, () => {
  console.log(`🌐 Server Express in ascolto su porta ${PORT}`);
});


function createBot1() {
  const bot1 = mineflayer.createBot({
    host: 'Land-Ambo137.aternos.me',
    port: 29172,
    username: 'Gay',
    version: '1.20.4'
  });

  bot1.on('spawn', () => {
    console.log("✅ Bot1 connesso al server Land-Ambo137!");
  });

  bot1.on('chat', (username, message) => {
    if (username === bot1.username) return;
    if (message === 'ciao') {
      bot1.chat(`Ciao ${username}!`);
    }
  });

  bot1.on('end', () => {
    console.log("⚠️ Bot1 disconnesso. Riconnessione in 30 secondi...");
    setTimeout(createBot1, 30000);
  });
}

function createBot2() {
  const bot2 = mineflayer.createBot({
    host: 'CansasMC.aternos.me',
    port: 30113,
    username: 'lucailbot',
    version: '1.19.2'
  });

  bot2.on('spawn', () => {
    console.log("✅ Bot2 connesso al server CansasMC!");
  });

  bot2.on('chat', (username, message) => {
    if (username === bot2.username) return;
    if (message === 'ciao') {
      bot2.chat(`Ciao ${username}!`);
    }
  });

  bot2.on('end', () => {
    console.log("⚠️ Bot2 disconnesso. Riconnessione in 30 secondi...");
    setTimeout(createBot2, 30000);
  });
}

// Avvia entrambi i bot
createBot1();
createBot2();
