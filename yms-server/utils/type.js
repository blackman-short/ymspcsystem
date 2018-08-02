module.exports = {
  isArray (data) {
    return Object.prototype.toString.call(data).toLowerCase() === '[object array]'
  },

  isNumber (data) {
    return Object.prototype.toString.call(data).toLowerCase() === '[object number]'
  }
}