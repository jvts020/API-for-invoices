const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool;

router.get('/', (req, res, next) => {
    res.status(200).send({
        Status : "/User Get ok"
    });
});

router.get('/:id', (req, res, next) =>{
    const id = parseInt(req.params.id);
    res.status(200).send({
        Status: "/User/" + id + " Get Ok"
    });
});

router.post('/', (req, res, next) =>{

    const user = {
        
    }

    res.status(201).send({
        Status: "/User Post Ok"
    });
});

router.put('/', (req, res, next) =>{
    res.status(204).send({
        Status: "/User Put Ok"
    });
});

router.delete('/', (req, res, next) =>{
    res.status(204).send({
        Status: "/User Delete Ok"
    });
});

module.exports = router;