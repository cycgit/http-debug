var request = require('request');


request.get({url: 'http://tms.aidaojia.com'},function (err, res, body) {
    console.log(res);

})
