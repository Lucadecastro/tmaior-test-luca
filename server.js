const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const mongoose = require('mongoose');
const cors = require('cors');

app.use(express.static(__dirname));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}))

const Message = mongoose.model('Message',{
  name : String,
  message : String
})

const dbUrl =
  "mongodb+srv://luucadecastro:89ZUE5Up38Snx6fu@cluster0.ffkpj0f.mongodb.net/t-maior-chat-image";

app.get('/messages', (req, res) => {
  Message.find({},(err, messages)=> {
    res.send(messages);
  })
})

app.get('/messages', (req, res) => {
  Message.find({},(err, messages)=> {
    res.send(messages);
  })
})

app.post('/messages', (req, res) => {
  const message = new Message(req.body);
  message.save((err) =>{
    if(err)
      sendStatus(500);
    io.emit('message', req.body);
    res.sendStatus(200);
  })
})

io.on('connection', () =>{
  console.log('a user is connected')
})

async function connectToMongoDB() {
    const connection = await mongoose.connect(dbUrl);
    console.log('mongodb connected');
    return connection;
};

connectToMongoDB();

const server = http.listen(80, () => {
    console.log('server is running on port', server.address().port);
});