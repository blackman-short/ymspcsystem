const Employee = require('../models').Employee

/**
 * Adds one employee's account.
 * @param {Object} employee 
 */
async function add (employee) {
  const employeeInfo = new Employee(employee)
  const insertResult = await employeeInfo.save()
  return insertResult
}

/**
 * Employee login
 * @param {Object} param0 
 */
async function findOneByPhoneAndPwd ({phoneNumber, password}) {
  const condition = {
    phoneNumber: phoneNumber,
    password: password
  }

  const fields = {
    id: 1,
    name: 1,
    phoneNumber: 1,
    _id: 0
  }

  const query = Employee.findOne(condition).select(fields)

  return query.exec()
}

/**
 * Querys all employees information.
 */
async function findAll () {
  let query = Employee.find({isActive: true})
  return query.exec()
}

exports.add = add
exports.findAll = findAll
exports.findOneByPhoneAndPwd = findOneByPhoneAndPwd