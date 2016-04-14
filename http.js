const http = require('http')

const hostname = '127.0.0.1'
const port = 9000
var proxy = require('./proxy')


const server = http.createServer((req, res) => {
    proxy(req, res)
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
