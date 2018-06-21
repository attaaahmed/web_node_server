const express = require('express');
const hbs = require('hbs');
var app = express();
const fs = require('fs');
const port = process.env.PORT || 3000;

hbs.registerPartials(__dirname + '/views/partilas');


hbs.registerHelper('getcurrentyear', () => {
    return new Date().getFullYear();
});


app.use(express.static(__dirname + '/web'))
app.set('view engine', 'hbs');
app.engine('html', require('hbs').__express);

// app.use((req, res, next) => {
//     var now = new Date().toString();
//     var log = `${now}:${req.method} ${req.url}`;
//     console.log(log)
//     fs.appendFile('server.log', log + '\n', (err) => {
//         if (err) {
//             console.log('Unabel to append log to the system');
//         }
//     });

//     next();
// });
app.use((req, res, next) => {
    res.render('main.hbs');
})
app.get('/', (req, res) => {
    res.render('site.html', {
        pagetitle: 'A Story For Wisdom',
    })
});

app.get('/action', (req, res) => {
    res.render('action.hbs', {
        pagetitle: 'Action',
    });
})
app.get('/drama', (req,res)=>{
  res.render('drama.hbs',{
    pagetitle: 'Drama',
  });
})
app.listen(port, () => {
    console.log(`server is working on port ${port}`)
});
