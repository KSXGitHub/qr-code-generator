'use strict'
const {env} = require('process')
const {createServer} = require('http')
const next = require('next')
const app = next(__dirname)
const handle = app.getRequestHandler()
const port = Number(env.PORT || 5000)

console.info('[INFO] Serving...', {port})
createServer(handle).listen(port)
