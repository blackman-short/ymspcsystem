const mongoose = require('mongoose')

/**
 *
 */

const Express = require('express')
const config = require('./configuration')
var bodyParser = require('body-parser')
const routers = require('./routes')
const logConfig = require('./logging/logConfig')
const logUtil = require('./logging')
const fs = require('fs')
var app = new Express()

// allow custom header and CORS
app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', req.headers.origin || '*')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header('Access-Control-Allow-Credentials', true) // 可以带cookies
  res.header('X-Powered-By', '3.2.1')
  if (req.method === 'OPTIONS') {
    res.send(200)
  } else {
    next()
  }
})

/**
 * 确定目录是否存在，如果不存在则创建目录
 */
var confirmPath = function (pathStr) {
  if (!fs.existsSync(pathStr)) {
    fs.mkdirSync(pathStr)
  }
}

/**
 * 初始化log相关目录
 */
var initLogPath = function () {
  // 创建log的根目录'logs'
  if (logConfig.dirname) {
    confirmPath(logConfig.dirname)
  }
}

initLogPath()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// routes
app.use('/', routers)

// error handler
app.use(function (err, req, res, next) {
  logUtil.logMessageAndError('server error', err)
  return res.status(500).send({
  })
})

app.listen(3000, function () {
  console.log(`the server is start at port 3000`)
})

mongoose.Promise = global.Promise
mongoose.connection.openUri(config.db, function (err) {
  if (err) {
    console.log(`connect to ${config.db} failed. ${err.message}`)
    logUtil.logMessageAndError(`connect to ${config.db} failed.`, err)
    process.exit(1)
  } else {
    console.log(`connect to ${config.db} successful.`)
  }
})

module.exports = app

