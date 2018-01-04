
//TODO : connect to github API
  
const https = require('https');

const options = {
  hostname: 'api.github.com',
  port: 443,
  path: '/users/cyberwarjbr',
  method: 'GET',
  headers: {
  	'user-agent' : 'nodejs'
  }
}

// TODO : read data
let request = https.request(options, (response) => {

  let body = ''

  response.on('data', (data) => {
    body = body + data
  })

  response.on('end', () => {

// TODO : patse data

let profile = JSON.parse(body)
console.log(profile.id)
})
  // TODO : print data out
  
  
})

request.on('error', (e) => {
  console.error(e)
})

request.end()
