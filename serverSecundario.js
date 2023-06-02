const express = require('express');
const path = require('path');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'public'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use('/', (req, res) => {
  res.render('index.html');
});

let messages = [];

io.on('connection', (socket) => {
  console.log(`Socket conectado: ${socket.id}`);

  socket.emit('previousMessages', messages);

  socket.on('sendMessage', (data) => {
    messages.push(data);
    socket.broadcast.emit('receivedMessage', data);
    // Emitir a mensagem para o namespace do servidor mestre
    io.of('/').emit('receivedMessage', data);
  });
});

server.listen(3001, () => {
  console.log('Servidor Slave iniciado na porta 3001');
});

// Conectar ao servidor mestre
const socket = require('socket.io-client')('http://localhost:3000');

socket.on('connect', () => {
  console.log('Conectado ao servidor mestre');

  // Detectar desconexão do servidor mestre
  socket.on('disconnect', () => {
    console.log('Desconectado do servidor mestre');
    // Assumir o controle do chat
    server.listen(3000, () => {
      console.log('Servidor Slave assumiu o controle na porta 3000');
    });
  });
});