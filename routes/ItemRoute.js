import express from 'express';
import items from '../Data/items.json';
import _ from 'lodash';

const router = express.Router();

let itemsArray = items;

router.get('/', (req, res) =>{
    res.json(itemsArray);
})

router.post('/', (req, res) =>{
    itemsArray.push(req.body);
    res.status(200).send("OK");
})

router.get('/:id', (req, res) =>{
    const id = req.params.id;
    const item = _.find(items, item => item.id === id);
    if(item) {
        res.json(item);
    }else{
        console.log('not found');
        res.send('NOT FOUND');
    }
})

module.exports = router;
