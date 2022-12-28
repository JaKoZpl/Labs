import express from 'express';
import items from '../Data/items.json';
import _ from 'lodash';

const router = express.Router();

module.exports = router;

router.get('/', (req, res) =>{
    res.json(items);
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
