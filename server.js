const data = require('./data.js');
const express = require('express');
const app = express();

app.get('/games', (req, res) => {
    res.json(data);
});

app.get('/games/:id', (req, res) => {
    const id = 'Destiny';
    const game = data.find(game => game.id === id)
    res.json(game);
})

module.exports = app;
