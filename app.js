var express = require('express')
var ejs = require('ejs')
var request = require('request');

const app = express()




app.set('view engine', 'ejs')
app.set('views', 'views')
app.engine('html', ejs.__express)


// app.use('/static', express.static('static', {Mixed: false}))




app.use((req, ress) => {
    console.log(req.headers)
    request.get({url: req.host},function (err, res, body) {

        ress.end(body)
    })
})



app.listen(9000,function(){
    console.log(`listent to 9000`);
});
