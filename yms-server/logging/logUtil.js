const winston = require('winston')
require('winston-daily-rotate-file')
const logConfig = require('./logConfig')

var transport = new (winston.transports.DailyRotateFile)(logConfig)

// transport.on('rotate', function (oldFilename, newFilename) {
//   // do something fun
// })

var logger = new (winston.Logger)({
  transports: [
    transport
  ]
})

/**
 * Log Error message
 * - message，string类型的错误信息
 * - err, Error Object 对象
 * @param {*String} message
 * @param {*Object} err
 */
async function logMessageAndError (message, err) {
  var logText = ''
  // 错误信息开始
  logText += '\n' + '*************** error log start ***************' + '\n'
  // 添加请求日志
  logText += message

  if (err) {
    // 错误名称
    logText += 'err name: ' + err.name + '\n'
    // 错误信息
    logText += 'err message: ' + err.message + '\n'
    // 错误详情
    logText += 'err stack: ' + err.stack + '\n'
  }

  // 错误信息结束
  logText += '*************** error log end ***************' + '\n'
  logger.error(logText)
}

/**
 * Log Error -- ERROR
 * - err, Error Object 对象
 * - Contains: 系统错误
 * @param {*String} functionName 方法名, 该条log出现的位置： e.g. controllers/userInfo/login
 * @param {*Object} err
 */
async function logError (functionName, err) {
  var logText = ''
  // 错误信息开始
  logText += '\n' + '*************** error log start ***************' + '\n'

  if (err) {
    // 错误名称
    logText += `[${functionName}]err name: ` + err.name + '\n'
    // 错误信息
    logText += 'err message: ' + err.message + '\n'
    // 错误详情
    logText += 'err stack: ' + err.stack + '\n'
  }

  // 错误信息结束
  logText += '*************** error log end ***************' + '\n'
  logger.error(logText)
}

/**
 * Log warning info -- WARNING
 * - Contains: 验签, 必填参数为空
 * @param {*String} functionName 方法名, 该条log出现的位置： e.g. controllers/userInfo/login
 * @param {*String} warningMsg
 */
async function logWarning (functionName, warningMsg) {
  if (!warningMsg) {
    return
  }

  var logText = ''
  logText += '\n' + '*************** WARNING log start ***************' + '\n'
  logText += `[${functionName}]` + warningMsg + '\n'
  logText += '*************** WARNING log end ***************' + '\n'
  logger.warn(logText)
}

/**
 * Log info message.
 * - Contains: db操作, 加密解密, 参数转换
 * @param {*String} functionName 方法名, 该条log出现的位置： e.g. controllers/userInfo/login
 * @param {*String} infoMsg
 */
async function logInfo (functionName, infoMsg) {
  if (!infoMsg) {
    return
  }

  var logText = ''
  logText += '\n' + '*************** Information log start ***************' + '\n'
  logText += `[${functionName}]` + infoMsg + '\n'
  logText += '*************** Information log end ***************' + '\n'
  logger.info(logText)
}

/**
 * Log debug info. -- DEBUG
 * used for: 函数, 关键逻辑, request & response.
 * @param {*String} functionName 方法名, 该条log出现的位置： e.g. controllers/userInfo/login
 * @param {*String} debugMsg
 */
async function logDebug (functionName, debugMsg) {
  if (!debugMsg) {
    return
  }

  var logText = ''
  logText += '\n' + '*************** DEBUG log start ***************' + '\n'
  logText += `[${functionName}]` + debugMsg + '\n'
  logText += '*************** DEBUG log end ***************' + '\n'
  logger.debug(logText)
}

exports.logMessageAndError = logMessageAndError
exports.logError = logError // ERROR
exports.logWarning = logWarning // WARNING
exports.logInfo = logInfo // INFO
exports.logDebug = logDebug // DEBUG
