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
async function login ({phoneNumber, password}) {
  
}

exports.add = add
exports.login = login