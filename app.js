
//TODO : connect to github API
// TODO : read data
// TODO : patse data
// TODO : print data out

  
const https = require('https');

const options = {
  hostname: 'api.github.com',
  port: 443,
  path: '/users/yofri',
  method: 'GET',
  headers: {
  	'user-agent' : 'nodejs'
  }
}


let req = https.request(options, (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  // res.on('data', (d) => {
  //   process.stdout.write(d);
  // });
});

req.on('error', (e) => {
  console.error(e);
});
req.end();