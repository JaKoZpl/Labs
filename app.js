import express from 'express';

const PORT = 3000;
const server = express();
console.log("Hello, world!");
const message = 'Hello NodeJs!!!!';
console.log(message);
server.listen(PORT, () => {
    console.log('Server has been started on port ' + PORT)
})

server.get('/', (req, res) => {
    res.send("Hello my js-route!");
});
