// https://www.youtube.com/watch?v=TlB_eWDSMt4
// Node.js Tutorial for Beginners: Learn Node in 1 Hour | Mosh
// 2020.10.7

const http = require('http')
const server = http.createServer( (req,res) => {
    if(req.url == '/') {
        res.write("Hello World")
        res.end();
    }

    if(req.url == '/api/course') {
        res.write(JSON.stringify([1,2,3]))
        res.end()
    }

})

//const server = http.createServer()
//server.on('connection', (socket) => {
//    console.log('New Connection...')
//})

server.listen(3000)

console.log('Listening on port 3000...')

