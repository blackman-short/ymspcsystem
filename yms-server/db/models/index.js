const mongoose = require('mongoose')

require('./visitorInfo')
require('./visitRecord')
require('./employeeInfo')
require('./subscribeInfo')

exports.Visitor = mongoose.model('Visitor')
exports.Employee = mongoose.model('Employee')
exports.Subscribe = mongoose.model('Subscribe')
exports.VisitRecord = mongoose.model('VisitRecord')