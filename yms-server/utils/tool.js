const uuidv1 = require('uuid/v1')
const moment = require('moment')

module.exports = {
  getUUID () {
    let uuid = uuidv1()
    return uuid.toString().replace(/[-]/g, '')
  },
  getCurrentTime () {
    return moment().format('YYYY-MM-DD HH:mm:ss')
  }
}