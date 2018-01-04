const https = require('https')

let get = (username) => {
const options = {
  hostname: 'api.github.com',
  port: 443,
  path: `/users/${username}`,
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
  	let profile = JSON.parse(body)

  	if (response.statusCode === 200) {
		console.log(`${profile.login} owns ${profile.public_repos}.`)
  	
  	} else {
  		console.log(`profile dan username'${username} not found`)
  	}

 })
  
})

request.end()

request.on('error', (e) => {
  console.error(e)
})
}
module.exports = {get}