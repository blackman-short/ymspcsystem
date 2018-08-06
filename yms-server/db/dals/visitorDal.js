const Visitor = require('../models').Visitor
const tool = require('../../utils/tool')

/**
 * Updates one visitor's information.
 * @param {Object} updateInfo 
 */
async function updateVisitor (updateInfo) {
  let updateResult = null
  const condition = {phoneNumber: updateInfo.phoneNumber}

  const visitor = await Visitor.findOne(condition)

  if (visitor) {
    const updates = {
      ...updateInfo,
      updateAt: tool.getCurrentDate()
    }
    updateResult = await Visitor.findOneAndUpdate(condition, updates)
  } else {
    const VisitorInfo = new Visitor(updateInfo)
    updateResult = await VisitorInfo.save()
  }

  return updateResult
}

/**
 * Finds one by phoneNumber.
 * @param {String} phoneNumber 
 */
async function findOneByPhone (phoneNumber) {
  const condition = { phoneNumber: phoneNumber, isActive: true }
  let query = Visitor.findOne(condition)

  return query.exec()
}

/**
 * Finds one by id.
 * @param {String} id 
 */
async function findOneById (id) {
  const condition = { id: id, isActive: true }
  let query = Visitor.findOne(condition)

  return query.exec()
}

/**
 * Finds infos by ids.
 * @param {Array} ids 
 */
async function findByIds (ids) {
  const condition = { id: { $in: ids }, isActive: true }
  let query = Visitor.findOne(condition)

  return query.exec()
}

exports.updateInfo = updateInfo