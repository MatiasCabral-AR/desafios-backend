const express = require('express');
const app = express();

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/meter', (req, res) => {
    const {min, nivel, max, titulo} = req.query
    res.render('meter.pug', {min:min, nivel:nivel, max:max, titulo:titulo})
})

app.listen(8080);