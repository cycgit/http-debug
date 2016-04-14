var http = require('http');
var url = require('url')

function proxy(cReq, cRes) {
    var u = url.parse(cReq.url);

    console.log(cReq.url)

    var options = {
        hostname : u.hostname,
        port     : u.port || 80,
        path     : u.path,
        method     : cReq.method,
        headers     : cReq.headers
    };

    var pReq = http.request(options, function(pRes) {
        cRes.writeHead(pRes.statusCode, pRes.headers);
        pRes.pipe(cRes);
    }).on('error', function(e) {
        cRes.end();
    });

    cReq.pipe(pReq);

}


module.exports = proxy
