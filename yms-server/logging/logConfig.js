const path = require('path')
const logPath = process.env.LOG_PATH || path.resolve(__dirname, '../logs')

module.exports = {
  dirname: logPath,
  filename: 'ymsclinic-server-%DATE%.log',
  datePattern: 'YYYY-MM-DD',
  level: process.env.LOG_LEVEL || 'debug',
  maxSize: '20m',
  maxFiles: '30d'
}