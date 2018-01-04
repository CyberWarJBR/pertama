
//TODO : connect to github API
  
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

// TODO : read data
let request = https.request(options, (response) => {
  // console.log('statusCode:', response.statusCode);
  // console.log('headers:', response.headers);

  response.on('data', (d) => {
    process.stdout.write(d)
  })

// TODO : patse data
// TODO : print data out

})

request.on('error', (e) => {
  console.error(e)
})
request.end()