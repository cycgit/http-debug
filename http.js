const http = require('http')
const url = require('url')

const hostname = '127.0.0.1'
const port = 9000

var request = require('./req');

const server = http.createServer((req, res) => {

  request({hostname:'sun.aidaojia.com', path: '/xxx.html'}, (header, body) =>{

    res.writeHead(200, header)
    res.end(body)
  })


})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})


function show(obj) {
  for(var name in obj){
      if(name.indexOf('_') == -1){
        console.log(name)
      }
  }
}
