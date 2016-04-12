var http = require('http');
function request(options, callback) {
  var req = http.request(options, (res) => {
    res.setEncoding('utf8');
    var d = ''
    res.on('data', (chunk) => {
      d+= chunk
      // console.log(`BODY: ${chunk}`);
    });
    res.on('end', () => {
      // console.log('No more data in response.')
      callback(res.headers, d)
      req.abort()
    })
  })


  // req.on('error', (e) => {
  //   console.log(`problem with request: ${e.message}`);
  // });
  req.end()
}


// request({hostname: 'sun.aidaojia.com',path:'/pages/login.html'}, (header,body) => {
//
// })

module.exports = request
