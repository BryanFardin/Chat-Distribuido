// Servidor Secundario

const express = require('express');
const path = require('path');
const socketIO = require('socket.io-client');

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const masterSocket = socketIO('http://localhost:3000');

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'public'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use('/', (req, res) => {
  res.render('index.html');
});

let messages = [];

io.on('connection', (socket) => {
  console.log(`Socket connected: ${socket.id}`);

  socket.emit('previousMessages', messages);

  socket.on('sendMessage', (data) => {
    messages.push(data);
    socket.broadcast.emit('receivedMessage', data); // Transmite a mensagem para os clientes conectados ao servidor escravo
  });
});

masterSocket.on('connect', () => {
  console.log('Connected to master server');
});

masterSocket.on('disconnect', () => {
  console.log('Master server disconnected');
  // Tomar medidas para assumir o controle do chat, por exemplo, mudar a lógica de envio de mensagens
  masterSocket.close()
  server.close()
  server.listen(3000, () => {
    console.log('Slave server running on port 3000');
  });
});

server.listen(3001, () => {
  console.log('Slave server running on port 3001');
});