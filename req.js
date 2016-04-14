var http = require('http');

var options = {
  hostname: 'tms.aidaojia.com',
};

var req = http.request(options, (res) => {

  console.log(`HEADERS: ${JSON.stringify(res.headers)}`);

  res.setEncoding('utf8');
  res.on('data', (chunk) => {
    //   console.log('data coming');
    console.log(`BODY: ${chunk}`);
  });


  res.on('end', () => {
    // console.log('No more data in response.')
  })


});

req.end();
