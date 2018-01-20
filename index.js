#! /usr/bin/env node
const {resolve} = require('path')
const {spawn} = require('child_process')
const {env, exit, stdout, stderr} = require('process')

const child = spawn('node', [resolve(__dirname, 'server.js')], {
  env: {
    ...env,
    NODE_ENV: 'production'
  }
})

child.on('exit', (status, signal) => {
  signal && console.info({status, signal})
  exit(status)
})

child.stdout.on('data', chunk => stdout.write(chunk))
child.stderr.on('data', chunk => stderr.write(chunk))
