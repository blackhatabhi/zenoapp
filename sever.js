var express = require('express')
const  app = express()
const http = require('http').Server(app)

app.use(express.static('public'))
app.use(express.static('/assets'))

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public')
});

http.listen(process.env.PORT || 5353, function () {
    console.log(`server started on http://localhost:5353`)
});
// server.listen(process.env.PORT || 4545 , () => {
//     console.log('server started on http://localhost:4545')
//   });