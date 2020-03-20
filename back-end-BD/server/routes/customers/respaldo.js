const express = require('express');
const _ = require('underscore');
const app = express();
const mongobackup = require('mongobackup');

app.get('/collections', (req, res) => {
    mongobackup.dump({
        host: 'localhost',
        db: 'sample_airbnb',
        out: './dump'
    });
    res.send(res.status(200).json({
        ok: true,
        msg: 'El respaldo ha sido guardado exitosamente!'
    }))


});


module.exports = app;