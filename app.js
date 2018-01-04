
let profile = require('./profile.js')

// let profiles =['rizafahmi', 'yofri', 'cyberwarjbr']
// profiles.map(user =>{
// 	return profile.get(user)
// })
// 

let profiles = process.argv.slice(2)
profiles.map(profile.get)