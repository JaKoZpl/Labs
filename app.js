import express from 'express';
import items from './Data/items.json';
import _ from 'lodash';
import ItemRoute from './routes/ItemRoute';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import path from 'path';

const BASE_ITEMS_URL = '/api/v1/items';

const server = express();
const PORT = 3000;


const message = 'Hello NodeJs!!!!';
console.log("Hello, world!");
console.log(message);

server.use(morgan('tiny'));
server.use(bodyParser.json());
server.set('views', path.join('views'));
server.set('view engine', 'ejs');

server.use(BASE_ITEMS_URL, ItemRoute);
server.get('/', (req, res) =>{
    res.render('index', {items});
});

server.get('/', (req, res) => {
    console.log("Request to root");
    res.send("Hello my js-route!");
});


server.listen( 3000, () =>{
    console.log('Server is listening on port ' + PORT);
});



