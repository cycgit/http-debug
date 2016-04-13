var http = require('http');
var url = require('url')

function proxy(req, res) {

    var info = url.parse(req.url)
    console.log(info);

    var proxyreq = http.request(info, (proxyres) => {
        proxyres.setEncoding('utf8');

        // console.log(proxyres)
        // proxyres.on('data', (chunk) => {
        //     res.write(chunk)
        // });
        //
        //     proxyres.on('end', () => {
        //         res.statusCode = proxyres.statusCode
        //         res.writeHead(200, proxyres.headers)
        //         res.end()
        //
        //         proxyreq.abort()
        //     })

        proxyreq.abort()
    })

    proxyreq.end()
}


module.exports = proxy
