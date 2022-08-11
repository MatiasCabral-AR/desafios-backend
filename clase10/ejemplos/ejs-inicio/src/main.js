const express = require('express');
const app = express()

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const pets = [
        {name :'Milanesa', org:'9 de julio enterprise', birth:'2018'},
        {name: 'Pipo', org:'Villa Allende corporation', birth:'2022'},
        {name:'Papa', org:'Unquillo and associates', birth:'2017'}
    ];
    const tagline = 'Ningun concepto de programacion es chevere sin una mascota. PD : (Aguante milanesa)'
    res.render('pages/index', {pets, tagline})
})
app.listen(8080)