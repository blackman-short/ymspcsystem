// 预约信息.
const mongoose = require('mongoose')
const tool = require('../../utils/tool')
const defaultScheduleTime = require('../../configuration').defaultScheduleTime

const subscribeSchema = new mongoose.Schema({
  id: { type: String, default: tool.getUUID },
  scheduleDate: { type: String, default: tool.getCurrentDate },
  scheduleTime: { type: String, default: defaultScheduleTime },
  createAt: { type: String, default: tool.getCurrentTime }
})

mongoose.model('Subscribe', subscribeSchema)