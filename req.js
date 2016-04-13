var http = require('http');

var options = {
  hostname: 'tms.aidaojia.com',
  path: '/static/img/img8.jpg',
  method: 'GET'
};

var req = http.request(options, (res) => {

  console.log(`STATUS: ${res.statusCode}`);
  console.log(`HEADERS: ${JSON.stringify(res.headers)}`);

  res.setEncoding('utf8');

  res.on('data', (chunk) => {
      console.log(1);
    // console.log(`BODY: ${chunk}`);
  });
  res.on('end', () => {
    // console.log('No more data in response.')
  })
});

req.on('error', (e) => {
  console.log(`problem with request: ${e.message}`);
});

req.end();
